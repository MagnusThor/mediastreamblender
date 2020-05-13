"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const thor_io_client_vnext_1 = require("thor-io.client-vnext");
const MediaStreamer_1 = require("../src/MediaStreamer");
class Participant {
    constructor() {
        document.querySelector("button").addEventListener("click", () => {
            let video = document.createElement("video");
            video.width = 480;
            video.height = 360;
            video.controls = true;
            video.crossOrigin = 'anonymous';
            let mediaStreamer = new MediaStreamer_1.MediaSourceStreamer(video);
            video.addEventListener('loadstart', (ev) => { console.log(ev.type); });
            video.addEventListener('progress', (ev) => { console.log(ev.type); });
            video.addEventListener('loadedmetadata', (ev) => { console.log(ev.type); });
            video.addEventListener('loadeddata', (ev) => { console.log(ev.type); });
            video.addEventListener('canplay', (ev) => { console.log(ev.type); });
            video.addEventListener('canplaythrough', (ev) => { console.log(ev.type); });
            video.addEventListener('playing', (ev) => { console.log(ev.type); });
            video.addEventListener('waiting', (ev) => { console.log(ev.type); });
            video.addEventListener('seeking', (ev) => { console.log(ev.type); });
            video.addEventListener('seeked', (ev) => { console.log(ev.type); });
            video.addEventListener('ended', (ev) => { console.log(ev.type); });
            video.addEventListener('emptied', (ev) => { console.log(ev.type); });
            video.addEventListener('stalled', (ev) => { console.log(ev.type); });
            video.addEventListener('timeupdate', (ev) => { console.log(ev.type); }); // annoying
            video.addEventListener('durationchange', (ev) => { console.log(ev.type); });
            video.addEventListener('ratechange', (ev) => { console.log(ev.type); });
            video.addEventListener('play', (ev) => { console.log(ev.type); });
            video.addEventListener('pause', (ev) => { console.log(ev.type); });
            video.addEventListener('error', (ev) => { console.warn(ev.type, ev); });
            document.querySelector("#stream").append(video);
            this.factory = new thor_io_client_vnext_1.Factory("wss://kollokvium.herokuapp.com", ["broker"]);
            this.factory.OnOpen = () => {
                let broker = this.factory.GetController("broker");
                broker.OnOpen = () => {
                    this.rtc = new thor_io_client_vnext_1.WebRTC(broker, {
                        "sdpSemantics": 'plan-b',
                        "iceTransports": 'all',
                        "rtcpMuxPolicy": "require",
                        "bundlePolicy": "max-bundle",
                        "iceServers": [
                            {
                                "urls": "stun:stun.l.google.com:19302"
                            }
                        ]
                    });
                    let dataChannel = this.rtc.CreateDataChannel("streamChannel");
                    dataChannel.onMessage = (event) => {
                        mediaStreamer.addChunk(event.data);
                    };
                    dataChannel.OnOpen = (a, b, c) => {
                        console.log("a dataChannel to ", b);
                    };
                    this.rtc.OnContextCreated = () => {
                    };
                    this.rtc.OnContextChanged = () => {
                        this.rtc.ConnectContext();
                    };
                    setTimeout(() => {
                        this.rtc.ChangeContext("foo-bar");
                    }, 2000);
                };
                broker.Connect();
            };
        });
    }
}
exports.Participant = Participant;
document.addEventListener("DOMContentLoaded", () => {
    let p = new Participant();
});
