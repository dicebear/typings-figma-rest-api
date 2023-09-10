export interface Global {
    id: string;
    name: string;
    visible: boolean;
    type: string;
    rotation: number;
    pluginData: unknown;
    sharedPluginData: unknown;
    componentPropertyReferences: Record<string, String>;
    boundVariables: Record<string, VariableAlias | VariableAlias[]>;
}

export interface DOCUMENT extends Global {
    type: 'DOCUMENT';
    children: Node[];
}

export interface CANVAS extends Global {
    type: 'CANVAS';
    children: Node[];
    backgroundColor: Color;
    prototypeStartNodeID: string;
    flowStartingPoints: FlowStartingPoint[];
    prototypeDevice: PrototypeDevice;
    exportSettings: ExportSetting[];
}

export interface FRAME extends Global {
    type: 'FRAME';
    children: Node[];
    locked: boolean;
    background: Paint[];
    backgroundColor: Color;
    fills: Paint[];
    strokes: Paint[];
    strokeWeight: number;
    strokeAlign: 'INSIDE' | 'OUTSIDE' | 'CENTER';
    strokeDashes: number[];
    cornerRadius: number;
    rectangleCornerRadii: number[];
    cornerSmoothing: number;
    exportSettings: ExportSetting[];
    blendMode: BlendMode;
    preserveRatio: boolean;
    constraints: LayoutConstraint;
    layoutAlign: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | 'STRETCH';
    transitionNodeID: string;
    transitionDuration: number;
    transitionEasing: EasingType;
    opacity: number;
    absoluteBoundingBox: Rectangle;
    absoluteRenderBounds: Rectangle;
    size: Vector;
    minWidth: number | null;
    maxWidth: number | null;
    minHeight: number | null;
    maxHeight: number | null;
    relativeTransform: Transform;
    clipsContent: boolean;
    layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL';
    layoutSizingHorizontal: 'FIXED' | 'HUG' | 'FILL';
    layoutSizingVertical: 'FIXED' | 'HUG' | 'FILL';
    layoutWrap: 'NO_WRAP' | 'WRAP';
    primaryAxisSizingMode: 'FIXED' | 'AUTO';
    counterAxisSizingMode: 'FIXED' | 'AUTO';
    primaryAxisAlignItems: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN';
    counterAxisAlignItems: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE';
    counterAxisAlignContent: 'AUTO' | 'SPACE_BETWEEN';
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    horizontalPadding: number;
    verticalPadding: number;
    itemSpacing: number;
    counterAxisSpacing: number;
    layoutPositioning: 'ABSOLUTE';
    itemReverseZIndex: boolean;
    strokesIncludedInLayout: boolean;
    layoutGrids: LayoutGrid[];
    overflowDirection: 'HORIZONTAL_SCROLLING' | 'VERTICAL_SCROLLING' | 'HORIZONTAL_AND_VERTICAL_SCROLLING';
    effects: Effect[];
    isMask: boolean;
    isMaskOutline: boolean;
    styles: Record<StyleType, string>;
}

export interface GROUP extends FRAME {
    type: 'GROUP';
}

export interface SECTION extends Global {
    type: 'SECTION';
    sectionContentsHidden: boolean;
    devStatus: Object;
    fills: Paint[];
    strokes: Paint[];
    strokeWeight: number;
    strokeAlign: 'INSIDE' | 'OUTSIDE' | 'CENTER';
    children: Node[];
    absoluteBoundingBox: Rectangle;
    absoluteRenderBounds: Rectangle;
}

export interface VECTOR extends Global {
    type: 'VECTOR';
    locked: boolean;
    exportSettings: ExportSetting[];
    blendMode: BlendMode;
    preserveRatio: boolean;
    layoutAlign: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | 'STRETCH';
    layoutGrow: number;
    constraints: LayoutConstraint;
    transitionNodeID: string;
    transitionDuration: number;
    transitionEasing: EasingType;
    opacity: number;
    absoluteBoundingBox: Rectangle;
    absoluteRenderBounds: Rectangle;
    effects: Effect[];
    size: Vector;
    relativeTransform: Transform;
    isMask: boolean;
    fills: Paint[];
    fillGeometry: Path[];
    fillOverrideTable: Record<number,PaintOverride>;
    strokes: Paint[];
    strokeWeight: number;
    individualStrokeWeights: StrokeWeights;
    strokeCap: string;
    strokeJoin: string;
    strokeDashes: number[];
    strokeMiterAngle: number;
    strokeGeometry: Path[];
    strokeAlign: 'INSIDE' | 'OUTSIDE' | 'CENTER';
    styles: Record<StyleType, string>;
}

export interface BOOLEAN_OPERATION extends VECTOR {
    type: 'BOOLEAN_OPERATION';
    children: Node[];
    booleanOperation: string;
}

export interface STAR extends VECTOR {
    type: 'STAR';
}

export interface LINE extends VECTOR {
    type: 'LINE';
}

export interface ELLIPSE extends VECTOR {
    type: 'ELLIPSE';
    arcData: ArcData;
}

export interface REGULAR_POLYGON extends VECTOR {
    type: 'REGULAR_POLYGON';
}

export interface RECTANGLE extends VECTOR {
    type: 'RECTANGLE';
    cornerRadius: number;
    rectangleCornerRadii: number[];
    cornerSmoothing: number;
}

export interface TABLE extends Global {
    type: 'TABLE';
    absoluteBoundingBox: Rectangle;
    absoluteRenderBounds: Rectangle;
    blendMode: BlendMode;
    children: Node[];
    constraints: LayoutConstraint;
    effects: Effect[];
    exportSettings: ExportSetting[];
    relativeTransform: Transform;
    size: Vector;
    strokes: Paint[];
    strokeAlign: 'INSIDE' | 'OUTSIDE' | 'CENTER';
    strokeWeight: number;
}

export interface TABLE_CELL extends Global {
    type: 'TABLE_CELL';
    absoluteBoundingBox: Rectangle;
    absoluteRenderBounds: Rectangle;
    characters: string;
    fills: Paint[];
    relativeTransform: Transform;
    size: Vector;
}

export interface TEXT extends VECTOR {
    fillOverrideTable: never;
    type: 'TEXT';
    characters: string;
    style: TypeStyle;
    characterStyleOverrides: number[];
    styleOverrideTable: Record<number,TypeStyle>;
    lineTypes: string[];
    lineIndentations: number[];
}

export interface SLICE extends Global {
    type: 'SLICE';
    exportSettings: ExportSetting[];
    absoluteBoundingBox: Rectangle;
    absoluteRenderBounds: Rectangle;
    size: Vector;
    relativeTransform: Transform;
}

export interface COMPONENT extends FRAME {
    type: 'COMPONENT';
    componentPropertyDefinitions: Record<string, ComponentPropertyDefinition>;
}

export interface COMPONENT_SET extends FRAME {
    type: 'COMPONENT_SET';
    componentPropertyDefinitions: Record<string, ComponentPropertyDefinition>;
}

export interface INSTANCE extends FRAME {
    type: 'INSTANCE';
    componentId: string;
    isExposedInstance: boolean;
    exposedInstances: string[];
    componentProperties: Record<string, ComponentProperty>;
    overrides: Overrides[];
}

export interface STICKY extends Global {
    type: 'STICKY';
    absoluteBoundingBox: Rectangle;
    absoluteRenderBounds: Rectangle;
    authorVisible: boolean;
    backgroundColor: Color;
    blendMode: BlendMode;
    characters: string;
    effects: Effect[];
    exportSettings: ExportSetting[];
    fills: Paint[];
    locked: boolean;
    opacity: number;
    relativeTransform: Transform;
}

export interface SHAPE_WITH_TEXT extends Global {
    type: 'SHAPE_WITH_TEXT';
    absoluteBoundingBox: Rectangle;
    absoluteRenderBounds: Rectangle;
    backgroundColor: Color;
    blendMode: BlendMode;
    characters: string;
    cornerRadius: number;
    rectangleCornerRadii: number[];
    cornerSmoothing: number;
    effects: Effect[];
    exportSettings: ExportSetting[];
    fills: Paint[];
    isMask: boolean;
    locked: boolean;
    opacity: number;
    shapeType: ShapeType;
    strokes: Paint[];
    strokeWeight: number;
    strokeCap: string;
    strokeJoin: string;
    strokeDashes: number[];
    strokeAlign: 'INSIDE' | 'OUTSIDE' | 'CENTER';
    relativeTransform: Transform;
    styles: Record<StyleType, string>;
}

export interface CONNECTOR extends Global {
    type: 'CONNECTOR';
    absoluteBoundingBox: Rectangle;
    absoluteRenderBounds: Rectangle;
    backgroundColor: Color;
    blendMode: BlendMode;
    characters: string;
    connectorStart: ConnectorEndpoint;
    connectorEnd: ConnectorEndpoint;
    connectorStartStrokeCap: string;
    connectorEndStrokeCap: string;
    connectorLineType: ConnectorLineType;
    cornerRadius: number;
    rectangleCornerRadii: number[];
    cornerSmoothing: number;
    effects: Effect[];
    exportSettings: ExportSetting[];
    fills: Paint[];
    isMask: boolean;
    locked: boolean;
    opacity: number;
    strokes: Paint[];
    strokeWeight: number;
    strokeCap: string;
    strokeJoin: string;
    strokeDashes: number[];
    strokeAlign: 'INSIDE' | 'OUTSIDE' | 'CENTER';
    textBackground: ConnectorTextBackground;
    relativeTransform: Transform;
    styles: Record<StyleType, string>;
}

export interface WASHI_TAPE extends VECTOR {
    type: 'WASHI_TAPE';
}

export type Node = DOCUMENT | CANVAS | FRAME | GROUP | SECTION | VECTOR | BOOLEAN_OPERATION | STAR | LINE | ELLIPSE | REGULAR_POLYGON | RECTANGLE | TABLE | TABLE_CELL | TEXT | SLICE | COMPONENT | COMPONENT_SET | INSTANCE | STICKY | SHAPE_WITH_TEXT | CONNECTOR | WASHI_TAPE;

export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

export interface ExportSetting {
    suffix: string;
    format: 'JPG' | 'PNG' | 'SVG';
    constraint: Constraint;
}

export interface Constraint {
    type: 'SCALE' | 'WIDTH' | 'HEIGHT';
    value: number;
}

export interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface ArcData {
    startingAngle: number;
    endingAngle: number;
    innerRadius: number;
}

type BlendMode = 'PASS_THROUGH' | 'NORMAL' | 'DARKEN' | 'MULTIPLY' | 'LINEAR_BURN' | 'COLOR_BURN' | 'LIGHTEN' | 'SCREEN' | 'LINEAR_DODGE' | 'COLOR_DODGE' | 'OVERLAY' | 'SOFT_LIGHT' | 'HARD_LIGHT' | 'DIFFERENCE' | 'EXCLUSION' | 'HUE' | 'SATURATION' | 'COLOR' | 'LUMINOSITY';

type EasingType = 'EASE_IN' | 'EASE_OUT' | 'EASE_IN_AND_OUT' | 'LINEAR' | 'GENTLE_SPRING';

export interface FlowStartingPoint {
    nodeId: string;
    name: string;
}

export interface LayoutConstraint {
    vertical: 'TOP' | 'BOTTOM' | 'CENTER' | 'TOP_BOTTOM' | 'SCALE';
    horizontal: 'LEFT' | 'RIGHT' | 'CENTER' | 'LEFT_RIGHT' | 'SCALE';
}

export interface LayoutGrid {
    pattern: 'COLUMNS' | 'ROWS' | 'GRID';
    sectionSize: number;
    visible: boolean;
    color: Color;
    alignment: 'MIN' | 'STRETCH' | 'CENTER';
    gutterSize: number;
    offset: number;
    count: number;
}

export interface Effect {
    type: 'INNER_SHADOW' | 'DROP_SHADOW' | 'LAYER_BLUR' | 'BACKGROUND_BLUR';
    visible: boolean;
    radius: number;
    color: Color;
    blendMode: BlendMode;
    offset: Vector;
    spread: number;
    showShadowBehindNode: boolean;
}

export interface Hyperlink {
    type: 'URL' | 'NODE';
    url: string;
    nodeID: string;
}

export interface DocumentationLink {
    uri: string;
}

export interface Paint {
    type: 'SOLID' | 'GRADIENT_LINEAR' | 'GRADIENT_RADIAL' | 'GRADIENT_ANGULAR' | 'GRADIENT_DIAMOND' | 'IMAGE' | 'EMOJI' | 'VIDEO';
    visible: boolean;
    opacity: number;
    color: Color;
    blendMode: BlendMode;
    gradientHandlePositions: Vector[];
    gradientStops: ColorStop[];
    scaleMode: 'FILL' | 'FIT' | 'TILE' | 'STRETCH';
    imageTransform: Transform;
    scalingFactor: number;
    rotation: number;
    imageRef: string;
    filters: ImageFilters;
    gifRef: string;
    boundVariables: Record<string, VariableAlias | VariableAlias[]>;
}

export interface Vector {
    x: number;
    y: number;
}

export interface Size {
    width: number;
    height: number;
}

type Transform = [[number, number, number], [number, number, number]];

export interface ImageFilters {
    exposure: number;
    contrast: number;
    saturation: number;
    temperature: number;
    tint: number;
    highlights: number;
    shadows: number;
}

export interface FrameOffset {
    node_id: string;
    node_offset: Vector;
}

export interface ColorStop {
    position: number;
    color: Color;
}

export interface PaintOverride {
    fills: Paint[];
    inheritFillStyleId: string;
}

export interface TypeStyle {
    fontFamily: string;
    fontPostScriptName: string;
    paragraphSpacing: number;
    paragraphIndent: number;
    listSpacing: number;
    italic: boolean;
    fontWeight: number;
    fontSize: number;
    textCase: 'UPPER' | 'LOWER' | 'TITLE' | 'SMALL_CAPS' | 'SMALL_CAPS_FORCED';
    textDecoration: 'STRIKETHROUGH' | 'UNDERLINE';
    textAutoResize: 'HEIGHT' | 'WIDTH_AND_HEIGHT' | '[DEPRECATED] TRUNCATE';
    textTruncation: 'DISABLED' | 'ENDING';
    maxLines: number;
    textAlignHorizontal: 'LEFT' | 'RIGHT' | 'CENTER' | 'JUSTIFIED';
    textAlignVertical: 'TOP' | 'CENTER' | 'BOTTOM';
    letterSpacing: number;
    fills: Paint[];
    hyperlink: Hyperlink;
    opentypeFlags: Record<string, number>;
    lineHeightPx: number;
    lineHeightPercent: number;
    lineHeightPercentFontSize: number;
    lineHeightUnit: 'PIXELS' | 'FONT_SIZE_%' | 'INTRINSIC_%';
}

export interface Component {
    key: string;
    name: string;
    description: string;
    componentSetId?: string;
    documentationLinks: DocumentationLink[];
    remote: boolean;
}

export interface ComponentSet {
    key: string;
    name: string;
    description: string;
    documentationLinks: DocumentationLink[];
    remote: boolean;
}

export interface Style {
    key: string;
    name: string;
    description: string;
    remote: boolean;
    styleType: StyleType;
}

export interface ShapeType {
    SQUARE: string;
    ELLIPSE: string;
    ROUNDED_RECTANGLE: string;
    DIAMOND: string;
    TRIANGLE_DOWN: string;
    PARALLELOGRAM_RIGHT: string;
    PARALLELOGRAM_LEFT: string;
    ENG_DATABASE: string;
    ENG_QUEUE: string;
    ENG_FILE: string;
    ENG_FOLDER: string;
    TRAPEZOID: string;
    PREDEFINED_PROCESS: string;
    SHIELD: string;
    DOCUMENT_SINGLE: string;
    DOCUMENT_MULTIPLE: string;
    MANUAL_INPUT: string;
    HEXAGON: string;
    CHEVRON: string;
    PENTAGON: string;
    OCTAGON: string;
    STAR: string;
    PLUS: string;
    ARROW_LEFT: string;
    ARROW_RIGHT: string;
    SUMMING_JUNCTION: string;
    OR: string;
    SPEECH_BUBBLE: string;
    INTERNAL_STORAGE: string;
}

export interface ConnectorEndpoint {
    endpointNodeId: string;
    position: Vector;
    endpointNodeId: string;
    magnet: ConnectorMagnet;
}

export interface ConnectorLineType {
    ELBOWED: string;
    STRAIGHT: string;
}

export interface ConnectorTextBackground {
    cornerRadius: CornerRadius;
    fills: Paint[];
}

export interface ComponentPropertyDefinition {
    type: ComponentPropertyType;
    defaultValue: boolean | string;
    variantOptions?: string[];
    preferredValues?: InstanceSwapPreferredValue[];
}

export interface ComponentProperty {
    type: ComponentPropertyType;
    value: boolean | string;
    preferredValues?: InstanceSwapPreferredValue[];
    boundVariables: Record<string, VariableAlias | VariableAlias[]>;
}

export interface ComponentPropertyType {
    BOOLEAN: string;
    INSTANCE_SWAP: string;
    TEXT: string;
    VARIANT: string;
}

export interface InstanceSwapPreferredValue {
    type: 'COMPONENT' | 'COMPONENT_SET';
    key: string;
}

export interface PrototypeDevice {
    type: 'NONE' | 'PRESET' | 'CUSTOM' | 'PRESENTATION';
    size: Size;
    presetIdentifier: string;
    rotation: 'NONE' | 'CCW_90';
}

export interface StrokeWeights {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

export interface Overrides {
    id: string;
    overriddenFields: string[];
}

export interface VariableAlias {
    type: string;
    id: string;
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
