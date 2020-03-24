"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MediaStreamRecorder_1 = require("./MediaStreamRecorder");
class StreamSource {
    constructor(stream, source, isLocal) {
        this.stream = stream;
        this.source = source;
        this.isLocal = isLocal;
        console.log("?isLocal", isLocal);
    }
}
exports.StreamSource = StreamSource;
class MediaStreamBlender {
    /**
     * Create a video element , add the track(s)
     *
     * @param {MediaStream} stream
     * @returns {HTMLVideoElement}
     * @memberof MediaStreamRenderer
     */
    createVideoFromStream(stream) {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.muted = true;
        video.width = 640;
        video.height = 360;
        video.autoplay = true;
        video.play();
        return video;
    }
    captureStream() {
        let stream = this.surface["captureStream"]() || this.surface["mozCaptureStream"]();
        let videoStream = new MediaStream();
        stream.getTracks().filter(function (t) {
            return t.kind === 'video';
        }).forEach(track => {
            videoStream.addTrack(track);
        });
        return videoStream;
    }
    addTracks(id, tracks, isLocal) {
        const stream = new MediaStream();
        tracks.forEach((track) => {
            if (track.kind === "video") {
                stream.addTrack(track);
                let source = new StreamSource(stream, this.createVideoFromStream(stream), isLocal);
                this.videosSources.set(id, source);
            }
            else {
                if (!this.audioContext) {
                    this.audioContext = new AudioContext();
                    this.audioDestination = this.audioContext.createMediaStreamDestination();
                }
                stream.addTrack(track);
                let audioSource = this.audioContext.createMediaStreamSource(stream);
                let source = new StreamSource(stream, audioSource, isLocal);
                if (!isLocal)
                    audioSource.connect(this.audioDestination);
                this.audioSources.set(id, source);
            }
        });
        this.onTrack();
        return stream;
    }
    refreshCanvas() {
        // const h = surface.height
        const videosLength = this.videosSources.size;
        var v = Array.from(this.videosSources.values());
        this.surface.width = videosLength > 1 ? v[0].source.width * 2 : v[0].source.width;
        var height = 1;
        if (videosLength === 3 || videosLength === 4) {
            height = 2;
        }
        if (videosLength === 5 || videosLength === 6) {
            height = 3;
        }
        if (videosLength === 7 || videosLength === 8) {
            height = 4;
        }
        if (videosLength === 9 || videosLength === 10) {
            height = 5;
        }
        this.surface.height = v[0].source.height * height;
    }
    getRemoteAudioStream() {
        this.audioDestination = this.audioContext.createMediaStreamDestination();
        this.audioSources.forEach((_audioSource) => {
            console.log(_audioSource.isLocal);
            if (!_audioSource.isLocal) {
                console.log("connecting to audioDestination", _audioSource, this.audioDestination);
                _audioSource.source.connect(this.audioDestination);
            }
        });
        return this.audioDestination.stream;
    }
    getAllAudioStreams() {
        this.audioDestination = this.audioContext.createMediaStreamDestination();
        this.audioSources.forEach((_audioSource) => {
            _audioSource.source.connect(this.audioDestination);
        });
        return this.audioDestination.stream;
    }
    /**
     * Draw video element on th canvas
     *
     * @param {HTMLVideoElement} video
     * @param {number} index
     * @memberof MediaStreamRender
     */
    drawVideo(video, index) {
        let x = 0;
        let y = 0;
        let width = video.width;
        let height = video.height;
        if (index === 1) {
            x = video.width;
        }
        if (index === 2) {
            y = video.height;
        }
        if (index === 3) {
            x = video.width;
            y = video.height;
        }
        if (index === 4) {
            y = video.height * 2;
        }
        if (index === 5) {
            x = video.width;
            y = video.height * 2;
        }
        if (index === 6) {
            y = video.height * 3;
        }
        if (index === 7) {
            x = video.width;
            y = video.height * 3;
        }
        this.ctx.drawImage(video, x, y, width, height);
    }
    /**
     * Creates an instance of MediaStreamBleder.
     * @param {HTMLCanvasElement} [el]
     * @memberof MediaStreamBleder
     */
    constructor(el) {
        this.videosSources = new Map();
        this.audioSources = new Map();
        this.surface = el ? el : document.createElement("canvas");
        this.ctx = this.surface.getContext("2d");
    }
    /**
     * Start/stop recorder
     *
     * @memberof MediaStreamBleder
     */
    record() {
        if (!this.isRecording) {
            let video = this.captureStream().getVideoTracks();
            let audio = this.getAllAudioStreams().getAudioTracks();
            let tracks = [video[0], audio[0]];
            this.recorder = new MediaStreamRecorder_1.MediaStreamRecorder(tracks);
            this.recorder.start(10);
            this.onRecordingStart();
        }
        else {
            this.recorder.stop();
            this.recorder.flush().then(this.onRecordingEnded);
        }
        this.isRecording = !this.isRecording;
    }
    /**
     * Start / stop render video elements to canvas
     *
     * @param {number} fps
     * @memberof MediaStreamBleder
     */
    render(fps) {
        if (!this.isRendering) {
            this.refreshCanvas();
            this._handle = setInterval(() => {
                Array.from(this.videosSources.values()).forEach((v, i) => {
                    this.drawVideo(v.source, i);
                });
            }, 1000 / fps);
        }
        else {
            this._handle = -1;
            clearInterval(this._handle);
        }
        this.isRendering = !this.isRendering;
    }
}
exports.MediaStreamBlender = MediaStreamBlender;
