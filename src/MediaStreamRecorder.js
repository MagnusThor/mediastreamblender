"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MediaStreamRecorder {
    /**
     *Creates an instance of MediaStreamRecorder.
     * @param {Array<MediaStreamTrack>} tracks
     * @memberof MediaStreamRecorder
     */
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
    /**
     * Get a BlobURL from data
     *
     * @returns {string}
     * @memberof MediaStreamRecorder
     */
    getBlobUrl() {
        let blob = new Blob(this.data, {
            type: 'video/webm'
        });
        return URL.createObjectURL(blob);
    }
    /**
     * Get recorded data as Blob
     *
     * @returns {Blob}
     * @memberof MediaStreamRecorder
     */
    getBlob() {
        let blob = new Blob(this.data, {
            type: 'video/webm'
        });
        return blob;
    }
    /**
     * Flush data buffer and get recorded data (blob)
     *
     * @returns {Promise<string>}
     * @memberof MediaStreamRecorder
     */
    flush() {
        return new Promise((resolve, reject) => {
            resolve(this.getBlobUrl());
            this.data = new Array();
        });
    }
    /**
     * Stop recording
     *
     * @memberof MediaStreamRecorder
     */
    stop() {
        this.recorder.stop();
    }
    /**
     * Start recording
     *
     * @param {number} n
     * @memberof MediaStreamRecorder
     */
    start(n) {
        this.data = new Array();
        this.recorder.start(n);
    }
}
exports.MediaStreamRecorder = MediaStreamRecorder;
