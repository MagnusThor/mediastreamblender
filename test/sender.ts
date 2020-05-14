import { Factory, WebRTC, PeerChannel } from 'thor-io.client-vnext';
import { MediaSourceStreamer } from "../src/MediaStreamer";
import { MediaStreamRecorder } from '..';
import { TextMessage } from 'thor-io.client-vnext/src/Messages/TextMessage';

document.addEventListener("DOMContentLoaded", () => {


    let mediaStreamer: MediaSourceStreamer;



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


        rtc.OnContextCreated = (p: any) => {
            console.log("Connected to a random context")
        }

        rtc.OnContextChanged = (p: any) => {
            console.log("Now connected to", p.context);
            rtc.ConnectContext();
        }
        let constraints = {
            video: {
                width: { min: 320, max: 1280, ideal: 640 },
                height: { min: 240, max: 720, ideal: 360 },
                frameRate: 30
            }, audio: true
        }
        navigator.mediaDevices.getUserMedia(constraints).then((mediaStream: MediaStream) => {


            fetch("into.webm").then((r: Response) => {
                return r.arrayBuffer()
            }).then((arr: ArrayBuffer) => {


                let tracks = mediaStream.getTracks();



                rtc.ChangeContext("foo-bar");

                let video = document.createElement("video");
                video.width = 640; video.height = 360;
                video.controls = true;
                video.muted = true;

                mediaStreamer = new MediaSourceStreamer(video);

                let recorder = new MediaStreamRecorder(tracks);

                let dataChannel = rtc.CreateDataChannel("streamChannel");
               
                dataChannel.OnOpen = (a, b, c) => {          
                    let blob = recorder.getParts();
                    
                    blob.arrayBuffer().then ( (buf:ArrayBuffer) => {

                    console.log(buf);

                        dataChannel.InvokeBinary("handshake",{
                            video: video.currentTime
                        },buf,true);
                    });

                }

                recorder.ondataavailable = (blob: Blob) => {
                    blob.arrayBuffer().then((buffer: ArrayBuffer) => {
                        mediaStreamer.addChunk(buffer,video.currentTime);
                        const meta = {
                            time:video.currentTime,
                            size: buffer.byteLength
                        };
                        dataChannel.InvokeBinary("segment",meta,buffer,true);
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