export declare class MediaStreamRecorder {
    tracks: Array<MediaStreamTrack>;
    data: Array<Blob>;
    recorder: any;
    mediaStream: MediaStream;
    getBlobUrl(): string;
    constructor(tracks: Array<MediaStreamTrack>);
    flush(): Promise<string>;
    stop(): void;
    start(n: number): void;
}
