"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MediaLoader_1 = require("../src/MediaLoader");
const MediaStreamBlender_1 = require("../src/MediaStreamBlender");
document.addEventListener("DOMContentLoaded", () => {
    // watermark image
    let watermark = new Image();
    watermark.src = "logo.png";
    let p = new MediaStreamBlender_1.MediaStreamBlender(document.querySelector("canvas"));
    p.onFrameRendered = (ctx) => {
        // postprocess , add a watermark image,           
        ctx.save();
        ctx.filter = "invert()";
        ctx.drawImage(watermark, 10, 10, 100, 100);
        ctx.restore();
    };
    p.onTrack = () => {
        p.refreshCanvas();
        console.log("tracks added");
    };
    p.onRecordingStart = () => {
        console.log("stared recording");
    };
    p.onRecordingEnded = (blobUrl) => {
        const download = document.createElement("a");
        download.setAttribute("href", blobUrl);
        download.textContent = "test.webm";
        download.setAttribute("download", "download.webm");
        download.click();
    };
    let audioPlayback = document.createElement('audio');
    audioPlayback.controls = true;
    audioPlayback.autoplay = true;
    document.querySelector("body").append(audioPlayback);
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream) => {
        let tracks = mediaStream.getTracks();
        // add a mp3
        MediaLoader_1.MediaLoader.getAudioMediaStream("Bill Gates Commencement Speech 1.mp3", (mediaStream) => {
            p.addTracks(Math.random().toString(36).substring(6), mediaStream.getTracks(), false);
        });
        MediaLoader_1.MediaLoader.getAudioMediaStream("Pavane-for-a-dead-princess-piano.mp3", (mediaStream) => {
            p.addTracks(Math.random().toString(36).substring(6), mediaStream.getTracks(), false);
        });
        // add the captured video ( x 2 )
        p.addTracks(Math.random().toString(36).substring(6), tracks, false);
        p.addTracks(Math.random().toString(36).substring(6), tracks, true);
        p.render(60);
        //  get all remote audio tracks, and stream to a audio element
        audioPlayback.srcObject = p.getRemoteAudioStream();
    }).catch(err => {
        console.error(err);
    });
    // expose API to window
    window["mediaBlender"] = p;
});
