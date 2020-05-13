export class MediaSourceStreamer {

    mediaSource: MediaSource;
    sourceBuffer: SourceBuffer;
    sourceBuffers: Array<BufferSource>;
    numOfBuffersAdded: number = 0;
    addChunk(chunk: BufferSource) {
        if (!this.sourceBuffer) return;
        this.sourceBuffers.push(chunk);
        if (!this.sourceBuffer.updating) this.getNextBuffer();
        if (this.sourceBuffers.length === 0) this.startPlayback()
    }
    startPlayback() {
        this.el.play();
    }
    getNextBuffer() {       
        if (this.sourceBuffers.length  && !this.sourceBuffer.updating ){
            let bs = this.sourceBuffers.shift();
            if(bs)
            this.sourceBuffer.appendBuffer(bs);
        }
        this.numOfBuffersAdded++;
    }

    private onSourceOpen(ev: Event) {
        this.sourceBuffer = this.mediaSource.addSourceBuffer('video/webm; codecs="opus,vp8"');
        this.sourceBuffer.onerror = (err) => {
            console.error("source buffer error",err);
        };   
        this.sourceBuffer.onupdateend = (ev) => {
            this.getNextBuffer();
            let sb = this.sourceBuffer;
            let video = this.el as HTMLVideoElement
            console.log("timestampOffset", sb.timestampOffset);
            console.log("appendWindowStart", sb.appendWindowStart);
            console.log("appendWindowEnd", sb.appendWindowEnd);
            for(let i=0; i<sb.buffered.length; i++){
              console.log("buffered", i, sb.buffered.start(i), sb.buffered.end(i));
            }
            for(let i=0; i<video.seekable.length; i++){
              console.log("seekable", i, video.seekable.start(i), video.seekable.end(i));
            }
            console.log("webkitAudioDecodedByteCount", video["webkitAudioDecodedByteCount"]);
            console.log("webkitVideoDecodedByteCount", video["webkitVideoDecodedByteCount"]);
            console.log("webkitDecodedFrameCount", video["webkitDecodedFrameCount"]);
            console.log("webkitDroppedFrameCount", video["webkitDroppedFrameCount"]);
        };
    }
    private onSourceClose(ev: Event) {
    
        this.mediaSource.removeSourceBuffer(this.sourceBuffer);
    }
    private onSourceEnded(ev: Event) {
    };

    constructor(public el: HTMLAudioElement | HTMLVideoElement) {
        this.sourceBuffers = new Array<BufferSource>();
        this.mediaSource = new MediaSource();
        this.mediaSource.onsourceopen = (ev) => {
            this.onSourceOpen(ev);
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