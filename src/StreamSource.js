"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StreamSource {
    /**
     *Creates an instance of StreamSource.
     * @param {MediaStream} stream
     * @param {*} source
     * @param {boolean} isLocal
     * @memberof StreamSource
     */
    constructor(stream, source, isLocal) {
        this.stream = stream;
        this.source = source;
        this.isLocal = isLocal;
    }
}
exports.StreamSource = StreamSource;
