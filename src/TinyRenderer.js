"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiny2DRenderer = void 0;
/**
 *
 *
 * @export
 * @class Tiny2DRenderer
 */
class Tiny2DRenderer {
    constructor(ctx) {
        this.ctx = ctx;
        this.layers = new Map();
        this.canvas = ctx.canvas;
    }
    /**
     *
     *
     * @return {*}  {string}
     * @memberof Tiny2DRenderer
     */
    toBase64() {
        return this.canvas.toDataURL("image/png", 1.0);
    }
    /**
     *
     *
     * @param {string} key
     * @memberof Tiny2DRenderer
     */
    deleteLayer(key) {
        this.layers.delete(key);
    }
    /**
     *
     *
     * @param {ILayer} layer
     * @memberof Tiny2DRenderer
     */
    addLayer(layer) {
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
    renderLayers(t, pre) {
        if (!pre) {
            this.layers.forEach((v) => {
                if (v.visible)
                    v.fn(t, this.canvas, this.ctx);
            });
        }
        else {
            let layer = this.layers.get(pre);
            if (layer.visible)
                layer.fn(t, this.canvas, this.ctx);
        }
        return this;
    }
}
exports.Tiny2DRenderer = Tiny2DRenderer;
