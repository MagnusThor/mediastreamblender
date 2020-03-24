export class StreamSource {
    /**
     *Creates an instance of StreamSource.
     * @param {MediaStream} stream
     * @param {*} source
     * @param {boolean} isLocal
     * @memberof StreamSource
     */
    constructor(public stream: MediaStream, public source: any, public isLocal: boolean) {
    }
}
