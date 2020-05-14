import { Factory, WebRTC } from 'thor-io.client-vnext';
import { MediaSourceStreamer } from '../src/MediaStreamer';
import { MediaStreamRecorder } from '../src/MediaStreamRecorder';

export class Participant {

    factory: Factory;
    rtc: WebRTC;

    constructor() {



        fetch("into.webm").then((r: Response) => {
            return r.arrayBuffer()
        }).then((arr: ArrayBuffer) => {
            let video = document.createElement("video");
            video.onerror = (err) => {
                console.log("video error", err)
            }
            video.width = 1280; video.height = 720;
            video.controls = true;
            video.crossOrigin = 'anonymous';
            let mediaStreamer = new MediaSourceStreamer(video);




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

            this.factory = new Factory("wss://kollokvium.herokuapp.com", ["broker"]);

            this.factory.OnOpen = () => {
                let broker = this.factory.GetController("broker");
                broker.OnOpen = () => {
                    this.rtc = new WebRTC(broker, {
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
                    let streamChannel = this.rtc.CreateDataChannel("streamChannel");


              
                    streamChannel.On("segment", (message: any, buffer: ArrayBuffer) => {
                        console.log("segment",buffer.byteLength);
                            mediaStreamer.addChunk(buffer,0);
                    });  

                    streamChannel.On("handshake", (message: any, buffer: ArrayBuffer) => {

                    
                        console.log("handshake",message);
                    
                       // mediaStreamer.addChunk(arr,0);

                                       
                    });
                    streamChannel.OnOpen = (a, b, c) => {
                        console.log("a stream dataChannel to ", b);
                    }
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


document.addEventListener("DOMContentLoaded", () => {
    let p = new Participant();
});