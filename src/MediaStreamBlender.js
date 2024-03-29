"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaStreamBlender = void 0;
const MediaStreamRecorder_1 = require("./MediaStreamRecorder");
const TinyRenderer_1 = require("./TinyRenderer");
const intrinsic_scale_1 = require("intrinsic-scale");
class MediaStreamBlender {
    /**
     * Creates an instance of MediaStreamBleder.
     * @param {HTMLCanvasElement} [el]
     * @memberof MediaStreamBleder
     */
    constructor(el) {
        this.audioSources = new Map();
        this.videosSources = new Map();
        this.videosSources =
            this.audioSources = new Map();
        this.surface = el ? el : document.createElement("canvas");
        this.ctx = this.surface.getContext("2d");
        this.tinyRender = new TinyRenderer_1.Tiny2DRenderer(this.ctx);
    }
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
    /**
     * Get a video stream from the canvas
     *
     * @returns MediaStream
     * @memberof MediaStreamBlender
     */
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
    /**
     * Add a background image to to surface
     *
     * @memberof MediaStreamBlender
     */
    addBackgrouund() {
        // do op 
    }
    /**
     * Add a video element from a HTMLVideoElement
     *
     * @param {string} id
     * @param {HTMLVideoElement} vs
     * @memberof MediaStreamBlender
     */
    addVideoSource(id, vs) {
        const sc = { source: vs, isLocal: true };
        this.videosSources.set(id, sc);
    }
    /**
     *  Add MediaStreamTracks
     *
     * @param {string} id
     * @param {Array<MediaStreamTrack>} tracks
     * @param {boolean} isLocal
     * @returns {MediaStream}
     * @memberof MediaStreamBlender
     */
    addTracks(id, tracks, isLocal) {
        const stream = new MediaStream();
        tracks.forEach((track) => {
            if (track.kind === "video") {
                stream.addTrack(track);
                let source = { stream, source: this.createVideoFromStream(stream), isLocal };
                this.videosSources.set(id, source);
            }
            else {
                if (!this.audioContext) {
                    this.audioContext = new AudioContext();
                    this.audioDestination = this.audioContext.createMediaStreamDestination();
                }
                stream.addTrack(track);
                let audioSource = this.audioContext.createMediaStreamSource(stream);
                let source = { stream, source: audioSource, isLocal };
                if (!isLocal)
                    audioSource.connect(this.audioDestination);
                this.audioSources.set(id, source);
            }
            track.onended = () => {
                if (this.onTrackEnded)
                    this.onTrackEnded(id, track);
            };
        });
        if (this.onTrack)
            this.onTrack();
        return stream;
    }
    /**
     *  Refresh the canvas containg videos ( call after a new video is added )
     *
     * @memberof MediaStreamBlender
     */
    refreshCanvas() {
        const numOfVideos = this.videosSources.size;
        let videoSource = Array.from(this.videosSources.values());
        this.surface.width = numOfVideos > 1 ? videoSource[0].source.width * 2 : videoSource[0].source.width;
        let height = 1;
        if (numOfVideos === 3 || numOfVideos === 4) {
            height = 2;
        }
        if (numOfVideos === 5 || numOfVideos === 6) {
            height = 3;
        }
        if (numOfVideos === 7 || numOfVideos === 8) {
            height = 4;
        }
        if (numOfVideos === 9 || numOfVideos === 10) {
            height = 5;
        }
        this.surface.height = videoSource[0].source.height * height;
    }
    /**
     * Get a MediaStream of all remote audio tracks ( not self )
     *
     * @returns
     * @memberof MediaStreamBlender
     */
    getRemoteAudioStream() {
        this.audioDestination = this.audioContext.createMediaStreamDestination();
        this.audioSources.forEach((_audioSource) => {
            if (!_audioSource.isLocal) {
                _audioSource.source.connect(this.audioDestination);
            }
        });
        return this.audioDestination.stream;
    }
    /**
     * Get a MediaStream containing all audio tracks
     *
     * @returns
     * @memberof MediaStreamBlender
     */
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
            this.recorder.ondataavailable = this.onRecorderData;
            this.recorder.start(500);
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
            this.addBackgrouund();
            this._handle = setInterval(() => {
                Array.from(this.videosSources.values()).forEach((v, i) => {
                    this.drawVideo(v.source, i);
                });
                // add a pipVideo of avalibale
                this.tinyRender.renderLayers(this._handle);
                if (this.pipVideo) {
                    this.ctx.drawImage(this.pipVideo, this.pipContainer.x + 10, this.pipContainer.y, this.pipContainer.width, this.pipContainer.height);
                }
                if (this.onFrameRendered)
                    this.onFrameRendered(this.ctx);
            }, 1000 / fps);
        }
        else {
            clearInterval(this._handle);
            this._handle = -1;
        }
        this.isRendering = !this.isRendering;
    }
    /**
     * Add an on screen display later to surface
     *
     * @param {ILayer} layer
     * @memberof MediaStreamBlender
     */
    addOnScreenLayer(layer) {
        this.tinyRender.addLayer(layer);
    }
    /**
     * Add an array of layers to the surface
     *
     * @param {ILayer[]} layers
     * @memberof MediaStreamBlender
     */
    addOnScreenLayers(layers) {
        layers.forEach(layer => this.tinyRender.addLayer(layer));
    }
    /**
     * Add a picture in picture video element (top left corner )
     *
     * @param {MediaStreamTrack} mediaStreamTrack
     * @memberof MediaStreamBlender
     */
    addPIPStream(mediaStreamTrack) {
        return new Promise((resolve, reject) => {
            if (mediaStreamTrack.kind !== "video")
                throw "mediaStreamTrack provided is not of kind video ";
            const pipVideo = document.createElement("video");
            pipVideo.width = 640;
            pipVideo.height = 360;
            pipVideo.autoplay = true;
            pipVideo.oncanplay = () => {
                this.pipContainer = intrinsic_scale_1.contain(100, 100, pipVideo.width, pipVideo.height);
                resolve(pipVideo);
            };
            pipVideo.onerror = (err) => reject(err);
            pipVideo.srcObject = new MediaStream([mediaStreamTrack]);
            this.pipVideo = pipVideo;
        });
    }
    /**
     * Set the visibillity of the layer
     *
     * @param {string} layerId
     * @param {boolean} visible
     * @return {*}  {ILayer}
     * @memberof MediaStreamBlender
     */
    setLayerVisibility(layerId, visible) {
        const layer = this.tinyRender.layers.get(layerId);
        layer.visible = visible;
        return layer;
    }
}
exports.MediaStreamBlender = MediaStreamBlender;
