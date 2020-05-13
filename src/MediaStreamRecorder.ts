declare var MediaRecorder: any;
export class MediaStreamRecorder {
    data: Array<Blob>;
    recorder: any;
    mediaStream: MediaStream;
    /**
     * Get a BlobURL from data
     *
     * @returns {string}
     * @memberof MediaStreamRecorder
     */
    getBlobUrl(): string {
        let blob = new Blob(this.data, {
            type: 'video/webm; codecs="vp8"'
        });
        return URL.createObjectURL(blob);
    }
    /**
     * Get recorded data as Blob
     *
     * @returns {Blob}
     * @memberof MediaStreamRecorder
     */
    getBlob(): Blob {
        let blob = new Blob(this.data, {
            type: 'video/webm'
        });
        return blob;
    }
    /**
     *Creates an instance of MediaStreamRecorder.
     * @param {Array<MediaStreamTrack>} tracks
     * @memberof MediaStreamRecorder
     */
    constructor(public tracks: Array<MediaStreamTrack>) {
        this.mediaStream = new MediaStream(tracks);
        this.recorder = new MediaRecorder(this.mediaStream,
            { mimeType: 'video/webm; codecs="opus,vp8"' });

        this.recorder.ondataavailable = (e: any) => {
            if (e.data.size > 0) {
                if (this.ondataavailable) {
                    this.ondataavailable(e.data);
                } else {
                    this.data.push(e.data);
                }
            }
        }
    }

    /**
     * Flush data buffer and get recorded data (blob)
     *
     * @returns {Promise<string>}
     * @memberof MediaStreamRecorder
     */
    flush(): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve(this.getBlobUrl());
            this.data = new Array<Blob>();
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
    start(n: number) {
        this.data = new Array<Blob>();
        this.recorder.start(n)
    }
    ondataavailable: (data: any) => void;
}