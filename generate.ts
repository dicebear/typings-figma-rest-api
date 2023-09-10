import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import { JSDOM } from 'jsdom';

const browser = await puppeteer.launch({
    headless: "new"
});
const page = await browser.newPage();

await page.goto('https://www.figma.com/developers/api');

await page.waitForSelector('#global-properties');

const bodyHandle = await page.$('body');
const innerHTML = await page.evaluate(body => body?.innerHTML, bodyHandle);
await bodyHandle?.dispose();

await browser.close();

// Parse HTML
const document = new JSDOM(innerHTML).window.document;

let output = '';

function isInterface(element: Element) {
    return element.querySelector('td:last-child [class*="--propField--"] [class*="--type--"]') !== null;
}

function getProperties(element: Element) {
    let properties = '';

    element.querySelectorAll('td:last-child [class*="--propField--"]').forEach((prop) => {
        prop.querySelector('[class*="badge--"]')?.remove();

        const propName = prop.querySelector('[class*="--monoDisplay--"]')?.textContent?.trim();
        const propType = getPropType(prop);

        if (!propName || !propType) return;

        properties += `    ${propName}: ${propType};\n`;
    });

    return properties;
}

function mapType(type: string) {
    type = type.replace('String', 'string');
    type = type.replace('Number', 'number');
    type = type.replace('Boolean', 'boolean');
    type = type.replace('Any', 'unknown');
    type = type.replace('Map<', 'Record<');

    return type;
}

function getPropType(prop: Element) {
    let propTypes: string[] = [];

    prop.querySelectorAll('[class*="--type--"]').forEach((propType) => {
        if (propType.closest('[class*="--propDesc--"]')) return;
        if (!propType.textContent?.trim()) return;
        propTypes.push(mapType(propType.textContent.trim()));
    });

    if (propTypes.length === 0 || (propTypes.length === 1 && propTypes[0] === 'string')) {
        const newPropTypes: string[] = [];

        prop.querySelectorAll('[class*="--string--"]').forEach((propType) => {
            if (!propType.textContent?.trim()) return;
            newPropTypes.push(`'${mapType(propType.textContent.trim())}'`);
        });

        if (newPropTypes.length) {
            propTypes = newPropTypes;
        }
    }

    if (propTypes.length) {
        return propTypes.join(' | ');
    }
    
    return null;
}

function isExtendingVector(element: Element) {
    let extendsVector = false;
    
    element.querySelectorAll('td:last-child [class*="--literal--"]')?.forEach((literal) => {
        if (literal.textContent?.trim() === 'VECTOR') extendsVector = true;
    });

    return extendsVector;
}

function isExtendingFrame(element: Element) {
    let extendsFrame = false;
    
    element.querySelectorAll('td:last-child [class*="--literal--"]')?.forEach((literal) => {
        if (literal.textContent?.trim() === 'FRAME') extendsFrame = true;
    });

    return extendsFrame;
}

// Global properties
document.getElementById('global-properties')?.querySelectorAll('tbody tr').forEach((row) => {
    output += `export interface Global {\n`;
    output += getProperties(row);
    output += `}\n\n`;
});

const nodeTypes: string[] = [];

// Node types
document.getElementById('node-types')?.querySelectorAll('tbody tr').forEach((row) => {
    const name = row.querySelector('td:first-child [class*="--mono--"]')?.textContent?.trim();
    
    if (!name) return;

    let extending = 'Global';

    if (isExtendingVector(row)) {
        extending = 'VECTOR';
    }

    if (isExtendingFrame(row)) {
        extending = 'FRAME';
    }

    nodeTypes.push(name);

    output += `export interface ${name} extends ${extending} {\n`;
    output += `    type: '${name}';\n`;
    output += getProperties(row);
    output += `}\n\n`;
});

output += `export type Node = ${nodeTypes.join(' | ')};\n\n`;

// File types
document.getElementById('files-types')?.querySelectorAll('tbody tr').forEach((row) => {
    const name = row.querySelector('td:first-child [class*="--mono--"]')?.textContent?.trim();

    if (!name) return;

    if (!isInterface(row)) {
        output += `type ${name} = ${getPropType(row)};\n\n`;
        return;
    }

    output += `export interface ${name} {\n`;
    output += getProperties(row);
    output += `}\n\n`;
});

// Patches
output = output.replace('type Transform = null;', 'type Transform = [[number, number, number], [number, number, number]];');
output = output.replace('interface TEXT extends VECTOR {', 'interface TEXT extends VECTOR {\n    fillOverrideTable: never;');

// Static
output += await fs.readFile('./static.d.ts', 'utf-8');

// Write to file
await fs.writeFile('./index.d.ts', output);
