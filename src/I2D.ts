export interface I2D {
    key: string;
    ctx: CanvasRenderingContext2D;
    fn: (timeStamp: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void;
}
