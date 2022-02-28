export class MediaLoader {
    static readFile(url: string): Promise<Blob> {
        return new Promise<Blob>((resolve, reject) => {
            fetch(url).then((response: Response) => {
                resolve(response.blob());
            }).catch(reject);
        });
    }
    static getVideoMediaStream(url: string, callback: (m: MediaStream) => void) {
        throw "not yet implemented"; // load and get the MediaStream of the video? Possible? Prolly yes.
    }
    static getAudioMediaStream(url: string, callback: (m: MediaStream) => void) {
        this.readFile(url).then((blob: Blob) => {
            var context = new AudioContext();
            var gainNode = context.createGain();
            gainNode.connect(context.destination);
            gainNode.gain.value = 0; // don't play for self
            let reader = new FileReader();
            reader.onload = (function (e: any) {
                context.decodeAudioData(e.target.result, createSoundSource);
            });
            reader.readAsArrayBuffer(blob);
            const createSoundSource = (buffer) => {
                let soundSource = context.createBufferSource();
                soundSource.buffer = buffer;
                soundSource.start(0, 0 / 1000);
                soundSource.connect(gainNode);
                let destination = context.createMediaStreamDestination();
                soundSource.connect(destination);
                callback(destination.stream);
            };
        });
    }
}
