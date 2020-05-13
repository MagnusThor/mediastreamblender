import { MediaLoader } from "../src/MediaLoader";
import { MediaStreamBlender } from '../src/MediaStreamBlender';
import { Factory, WebRTC, PeerChannel } from 'thor-io.client-vnext';
import { MediaSourceStreamer } from "../src/MediaStreamer";

document.addEventListener("DOMContentLoaded", () => {


    let mediaStreamer: MediaSourceStreamer;




    const readAsArrayBuffer = (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener("loadend", () => resolve(reader.result), { once: true });
            reader.addEventListener("error", (ev) => reject(reader.error), { once: true });
            reader.readAsArrayBuffer(blob);
        });
    }

    let factory = new Factory("wss://kollokvium.herokuapp.com", ["broker"]);

    factory.OnOpen = () => {

        let broker = factory.GetController("broker");


        let rtc = new WebRTC(broker, {
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

        let dataChannel = rtc.CreateDataChannel("streamChannel");

        dataChannel.OnOpen = (a, b, c) => {
            console.log("A DataChannel to ", b);
        }

        rtc.OnContextCreated = (p: any) => {
            console.log("Connected to a random context")
        }

        rtc.OnContextChanged = (p: any) => {
            console.log("Now connected to", p.context);
            rtc.ConnectContext();
        }


        // watermark image

        let watermark = new Image();
        watermark.src = "logo.png";


        let p = new MediaStreamBlender(document.querySelector("canvas"));

        p.onFrameRendered = (ctx: CanvasRenderingContext2D) => {
            // postprocess , add a watermark image,           
            ctx.save();
            ctx.filter = "invert()";
            ctx.drawImage(watermark, 10, 10, 100, 100);
            ctx.restore();
        }

        p.onTrack = () => {
            p.refreshCanvas();
            console.log("tracks added");
        }
        p.onRecordingStart = () => {
            console.log("stared recording");
        }

        p.onRecorderData = (data: Blob) => {
            //  console.log(e);
            readAsArrayBuffer(data).then((buffer: ArrayBuffer) => {
                mediaStreamer.addChunk(buffer);

                Array.from(dataChannel.PeerChannels.values()).forEach((pc: PeerChannel) => {
                    if (pc.dataChannel.readyState == "open")
                        pc.dataChannel.send(buffer);
                });
            });

        };


        p.onRecordingEnded = (blobUrl: string) => {
            const download = document.createElement("a");
            download.setAttribute("href", blobUrl);
            download.textContent = "test.webm";
            download.setAttribute("download", "download.webm");
            download.click();
        }

        let audioPlayback = document.createElement('audio') as HTMLAudioElement;
        audioPlayback.controls = true;
        audioPlayback.autoplay = true;

        document.querySelector("body").append(audioPlayback);

        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream: MediaStream) => {

            let tracks = mediaStream.getTracks();

            // // add a mp3
            // MediaLoader.getAudioMediaStream("Bill Gates Commencement Speech 1.mp3", (mediaStream: MediaStream) => {
            //     p.addTracks(Math.random().toString(36).substring(6), mediaStream.getTracks(), false);
            // });

            // MediaLoader.getAudioMediaStream("Pavane-for-a-dead-princess-piano.mp3", (mediaStream: MediaStream) => {
            //     p.addTracks(Math.random().toString(36).substring(6), mediaStream.getTracks(), false);
            // });

            // add the captured video ( x 2 )
            p.addTracks(Math.random().toString(36).substring(6), tracks, false);

            p.render(30);

            //  get all remote audio tracks, and stream to a audio element
            audioPlayback.srcObject = p.getRemoteAudioStream();

            rtc.ChangeContext("foo-bar");

            let video = document.createElement("video");
            video.width = 480; video.height = 360;
            video.controls = true;

            mediaStreamer = new MediaSourceStreamer(video);

            document.querySelector("#broadcast").addEventListener("click", () => {
                p.record();
            }, { once: true });

            document.querySelector("#stream-video").append(video);

        }).catch(err => {
            console.error(err);
        });


        // expose API to window
        window["mediaBlender"] = p;


        broker.Connect();



    };



});