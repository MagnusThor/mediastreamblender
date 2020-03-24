"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MediaStreamRecorder {
    constructor(tracks) {
        this.tracks = tracks;
        this.mediaStream = new MediaStream(tracks);
        this.recorder = new MediaRecorder(this.mediaStream, {
            mimeType: 'video/webm;codecs=vp9'
        });
        this.recorder.ondataavailable = (e) => {
            if (e.data.size > 0)
                this.data.push(e.data);
        };
    }
    getBlobUrl() {
        let blob = new Blob(this.data, {
            type: 'video/webm'
        });
        return URL.createObjectURL(blob);
    }
    flush() {
        return new Promise((resolve, reject) => {
            resolve(this.getBlobUrl());
            this.data = new Array();
        });
    }
    stop() {
        this.recorder.stop();
    }
    start(n) {
        this.data = new Array();
        this.recorder.start(n);
    }
}
exports.MediaStreamRecorder = MediaStreamRecorder;
