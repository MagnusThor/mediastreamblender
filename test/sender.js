"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const thor_io_client_vnext_1 = require("thor-io.client-vnext");
const MediaStreamer_1 = require("../src/MediaStreamer");
const __1 = require("..");
document.addEventListener("DOMContentLoaded", () => {
    let mediaStreamer;
    let factory = new thor_io_client_vnext_1.Factory("wss://kollokvium.herokuapp.com", ["broker"]);
    factory.OnOpen = () => {
        let broker = factory.GetController("broker");
        let rtc = new thor_io_client_vnext_1.WebRTC(broker, {
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
        rtc.OnContextCreated = (p) => {
            console.log("Connected to a random context");
        };
        rtc.OnContextChanged = (p) => {
            console.log("Now connected to", p.context);
            rtc.ConnectContext();
        };
        let constraints = {
            video: {
                width: { min: 320, max: 1280, ideal: 640 },
                height: { min: 240, max: 720, ideal: 360 },
                frameRate: 30
            }, audio: true
        };
        navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {
            fetch("into.webm").then((r) => {
                return r.arrayBuffer();
            }).then((arr) => {
                let tracks = mediaStream.getTracks();
                rtc.ChangeContext("foo-bar");
                let video = document.createElement("video");
                video.width = 640;
                video.height = 360;
                video.controls = true;
                video.muted = true;
                mediaStreamer = new MediaStreamer_1.MediaSourceStreamer(video);
                let recorder = new __1.MediaStreamRecorder(tracks);
                let dataChannel = rtc.CreateDataChannel("streamChannel");
                dataChannel.OnOpen = (a, b, c) => {
                    let blob = recorder.getParts();
                    blob.arrayBuffer().then((buf) => {
                        dataChannel.InvokeBinary("handshake", {
                            video: video.currentTime
                        }, buf, true);
                    });
                };
                recorder.ondataavailable = (blob) => {
                    blob.arrayBuffer().then((buffer) => {
                        mediaStreamer.addChunk(buffer, video.currentTime);
                        const meta = {
                            time: video.currentTime,
                            size: buffer.byteLength
                        };
                        dataChannel.InvokeBinary("segment", meta, buffer, true);
                    });
                };
                recorder.start(600);
                video.play();
                document.querySelector("#stream-video").append(video);
            }).catch(err => {
                console.error(err);
            });
        });
        // expose API to window
        broker.Connect();
    };
});
