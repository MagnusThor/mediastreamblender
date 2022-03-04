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
    static getVideoMediaStream(url, callback) {
        throw "not yet implemented"; // load and get the MediaStream of the video? Possible? Prolly yes.
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
    /**
     *
     *
     * @param {string[]} videoSorces
     * @return {*}  {Promise<HTMLVideoElement>}
     * @memberof MediaLoader
     */
    static loadVideos(videoSorces, w, h) {
        return new Promise((resolve, reject) => {
            let video = document.createElement("video");
            video.width = w | 640;
            video.height = h | 360;
            video.autoplay = true;
            video.loop = true;
            video.oncanplay = () => {
                resolve(video);
            };
            video.onerror = (err) => {
                reject(err);
            };
            video.src = videoSorces;
        });
    }
}
exports.MediaLoader = MediaLoader;
