import { ILayer } from "./interfaces/ILayer";

/**
 *
 *
 * @export
 * @class Tiny2DRenderer
 */
export class Tiny2DRenderer {
    canvas: HTMLCanvasElement;
    layers: Map<string, ILayer>;
    constructor(public ctx:CanvasRenderingContext2D) {
        this.layers = new Map<string, ILayer>();
        this.canvas = ctx.canvas;
    }
    /**
     *
     *
     * @return {*}  {string}
     * @memberof Tiny2DRenderer
     */
    toBase64(): string {
        return this.canvas.toDataURL("image/png", 1.0);
    }
    /**
     *
     *
     * @param {string} key
     * @memberof Tiny2DRenderer
     */
    deleteLayer(key: string): void {
        this.layers.delete(key);
    }
    /**
     *
     *
     * @param {ILayer} layer
     * @memberof Tiny2DRenderer
     */
    addLayer(layer:ILayer): void {
       this.layers.set(layer.id, layer);
    }
    /**
     *
     *
     * @param {number} t
     * @param {string} [pre]
     * @return {*}  {Tiny2DRenderer}
     * @memberof Tiny2DRenderer
     */
    renderLayers(t: number, pre?: string): Tiny2DRenderer {
        if (!pre) {
            this.layers.forEach((v:ILayer) => {
                if(v.visible)
                    v.fn(t, this.canvas, this.ctx);
            });
        } else {
            let layer = this.layers.get(pre);
            if(layer.visible)
                layer.fn(t, this.canvas, this.ctx);
        }
        return this;
    }
}
