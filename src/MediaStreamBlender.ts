import adapter from 'webrtc-adapter';
import { MediaStreamRecorder } from './MediaStreamRecorder';
import { MediaLoader } from './MediaLoader';


export class StreamSource {
    constructor(public stream: MediaStream, public source: any, public isLocal: boolean) {
        console.log("?isLocal",isLocal);
    }
}

export class MediaStreamBlender {

    surface: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    audioContext: AudioContext;
    audioDestination: MediaStreamAudioDestinationNode;

    audioSources: Map<string, StreamSource>;

    videosSources: Map<string, StreamSource>;


    onTrack:() => void;
    onRecordingStart: () => void
    onRecordingEnded: (blobUrl:string) => void

    recorder: MediaStreamRecorder;
    isRendering: boolean;
    isRecording: boolean;


    private _handle:number;

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

    addTracks(id: string, tracks: Array<MediaStreamTrack>, isLocal: boolean): MediaStream {
        const stream = new MediaStream();

        tracks.forEach((track: MediaStreamTrack) => {
            if (track.kind === "video") {
                stream.addTrack(track);
                let source = new StreamSource(stream, this.createVideoFromStream(stream), isLocal)
                this.videosSources.set(id, source);
            } else {

                if (!this.audioContext) {
                    this.audioContext = new AudioContext();
                    this.audioDestination = this.audioContext.createMediaStreamDestination();
                }
                stream.addTrack(track);
                let audioSource = this.audioContext.createMediaStreamSource(stream);
                let source = new StreamSource(stream, audioSource, isLocal)
                if(!isLocal)
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
        this.audioSources.forEach((_audioSource: StreamSource) => {
            console.log(_audioSource.isLocal)
            if (!_audioSource.isLocal) {
                console.log("connecting to audioDestination", _audioSource, this.audioDestination);

                _audioSource.source.connect(this.audioDestination);
            }
        });

        return this.audioDestination.stream;
    }
    getAllAudioStreams() {
        this.audioDestination = this.audioContext.createMediaStreamDestination();
        this.audioSources.forEach((_audioSource: StreamSource) => {
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
    drawVideo(video: HTMLVideoElement, index: number) {
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
    constructor(el?:HTMLCanvasElement) {
        this.videosSources = new Map<string, StreamSource>();
        this.audioSources = new Map<string, StreamSource>()
        this.surface = el ?  el : document.createElement("canvas") as HTMLCanvasElement;
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
            this.recorder = new MediaStreamRecorder(tracks);
            this.recorder.start(10);
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
        if(!this.isRendering){       
       this.refreshCanvas();
       this._handle =  setInterval(() => {
            Array.from(this.videosSources.values()).forEach((v: any, i: number) => {
                this.drawVideo(v.source, i);
            });
        }, 1000 / fps);
        }else{
            this._handle = -1;
             clearInterval(this._handle);
        }

        this.isRendering = !this.isRendering;
    }
}




