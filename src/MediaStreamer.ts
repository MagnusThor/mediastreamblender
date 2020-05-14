export class MediaSourceStreamer {

    mediaSource: MediaSource;
    sourceBuffer: SourceBuffer;
    sourceBuffers: Array<BufferSource>;
    numOfBuffersAdded: number = 0;
    addChunk(chunk: BufferSource, ts: any) {
        if (!this.sourceBuffer) return;
        this.sourceBuffers.push(chunk);

        if (!this.sourceBuffer.updating) this.getNextBuffer();

        if (this.sourceBuffers.length === 0) this.startPlayback()
    }
    startPlayback() {
        //    this.el.play();
    }
    getNextBuffer() {
        if (this.sourceBuffers.length && !this.sourceBuffer.updating) {
            let bs = this.sourceBuffers.shift();
            if (bs)
            this.sourceBuffer.appendBuffer(bs);
        }
        this.numOfBuffersAdded++;
    }

    private onSourceOpen(ev: Event) {
        this.sourceBuffer = this.mediaSource.addSourceBuffer('video/webm; codecs="opus,vp8"');
        this.sourceBuffer.onerror = (err) => {
        };
        this.sourceBuffer.onupdateend = (ev) => {
            this.getNextBuffer();
            if (this.logger) {
                let sb = this.sourceBuffer;
                let video = this.el as HTMLVideoElement
                this.logger.log("timestampOffset", sb.timestampOffset);
                this.logger.log("appendWindowStart", sb.appendWindowStart);
                this.logger.log("appendWindowEnd", sb.appendWindowEnd);
                for (let i = 0; i < sb.buffered.length; i++) {
                    this.logger.log("buffered", i, sb.buffered.start(i), sb.buffered.end(i));
                }
                for (let i = 0; i < video.seekable.length; i++) {
                    this.logger.log("seekable", i, video.seekable.start(i), video.seekable.end(i));
                }
                this.logger.log("webkitAudioDecodedByteCount", video["webkitAudioDecodedByteCount"]);
                this.logger.log("webkitVideoDecodedByteCount", video["webkitVideoDecodedByteCount"]);
                this.logger.log("webkitDecodedFrameCount", video["webkitDecodedFrameCount"]);
                this.logger.log("webkitDroppedFrameCount", video["webkitDroppedFrameCount"]);
            }
        };
    }
    private onSourceClose(ev: Event) {
        this.mediaSource.removeSourceBuffer(this.sourceBuffer);
    }
    private onSourceEnded(ev: Event) {
    }
    constructor(public el: HTMLAudioElement | HTMLVideoElement, public logger?: any, pre?: ArrayBuffer) {
        this.sourceBuffers = new Array<BufferSource>();
        this.mediaSource = new MediaSource();
        this.mediaSource.onsourceopen = (ev) => {
            this.onSourceOpen(ev);
            if (pre) this.sourceBuffer.appendBuffer(pre);
        };
        this.mediaSource.onsourceclose = (ev) => {
            this.onSourceClose(ev);
        };
        this.mediaSource.onsourceended = (ev) => {
            this.onSourceEnded(ev);
        };
        this.el.src = URL.createObjectURL(this.mediaSource);
    }
}