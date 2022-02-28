"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiny2DRenderer = void 0;
class Tiny2DRenderer {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.layers = new Map();
    }
    toBase64() {
        return this.canvas.toDataURL("image/png", 1.0);
    }
    draw(key) {
        this.layers.delete(key);
    }
    addLayer(layer) {
        this.layers.set(layer.id, layer);
    }
    renderLayers(t, pre) {
        if (!pre) {
            this.layers.forEach((v) => {
                v.fn(t, this.canvas, this.ctx);
            });
        }
        else {
            this.layers.get(pre).fn(t, this.canvas, this.ctx);
        }
        return this;
    }
}
exports.Tiny2DRenderer = Tiny2DRenderer;
