import { MediaStreamRecorder } from './MediaStreamRecorder';
import { StreamSource } from './StreamSource';
export declare class MediaStreamBlender {
    surface: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    audioContext: AudioContext;
    audioDestination: MediaStreamAudioDestinationNode;
    audioSources: Map<string, StreamSource>;
    videosSources: Map<string, StreamSource>;
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
    onRecordingStart: () => void;
    /**
     * Fires when recorder is stopped
     *
     * @memberof MediaStreamBlender
     */
    onRecordingEnded: (blobUrl: string) => void;
    onFrameRendered: (ctx: RenderingContext) => void;
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
    /**
     * Get a video stream from the canvas
     *
     * @returns
     * @memberof MediaStreamBlender
     */
    captureStream(): MediaStream;
    /**
     *  Add MediaStreamTrack
     *
     * @param {string} id
     * @param {Array<MediaStreamTrack>} tracks
     * @param {boolean} isLocal
     * @returns {MediaStream}
     * @memberof MediaStreamBlender
     */
    addTracks(id: string, tracks: Array<MediaStreamTrack>, isLocal: boolean): MediaStream;
    /**
     *  Refresh the canvas containging vidoes ( call after a new video is added )
     *
     * @memberof MediaStreamBlender
     */
    refreshCanvas(): void;
    /**
     * Get a MediaStream of all remote audio tracks ( not self )
     *
     * @returns
     * @memberof MediaStreamBlender
     */
    getRemoteAudioStream(): MediaStream;
    /**
     * Get a MediaStream containing all audio tracks
     *
     * @returns
     * @memberof MediaStreamBlender
     */
    getAllAudioStreams(): MediaStream;
    /**
     * Draw video element on th canvas
     *
     * @param {HTMLVideoElement} video
     * @param {number} index
     * @memberof MediaStreamRender
     */
    private drawVideo;
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
