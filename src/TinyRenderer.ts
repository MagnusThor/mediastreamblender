import { I2D } from "./I2D";



export class TR {
    canvas: HTMLCanvasElement;
 //   ctx: CanvasRenderingContext2D;
    layers: Map<string, I2D>;
    time: number;
    properties: Array<number>;
    constructor(public ctx:CanvasRenderingContext2D,w: number, h: number) {
        this.layers = new Map<string, I2D>();
      //  const canvas = document.createElement("canvas");
      //  canvas.width = w; canvas.height = h;
        this.properties = [w, h, w / 2, h / 2];
     //   this.ctx = canvas.getContext("2d");
    //    this.canvas = canvas;
    }
    data(): any {
        return this.canvas.toDataURL("image/png", 1.0);
    }
    D(key: string): void {
        this.layers.delete(key);
    }
    A(key: string, fn: (timeStamp: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void): void {
        const layer: I2D = { key: key, ctx: this.ctx, fn: fn };
        this.layers.set(key, layer);
    }
    R(t: number, pre?: string): TR {
     //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (!pre) {
            this.layers.forEach((v) => {
                v.fn(t, this.canvas, this.ctx);
            });
        } else {
            this.layers.get(pre).fn(t, this.canvas, this.ctx);
        }
        return this;
    }
}
