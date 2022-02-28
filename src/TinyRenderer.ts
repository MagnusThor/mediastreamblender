import { ILayer } from "./ILayer";
export class Tiny2DRenderer {
    canvas: HTMLCanvasElement;
    layers: Map<string, ILayer>;
    constructor(public ctx:CanvasRenderingContext2D,w: number, h: number) {
        this.layers = new Map<string, ILayer>();
    }
    toBase64(): string {
        return this.canvas.toDataURL("image/png", 1.0);
    }
    draw(key: string): void {
        this.layers.delete(key);
    }
    addLayer(layer:ILayer): void {
       this.layers.set(layer.id, layer);
    }
    renderLayers(t: number, pre?: string): Tiny2DRenderer {
        if (!pre) {
            this.layers.forEach((v:ILayer) => {
                v.fn(t, this.canvas, this.ctx);
            });
        } else {
            this.layers.get(pre).fn(t, this.canvas, this.ctx);
        }
        return this;
    }
}
