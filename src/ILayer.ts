
export interface ILayer {
    id: string;
    fn(time: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void;
    visible: boolean
}
