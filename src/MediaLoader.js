"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaLoader = void 0;
class MediaLoader {
    static readFile(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then((response) => {
                resolve(response.blob());
            }).catch(reject);
        });
    }
    static getAudioMediaStream(url, callback) {
        this.readFile(url).then((blob) => {
            var context = new AudioContext();
            var gainNode = context.createGain();
            gainNode.connect(context.destination);
            gainNode.gain.value = 0; // don't play for self
            let reader = new FileReader();
            reader.onload = (function (e) {
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
exports.MediaLoader = MediaLoader;
