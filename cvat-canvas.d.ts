declare class CanvasImpl implements Canvas {
	private model;
	private controller;
	private view;
	constructor();
	html(): HTMLDivElement;
	setup(frameData: any, objectStates: any[], zLayer?: number): void;
	setupIssueRegions(issueRegions: Record<number, {
		hidden: boolean;
		points: number[];
	}>): void;
	setupConflictsRegions(clientID: number): number[];
	fitCanvas(): void;
	bitmap(enable: boolean): void;
	selectRegion(enable: boolean): void;
	dragCanvas(enable: boolean): void;
	zoomCanvas(enable: boolean): void;
	activate(clientID: number | null, attributeID?: number | null): void;
	highlight(clientIDs: number[] | null, severity?: HighlightSeverity | null): void;
	rotate(rotationAngle: number): void;
	focus(clientID: number, padding?: number): void;
	fit(): void;
	grid(stepX: number, stepY: number): void;
	interact(interactionData: InteractionData): void;
	draw(drawData: DrawData): void;
	edit(editData: MasksEditData): void;
	split(splitData: SplitData): void;
	group(groupData: GroupData): void;
	merge(mergeData: MergeData): void;
	select(objectState: any): void;
	mode(): Mode;
	cancel(): void;
	configure(configuration: Configuration): void;
	isAbleToChangeFrame(): boolean;
	get geometry(): Geometry;
	destroy(): void;
}
declare enum ColorBy {
	INSTANCE = "Instance",
	GROUP = "Group",
	LABEL = "Label"
}
declare enum HighlightSeverity {
	ERROR = "error",
	WARNING = "warning"
}
declare enum Mode {
	IDLE = "idle",
	DRAG = "drag",
	RESIZE = "resize",
	DRAW = "draw",
	EDIT = "edit",
	MERGE = "merge",
	SPLIT = "split",
	GROUP = "group",
	INTERACT = "interact",
	SELECT_REGION = "select_region",
	DRAG_CANVAS = "drag_canvas",
	ZOOM_CANVAS = "zoom_canvas"
}
export declare const CanvasVersion: string;
export declare enum CuboidDrawingMethod {
	CLASSIC = "From rectangle",
	CORNER_POINTS = "By 4 points"
}
export declare enum RectDrawingMethod {
	CLASSIC = "By 2 points",
	EXTREME_POINTS = "By 4 points"
}
export interface BrushTool {
	type: "brush" | "eraser" | "polygon-plus" | "polygon-minus";
	color: string;
	form: "circle" | "square";
	size: number;
}
export interface Canvas {
	html(): HTMLDivElement;
	setup(frameData: any, objectStates: any[], zLayer?: number): void;
	setupIssueRegions(issueRegions: Record<number, {
		hidden: boolean;
		points: number[];
	}>): void;
	setupConflictRegions(clientID: number): number[];
	activate(clientID: number | null, attributeID?: number): number[];
	highlight(clientIDs: number[] | null, severity: HighlightSeverity | null): void;
	rotate(rotationAngle: number): void;
	focus(clientID: number, padding?: number): void;
	fit(): void;
	grid(stepX: number, stepY: number): void;
	interact(interactionData: InteractionData): void;
	draw(drawData: DrawData): void;
	edit(editData: MasksEditData): void;
	group(groupData: GroupData): void;
	split(splitData: SplitData): void;
	merge(mergeData: MergeData): void;
	select(objectState: any): void;
	fitCanvas(): void;
	bitmap(enable: boolean): void;
	selectRegion(enable: boolean): void;
	dragCanvas(enable: boolean): void;
	zoomCanvas(enable: boolean): void;
	mode(): Mode;
	cancel(): void;
	configure(configuration: Configuration): void;
	isAbleToChangeFrame(): boolean;
	destroy(): void;
	readonly geometry: Geometry;
}
export interface Configuration {
	smoothImage?: boolean;
	autoborders?: boolean;
	displayAllText?: boolean;
	textFontSize?: number;
	textPosition?: "auto" | "center";
	textContent?: string;
	undefinedAttrValue?: string;
	showProjections?: boolean;
	showConflicts?: boolean;
	forceDisableEditing?: boolean;
	intelligentPolygonCrop?: boolean;
	forceFrameUpdate?: boolean;
	CSSImageFilter?: string;
	colorBy?: ColorBy;
	selectedShapeOpacity?: number;
	shapeOpacity?: number;
	controlPointsSize?: number;
	outlinedBorders?: string | false;
	resetZoom?: boolean;
}
export interface DrawData {
	enabled: boolean;
	continue?: boolean;
	shapeType?: string;
	rectDrawingMethod?: RectDrawingMethod;
	cuboidDrawingMethod?: CuboidDrawingMethod;
	skeletonSVG?: string;
	numberOfPoints?: number;
	initialState?: any;
	crosshair?: boolean;
	brushTool?: BrushTool;
	redraw?: number;
	onDrawDone?: (data: object) => void;
	onUpdateConfiguration?: (configuration: {
		brushTool?: Pick<BrushTool, "size">;
	}) => void;
}
export interface Geometry {
	image: Size;
	canvas: Size;
	grid: Size;
	top: number;
	left: number;
	scale: number;
	offset: number;
	angle: number;
}
export interface GroupData {
	enabled: boolean;
}
export interface InteractionData {
	enabled: boolean;
	shapeType?: string;
	crosshair?: boolean;
	minPosVertices?: number;
	minNegVertices?: number;
	startWithBox?: boolean;
	enableThreshold?: boolean;
	enableSliding?: boolean;
	allowRemoveOnlyLast?: boolean;
	intermediateShape?: {
		shapeType: string;
		points: number[];
	};
	onChangeToolsBlockerState?: (event: string) => void;
}
export interface InteractionResult {
	points: number[];
	shapeType: string;
	button: number;
}
export interface MasksEditData {
	enabled: boolean;
	state?: any;
	brushTool?: BrushTool;
	onUpdateConfiguration?: (configuration: {
		brushTool?: Pick<BrushTool, "size">;
	}) => void;
}
export interface MergeData {
	enabled: boolean;
}
export interface Size {
	width: number;
	height: number;
}
export interface SplitData {
	enabled: boolean;
}
export type HighlightSeverity = _HighlightSeverity;
export type InteractionData = _InteractionData;
export type InteractionResult = _InteractionResult;
export {
	CanvasImpl as Canvas,
	Mode as CanvasMode,
};