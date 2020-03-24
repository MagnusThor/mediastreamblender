import { MediaStreamRecorder } from './MediaStreamRecorder';
export declare class StreamSource {
    stream: MediaStream;
    source: any;
    isLocal: boolean;
    constructor(stream: MediaStream, source: any, isLocal: boolean);
}
export declare class MediaStreamBlender {
    surface: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    audioContext: AudioContext;
    audioDestination: MediaStreamAudioDestinationNode;
    audioSources: Map<string, StreamSource>;
    videosSources: Map<string, StreamSource>;
    onTrack: () => void;
    onRecordingStart: () => void;
    onRecordingEnded: (blobUrl: string) => void;
    recorder: MediaStreamRecorder;
    isRendering: boolean;
    isRecording: boolean;
    private _handle;
    /**
     * Create a video element , add the track(s)
     *
     * @param {MediaStream} stream
     * @returns {HTMLVideoElement}
     * @memberof MediaStreamRenderer
     */
    createVideoFromStream(stream: MediaStream): HTMLVideoElement;
    captureStream(): MediaStream;
    addTracks(id: string, tracks: Array<MediaStreamTrack>, isLocal: boolean): MediaStream;
    refreshCanvas(): void;
    getRemoteAudioStream(): MediaStream;
    getAllAudioStreams(): MediaStream;
    /**
     * Draw video element on th canvas
     *
     * @param {HTMLVideoElement} video
     * @param {number} index
     * @memberof MediaStreamRender
     */
    drawVideo(video: HTMLVideoElement, index: number): void;
    /**
     * Creates an instance of MediaStreamBleder.
     * @param {HTMLCanvasElement} [el]
     * @memberof MediaStreamBleder
     */
    constructor(el?: HTMLCanvasElement);
    /**
     * Start/stop recorder
     *
     * @memberof MediaStreamBleder
     */
    record(): void;
    /**
     * Start / stop render video elements to canvas
     *
     * @param {number} fps
     * @memberof MediaStreamBleder
     */
    render(fps: number): void;
}
