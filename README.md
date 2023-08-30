# TypeScript typings for the Figma REST API

This library provides TypeScript typings for the Figma Developers REST API. It scrapes the [Figma Developers REST API documentation](https://www.figma.com/developers/api) to generate the typings, which are then saved to `index.d.ts`.

## Installation

To install the package, use npm:

```bash
npm install --save-dev @dicebear/typings-figma-rest-api
```

## Usage

To use the typings, import them in your TypeScript code:

```typescript
import type { DOCUMENT } from '@dicebear/typings-figma-rest-api';
```

## Generating the typings

To generate the typings yourself, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/dicebear/figma-rest-api-typings.git
```

2. Install the dependencies:

```bash
npm install
```

3. Run the generator:

```bash
npm run generate
```

This will update the `index.d.ts` file with the latest typings.
