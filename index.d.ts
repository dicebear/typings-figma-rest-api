export interface Global {
    readonly id: string;
    readonly name: string;
    readonly visible: boolean;
    readonly type: string;
    readonly rotation: number;
    readonly pluginData: unknown;
    readonly sharedPluginData: unknown;
    readonly componentPropertyReferences: Map<string, String>;
    readonly boundVariables: Map<string, VariableAlias | VariableAlias[]>;
}

export interface DOCUMENT extends Global {
    readonly type: 'DOCUMENT';
    readonly children: Node[];
}

export interface CANVAS extends Global {
    readonly type: 'CANVAS';
    readonly children: Node[];
    readonly backgroundColor: Color;
    readonly prototypeStartNodeID: string;
    readonly flowStartingPoints: FlowStartingPoint[];
    readonly prototypeDevice: PrototypeDevice;
    readonly exportSettings: ExportSetting[];
}

export interface FRAME extends Global {
    readonly type: 'FRAME';
    readonly children: Node[];
    readonly locked: boolean;
    readonly background: Paint[];
    readonly backgroundColor: Color;
    readonly fills: Paint[];
    readonly strokes: Paint[];
    readonly strokeWeight: number;
    readonly strokeAlign: 'INSIDE' | 'OUTSIDE' | 'CENTER';
    readonly strokeDashes: number[];
    readonly cornerRadius: number;
    readonly rectangleCornerRadii: number[];
    readonly cornerSmoothing: number;
    readonly exportSettings: ExportSetting[];
    readonly blendMode: BlendMode;
    readonly preserveRatio: boolean;
    readonly constraints: LayoutConstraint;
    readonly layoutAlign: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | 'STRETCH';
    readonly transitionNodeID: string;
    readonly transitionDuration: number;
    readonly transitionEasing: EasingType;
    readonly opacity: number;
    readonly absoluteBoundingBox: Rectangle;
    readonly absoluteRenderBounds: Rectangle;
    readonly size: Vector;
    readonly minWidth: number | null;
    readonly maxWidth: number | null;
    readonly minHeight: number | null;
    readonly maxHeight: number | null;
    readonly relativeTransform: Transform;
    readonly clipsContent: boolean;
    readonly layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL';
    readonly layoutSizingHorizontal: 'FIXED' | 'HUG' | 'FILL';
    readonly layoutSizingVertical: 'FIXED' | 'HUG' | 'FILL';
    readonly layoutWrap: 'NO_WRAP' | 'WRAP';
    readonly primaryAxisSizingMode: 'FIXED' | 'AUTO';
    readonly counterAxisSizingMode: 'FIXED' | 'AUTO';
    readonly primaryAxisAlignItems: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN';
    readonly counterAxisAlignItems: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE';
    readonly counterAxisAlignContent: 'AUTO' | 'SPACE_BETWEEN';
    readonly paddingLeft: number;
    readonly paddingRight: number;
    readonly paddingTop: number;
    readonly paddingBottom: number;
    readonly horizontalPadding: number;
    readonly verticalPadding: number;
    readonly itemSpacing: number;
    readonly counterAxisSpacing: number;
    readonly layoutPositioning: 'ABSOLUTE';
    readonly itemReverseZIndex: boolean;
    readonly strokesIncludedInLayout: boolean;
    readonly layoutGrids: LayoutGrid[];
    readonly overflowDirection: 'HORIZONTAL_SCROLLING' | 'VERTICAL_SCROLLING' | 'HORIZONTAL_AND_VERTICAL_SCROLLING';
    readonly effects: Effect[];
    readonly isMask: boolean;
    readonly isMaskOutline: boolean;
    readonly styles: Map<StyleType, string>;
}

export interface GROUP extends FRAME {
    readonly type: 'GROUP';
}

export interface SECTION extends Global {
    readonly type: 'SECTION';
    readonly sectionContentsHidden: boolean;
    readonly devStatus: Object;
    readonly fills: Paint[];
    readonly strokes: Paint[];
    readonly strokeWeight: number;
    readonly strokeAlign: 'INSIDE' | 'OUTSIDE' | 'CENTER';
    readonly children: Node[];
    readonly absoluteBoundingBox: Rectangle;
    readonly absoluteRenderBounds: Rectangle;
}

export interface VECTOR extends Global {
    readonly type: 'VECTOR';
    readonly locked: boolean;
    readonly exportSettings: ExportSetting[];
    readonly blendMode: BlendMode;
    readonly preserveRatio: boolean;
    readonly layoutAlign: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | 'STRETCH';
    readonly layoutGrow: number;
    readonly constraints: LayoutConstraint;
    readonly transitionNodeID: string;
    readonly transitionDuration: number;
    readonly transitionEasing: EasingType;
    readonly opacity: number;
    readonly absoluteBoundingBox: Rectangle;
    readonly absoluteRenderBounds: Rectangle;
    readonly effects: Effect[];
    readonly size: Vector;
    readonly relativeTransform: Transform;
    readonly isMask: boolean;
    readonly fills: Paint[];
    readonly fillGeometry: Path[];
    readonly fillOverrideTable: Map<number,PaintOverride>;
    readonly strokes: Paint[];
    readonly strokeWeight: number;
    readonly individualStrokeWeights: StrokeWeights;
    readonly strokeCap: string;
    readonly strokeJoin: string;
    readonly strokeDashes: number[];
    readonly strokeMiterAngle: number;
    readonly strokeGeometry: Path[];
    readonly strokeAlign: 'INSIDE' | 'OUTSIDE' | 'CENTER';
    readonly styles: Map<StyleType, string>;
}

export interface BOOLEAN_OPERATION extends VECTOR {
    readonly type: 'BOOLEAN_OPERATION';
    readonly children: Node[];
    readonly booleanOperation: string;
}

export interface STAR extends VECTOR {
    readonly type: 'STAR';
}

export interface LINE extends VECTOR {
    readonly type: 'LINE';
}

export interface ELLIPSE extends VECTOR {
    readonly type: 'ELLIPSE';
    readonly arcData: ArcData;
}

export interface REGULAR_POLYGON extends VECTOR {
    readonly type: 'REGULAR_POLYGON';
}

export interface RECTANGLE extends VECTOR {
    readonly type: 'RECTANGLE';
    readonly cornerRadius: number;
    readonly rectangleCornerRadii: number[];
    readonly cornerSmoothing: number;
}

export interface TABLE extends Global {
    readonly type: 'TABLE';
    readonly absoluteBoundingBox: Rectangle;
    readonly absoluteRenderBounds: Rectangle;
    readonly blendMode: BlendMode;
    readonly children: Node[];
    readonly constraints: LayoutConstraint;
    readonly effects: Effect[];
    readonly exportSettings: ExportSetting[];
    readonly relativeTransform: Transform;
    readonly size: Vector;
    readonly strokes: Paint[];
    readonly strokeAlign: 'INSIDE' | 'OUTSIDE' | 'CENTER';
    readonly strokeWeight: number;
}

export interface TABLE_CELL extends Global {
    readonly type: 'TABLE_CELL';
    readonly absoluteBoundingBox: Rectangle;
    readonly absoluteRenderBounds: Rectangle;
    readonly characters: string;
    readonly fills: Paint[];
    readonly relativeTransform: Transform;
    readonly size: Vector;
}

export interface TEXT extends VECTOR {
    readonly fillOverrideTable: never;
    readonly type: 'TEXT';
    readonly characters: string;
    readonly style: TypeStyle;
    readonly characterStyleOverrides: number[];
    readonly styleOverrideTable: Map<number,TypeStyle>;
    readonly lineTypes: string[];
    readonly lineIndentations: number[];
}

export interface SLICE extends Global {
    readonly type: 'SLICE';
    readonly exportSettings: ExportSetting[];
    readonly absoluteBoundingBox: Rectangle;
    readonly absoluteRenderBounds: Rectangle;
    readonly size: Vector;
    readonly relativeTransform: Transform;
}

export interface COMPONENT extends FRAME {
    readonly type: 'COMPONENT';
    readonly componentPropertyDefinitions: Map<string, ComponentPropertyDefinition>;
}

export interface COMPONENT_SET extends FRAME {
    readonly type: 'COMPONENT_SET';
    readonly componentPropertyDefinitions: Map<string, ComponentPropertyDefinition>;
}

export interface INSTANCE extends FRAME {
    readonly type: 'INSTANCE';
    readonly componentId: string;
    readonly isExposedInstance: boolean;
    readonly exposedInstances: string[];
    readonly componentProperties: Map<string, ComponentProperty>;
    readonly overrides: Overrides[];
}

export interface STICKY extends Global {
    readonly type: 'STICKY';
    readonly absoluteBoundingBox: Rectangle;
    readonly absoluteRenderBounds: Rectangle;
    readonly authorVisible: boolean;
    readonly backgroundColor: Color;
    readonly blendMode: BlendMode;
    readonly characters: string;
    readonly effects: Effect[];
    readonly exportSettings: ExportSetting[];
    readonly fills: Paint[];
    readonly locked: boolean;
    readonly opacity: number;
    readonly relativeTransform: Transform;
}

export interface SHAPE_WITH_TEXT extends Global {
    readonly type: 'SHAPE_WITH_TEXT';
    readonly absoluteBoundingBox: Rectangle;
    readonly absoluteRenderBounds: Rectangle;
    readonly backgroundColor: Color;
    readonly blendMode: BlendMode;
    readonly characters: string;
    readonly cornerRadius: number;
    readonly rectangleCornerRadii: number[];
    readonly cornerSmoothing: number;
    readonly effects: Effect[];
    readonly exportSettings: ExportSetting[];
    readonly fills: Paint[];
    readonly isMask: boolean;
    readonly locked: boolean;
    readonly opacity: number;
    readonly shapeType: ShapeType;
    readonly strokes: Paint[];
    readonly strokeWeight: number;
    readonly strokeCap: string;
    readonly strokeJoin: string;
    readonly strokeDashes: number[];
    readonly strokeAlign: 'INSIDE' | 'OUTSIDE' | 'CENTER';
    readonly relativeTransform: Transform;
    readonly styles: Map<StyleType, string>;
}

export interface CONNECTOR extends Global {
    readonly type: 'CONNECTOR';
    readonly absoluteBoundingBox: Rectangle;
    readonly absoluteRenderBounds: Rectangle;
    readonly backgroundColor: Color;
    readonly blendMode: BlendMode;
    readonly characters: string;
    readonly connectorStart: ConnectorEndpoint;
    readonly connectorEnd: ConnectorEndpoint;
    readonly connectorStartStrokeCap: string;
    readonly connectorEndStrokeCap: string;
    readonly connectorLineType: ConnectorLineType;
    readonly cornerRadius: number;
    readonly rectangleCornerRadii: number[];
    readonly cornerSmoothing: number;
    readonly effects: Effect[];
    readonly exportSettings: ExportSetting[];
    readonly fills: Paint[];
    readonly isMask: boolean;
    readonly locked: boolean;
    readonly opacity: number;
    readonly strokes: Paint[];
    readonly strokeWeight: number;
    readonly strokeCap: string;
    readonly strokeJoin: string;
    readonly strokeDashes: number[];
    readonly strokeAlign: 'INSIDE' | 'OUTSIDE' | 'CENTER';
    readonly textBackground: ConnectorTextBackground;
    readonly relativeTransform: Transform;
    readonly styles: Map<StyleType, string>;
}

export interface WASHI_TAPE extends VECTOR {
    readonly type: 'WASHI_TAPE';
}

export type Node = DOCUMENT | CANVAS | FRAME | GROUP | SECTION | VECTOR | BOOLEAN_OPERATION | STAR | LINE | ELLIPSE | REGULAR_POLYGON | RECTANGLE | TABLE | TABLE_CELL | TEXT | SLICE | COMPONENT | COMPONENT_SET | INSTANCE | STICKY | SHAPE_WITH_TEXT | CONNECTOR | WASHI_TAPE;

export interface Color {
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly a: number;
}

export interface ExportSetting {
    readonly suffix: string;
    readonly format: 'JPG' | 'PNG' | 'SVG';
    readonly constraint: Constraint;
}

export interface Constraint {
    readonly type: 'SCALE' | 'WIDTH' | 'HEIGHT';
    readonly value: number;
}

export interface Rectangle {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}

export interface ArcData {
    readonly startingAngle: number;
    readonly endingAngle: number;
    readonly innerRadius: number;
}

type BlendMode = 'PASS_THROUGH' | 'NORMAL' | 'DARKEN' | 'MULTIPLY' | 'LINEAR_BURN' | 'COLOR_BURN' | 'LIGHTEN' | 'SCREEN' | 'LINEAR_DODGE' | 'COLOR_DODGE' | 'OVERLAY' | 'SOFT_LIGHT' | 'HARD_LIGHT' | 'DIFFERENCE' | 'EXCLUSION' | 'HUE' | 'SATURATION' | 'COLOR' | 'LUMINOSITY';

type EasingType = 'EASE_IN' | 'EASE_OUT' | 'EASE_IN_AND_OUT' | 'LINEAR' | 'GENTLE_SPRING';

export interface FlowStartingPoint {
    readonly nodeId: string;
    readonly name: string;
}

export interface LayoutConstraint {
    readonly vertical: 'TOP' | 'BOTTOM' | 'CENTER' | 'TOP_BOTTOM' | 'SCALE';
    readonly horizontal: 'LEFT' | 'RIGHT' | 'CENTER' | 'LEFT_RIGHT' | 'SCALE';
}

export interface LayoutGrid {
    readonly pattern: 'COLUMNS' | 'ROWS' | 'GRID';
    readonly sectionSize: number;
    readonly visible: boolean;
    readonly color: Color;
    readonly alignment: 'MIN' | 'STRETCH' | 'CENTER';
    readonly gutterSize: number;
    readonly offset: number;
    readonly count: number;
}

export interface Effect {
    readonly type: 'INNER_SHADOW' | 'DROP_SHADOW' | 'LAYER_BLUR' | 'BACKGROUND_BLUR';
    readonly visible: boolean;
    readonly radius: number;
    readonly color: Color;
    readonly blendMode: BlendMode;
    readonly offset: Vector;
    readonly spread: number;
    readonly showShadowBehindNode: boolean;
}

export interface Hyperlink {
    readonly type: 'URL' | 'NODE';
    readonly url: string;
    readonly nodeID: string;
}

export interface DocumentationLink {
    readonly uri: string;
}

export interface Paint {
    readonly type: 'SOLID' | 'GRADIENT_LINEAR' | 'GRADIENT_RADIAL' | 'GRADIENT_ANGULAR' | 'GRADIENT_DIAMOND' | 'IMAGE' | 'EMOJI' | 'VIDEO';
    readonly visible: boolean;
    readonly opacity: number;
    readonly color: Color;
    readonly blendMode: BlendMode;
    readonly gradientHandlePositions: Vector[];
    readonly gradientStops: ColorStop[];
    readonly scaleMode: 'FILL' | 'FIT' | 'TILE' | 'STRETCH';
    readonly imageTransform: Transform;
    readonly scalingFactor: number;
    readonly rotation: number;
    readonly imageRef: string;
    readonly filters: ImageFilters;
    readonly gifRef: string;
    readonly boundVariables: Map<string, VariableAlias | VariableAlias[]>;
}

export interface Vector {
    readonly x: number;
    readonly y: number;
}

export interface Size {
    readonly width: number;
    readonly height: number;
}

type Transform = [[number, number, number], [number, number, number]];

export interface ImageFilters {
    readonly exposure: number;
    readonly contrast: number;
    readonly saturation: number;
    readonly temperature: number;
    readonly tint: number;
    readonly highlights: number;
    readonly shadows: number;
}

export interface FrameOffset {
    readonly node_id: string;
    readonly node_offset: Vector;
}

export interface ColorStop {
    readonly position: number;
    readonly color: Color;
}

export interface PaintOverride {
    readonly fills: Paint[];
    readonly inheritFillStyleId: string;
}

export interface TypeStyle {
    readonly fontFamily: string;
    readonly fontPostScriptName: string;
    readonly paragraphSpacing: number;
    readonly paragraphIndent: number;
    readonly listSpacing: number;
    readonly italic: boolean;
    readonly fontWeight: number;
    readonly fontSize: number;
    readonly textCase: 'UPPER' | 'LOWER' | 'TITLE' | 'SMALL_CAPS' | 'SMALL_CAPS_FORCED';
    readonly textDecoration: 'STRIKETHROUGH' | 'UNDERLINE';
    readonly textAutoResize: 'HEIGHT' | 'WIDTH_AND_HEIGHT' | '[DEPRECATED] TRUNCATE';
    readonly textTruncation: 'DISABLED' | 'ENDING';
    readonly maxLines: number;
    readonly textAlignHorizontal: 'LEFT' | 'RIGHT' | 'CENTER' | 'JUSTIFIED';
    readonly textAlignVertical: 'TOP' | 'CENTER' | 'BOTTOM';
    readonly letterSpacing: number;
    readonly fills: Paint[];
    readonly hyperlink: Hyperlink;
    readonly opentypeFlags: Map<string, number>;
    readonly lineHeightPx: number;
    readonly lineHeightPercent: number;
    readonly lineHeightPercentFontSize: number;
    readonly lineHeightUnit: 'PIXELS' | 'FONT_SIZE_%' | 'INTRINSIC_%';
}

export interface Component {
    readonly key: string;
    readonly name: string;
    readonly description: string;
    readonly componentSetId?: string;
    readonly documentationLinks: DocumentationLink[];
    readonly remote: boolean;
}

export interface ComponentSet {
    readonly key: string;
    readonly name: string;
    readonly description: string;
    readonly documentationLinks: DocumentationLink[];
    readonly remote: boolean;
}

export interface Style {
    readonly key: string;
    readonly name: string;
    readonly description: string;
    readonly remote: boolean;
    readonly styleType: StyleType;
}

export interface ShapeType {
    readonly SQUARE: string;
    readonly ELLIPSE: string;
    readonly ROUNDED_RECTANGLE: string;
    readonly DIAMOND: string;
    readonly TRIANGLE_DOWN: string;
    readonly PARALLELOGRAM_RIGHT: string;
    readonly PARALLELOGRAM_LEFT: string;
    readonly ENG_DATABASE: string;
    readonly ENG_QUEUE: string;
    readonly ENG_FILE: string;
    readonly ENG_FOLDER: string;
    readonly TRAPEZOID: string;
    readonly PREDEFINED_PROCESS: string;
    readonly SHIELD: string;
    readonly DOCUMENT_SINGLE: string;
    readonly DOCUMENT_MULTIPLE: string;
    readonly MANUAL_INPUT: string;
    readonly HEXAGON: string;
    readonly CHEVRON: string;
    readonly PENTAGON: string;
    readonly OCTAGON: string;
    readonly STAR: string;
    readonly PLUS: string;
    readonly ARROW_LEFT: string;
    readonly ARROW_RIGHT: string;
    readonly SUMMING_JUNCTION: string;
    readonly OR: string;
    readonly SPEECH_BUBBLE: string;
    readonly INTERNAL_STORAGE: string;
}

export interface ConnectorEndpoint {
    readonly endpointNodeId: string;
    readonly position: Vector;
    readonly endpointNodeId: string;
    readonly magnet: ConnectorMagnet;
}

export interface ConnectorLineType {
    readonly ELBOWED: string;
    readonly STRAIGHT: string;
}

export interface ConnectorTextBackground {
    readonly cornerRadius: CornerRadius;
    readonly fills: Paint[];
}

export interface ComponentPropertyDefinition {
    readonly type: ComponentPropertyType;
    readonly defaultValue: boolean | string;
    readonly variantOptions?: string[];
    readonly preferredValues?: InstanceSwapPreferredValue[];
}

export interface ComponentProperty {
    readonly type: ComponentPropertyType;
    readonly value: boolean | string;
    readonly preferredValues?: InstanceSwapPreferredValue[];
    readonly boundVariables: Map<string, VariableAlias | VariableAlias[]>;
}

export interface ComponentPropertyType {
    readonly BOOLEAN: string;
    readonly INSTANCE_SWAP: string;
    readonly TEXT: string;
    readonly VARIANT: string;
}

export interface InstanceSwapPreferredValue {
    readonly type: 'COMPONENT' | 'COMPONENT_SET';
    readonly key: string;
}

export interface PrototypeDevice {
    readonly type: 'NONE' | 'PRESET' | 'CUSTOM' | 'PRESENTATION';
    readonly size: Size;
    readonly presetIdentifier: string;
    readonly rotation: 'NONE' | 'CCW_90';
}

export interface StrokeWeights {
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly left: number;
}

export interface Overrides {
    readonly id: string;
    readonly overriddenFields: string[];
}

export interface VariableAlias {
    readonly type: string;
    readonly id: string;
}

interface GetFileResponse {
  name: string;
  role: string;
  lastModified: string;
  editorType: string;
  thumbnailUrl: string;
  version: string;
  document: DOCUMENT;
  components: Map<string, Component>;
  componentSets: Map<string, ComponentSet>;
  schemaVersion: 0;
  styles: Map<string, Style>;
  mainFileKey: string;
  branches: [
    {
      key: string;
      name: string;
      thumbnail_url: string;
      last_modified: string;
      link_access: string;
    }
  ];
}

interface GetFileNodesResponse {
  name: string;
  role: string;
  lastModified: string;
  editorType: string;
  thumbnailUrl: string;
  err: string;
  nodes: Record<
    string,
    {
      document: DOCUMENT;
      components: Map<string, Component>;
      schemaVersion: 0;
      styles: Map<string, Style>;
    }
  >;
}

interface GetImageResponse {
  err: string;
  images: Map<string, string>;
  status: number;
}

interface GetImageFillsResponse {
  images: Record<string, string>;
}
