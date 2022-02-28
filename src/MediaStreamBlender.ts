
import { ILayer } from './ILayer';
import { MediaStreamRecorder } from './MediaStreamRecorder';
import { IStreamSource } from './IStreamSource';
import { Tiny2DRenderer } from './TinyRenderer';


export class MediaStreamBlender {
    surface: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    audioContext: AudioContext;
    audioDestination: MediaStreamAudioDestinationNode;
    audioSources = new Map<string, IStreamSource>(); tinyRender: Tiny2DRenderer;
    ;
    videosSources = new Map<string, IStreamSource>();
    /**
     * Fires when a new track is added
     *
     * @memberof MediaStreamBlender
     */
    onTrack: () => void;
    /**
     * Fires when a track has ended, is lost
     *
     * @memberof MediaStreamBlender
     */
    onTrackEnded: (id: string, track: MediaStreamTrack) => void;
    /**
     * Fires when recorder i started
     *
     * @memberof MediaStreamBlender
     */
    onRecordingStart: () => void
    /**
     * Fires when recorder is stopped
     *
     * @memberof MediaStreamBlender
     */
    onRecordingEnded: (blobUrl: string) => void
    /**
     * Fires when a frame is rendered
     *
     * @memberof MediaStreamBlender
     */
    onFrameRendered: (ctx: RenderingContext) => void


    recorder: MediaStreamRecorder;
    onRecorderData: (data: any) => void;
    isRendering: boolean;
    isRecording: boolean;
    private _handle: any;
    /**
     * Create a video element , add the track(s)
     *
     * @param {MediaStream} stream
     * @returns {HTMLVideoElement}
     * @memberof MediaStreamRenderer
     */
    createVideoFromStream(stream: MediaStream): HTMLVideoElement {
        const video = document.createElement('video') as HTMLVideoElement;
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
    captureStream(): MediaStream {
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
    addBackgrouund(): void {
        // do op 
    }
    /**
     * Add a video element from a HTMLVideoElement
     *
     * @param {string} id
     * @param {HTMLVideoElement} vs
     * @memberof MediaStreamBlender
     */
    addVideoSource(id: string, vs: HTMLVideoElement): void {
        const sc: IStreamSource = { source: vs, isLocal: true }
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
    addTracks(id: string, tracks: Array<MediaStreamTrack>, isLocal: boolean): MediaStream {
        const stream = new MediaStream();
        tracks.forEach((track: MediaStreamTrack) => {
            if (track.kind === "video") {
                stream.addTrack(track);

                let source: IStreamSource = { stream, source: this.createVideoFromStream(stream), isLocal };
                this.videosSources.set(id, source);

            } else {
                if (!this.audioContext) {
                    this.audioContext = new AudioContext();
                    this.audioDestination = this.audioContext.createMediaStreamDestination();
                }
                stream.addTrack(track);
                let audioSource = this.audioContext.createMediaStreamSource(stream);
                let source: IStreamSource = { stream, source: audioSource, isLocal };
                if (!isLocal)
                    audioSource.connect(this.audioDestination);
                this.audioSources.set(id, source);
            }
            track.onended = () => {
                if (this.onTrackEnded)
                    this.onTrackEnded(id, track);
            }
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
        this.audioSources.forEach((_audioSource: IStreamSource) => {
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
        this.audioSources.forEach((_audioSource: IStreamSource) => {
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
    private drawVideo(video: HTMLVideoElement, index: number) {
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
    constructor(el?: HTMLCanvasElement) {
        this.videosSources =
            this.audioSources = new Map<string, IStreamSource>()
        this.surface = el ? el : document.createElement("canvas") as HTMLCanvasElement;
        this.ctx = this.surface.getContext("2d");
        this.tinyRender = new Tiny2DRenderer(this.ctx, this.surface.width, this.surface.height);
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
            this.recorder = new MediaStreamRecorder(tracks);
            this.recorder.ondataavailable = this.onRecorderData;
            this.recorder.start(500);
            this.onRecordingStart();

        } else {
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
    render(fps: number) {
        if (!this.isRendering) {
            this.refreshCanvas();
            this.addBackgrouund()
            this._handle = setInterval(() => {
                Array.from(this.videosSources.values()).forEach((v: any, i: number) => {
                    this.drawVideo(v.source, i);
                });
                this.tinyRender.renderLayers(this._handle);
                // draw water mark, overlay ?
                if (this.onFrameRendered)
                    this.onFrameRendered(this.ctx);
            }, 1000 / fps);
        } else {
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
    addOnScreenLayer(layer: ILayer) {
        this.tinyRender.addLayer(layer);
    }

}


