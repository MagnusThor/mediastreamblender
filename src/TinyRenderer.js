"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TR = void 0;
class TR {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.layers = new Map();
        //  const canvas = document.createElement("canvas");
        //  canvas.width = w; canvas.height = h;
        this.properties = [w, h, w / 2, h / 2];
        //   this.ctx = canvas.getContext("2d");
        //    this.canvas = canvas;
    }
    data() {
        return this.canvas.toDataURL("image/png", 1.0);
    }
    D(key) {
        this.layers.delete(key);
    }
    A(key, fn) {
        const layer = { key: key, ctx: this.ctx, fn: fn };
        this.layers.set(key, layer);
    }
    R(t, pre) {
        //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
exports.TR = TR;
