import { MediaStreamBlender, IStreamSource, MediaLoader } from "../..";
import { ILayer } from "../..";

export class BlendExample { // no need to be frank, but i did start this way :-)
    blender: MediaStreamBlender
    constructor() {
        let canvas = document.createElement("canvas"); // we just feed the result back to a video element 
        canvas.width = 1289; canvas.height = 720;
        this.blender = new MediaStreamBlender();
    }
    addTracks(tracks: MediaStreamTrack[]) {
        this.blender.addTracks((Math.random() + 1).toString(36).substring(7), tracks, true)
    }
    setMediaStream(videoEl: HTMLVideoElement) {
        let ms = this.blender.captureStream(); // this can be used in  WebRTC - RTCPeerConnection 
        videoEl.srcObject = ms;
    }
}

document.addEventListener("DOMContentLoaded", () => {


    const addScreenShareButton = document.querySelector("#add-screen-share");

    const b = new BlendExample();

    navigator["getUserMedia"]({ video: { width: 640, height: 360 }, audio: false }, (ms) => {
        b.addTracks(ms.getTracks()) // add the webcam 640x360
        // load a video 360p video
      

        b.blender.addPIPStream(ms.getVideoTracks()[0]).then ( r => {

        });


        addScreenShareButton.addEventListener("click",() => {

            const gdmOptions = {video: true,
              audio: {
                echoCancellation: true,
                noiseSuppression: true,
                sampleRate: 44100
              } };

            navigator.mediaDevices.getDisplayMedia(gdmOptions).then( (ms:MediaStream) => {
                    b.addTracks(ms.getVideoTracks())
            });

        });


        MediaLoader.loadVideos("assets/video1.webm").then ( v => {
            b.blender.addVideoSource("video1", v);
            b.blender.refreshCanvas();
        });

        MediaLoader.loadVideos("assets/video2.mp4").then ( v => {
            b.blender.addVideoSource("video2", v);
            b.blender.refreshCanvas();
        });

        const layerA: ILayer = {
            id: "Hello Box",
            fn: (time: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
                const c = "#ff0000";
                ctx.fillStyle = c
                ctx.strokeStyle = c;
                ctx.lineWidth = 10;
                ctx.strokeRect(20, 20, 360 - 40, 360 - 40);
                ctx.stroke();
                ctx.font = "70px 'Arial'";
                ctx.fillText("HELLO", 60, 200);
            },
            visible:true 
        }

        const layerB: ILayer = {
            id: "bottom ribbon with text",
            fn: (time: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {            
                ctx.fillStyle =  "#ff0000a0";
                ctx.fillRect(0, canvas.height-60, canvas.width / 2, 50);
                ctx.fillStyle =  "#ffffff";
                ctx.font = "30px 'Arial'";
                ctx.fillText("Change the world by being yourself",20,canvas.height-25);
            },
            visible:true 
        }        

        b.blender.addOnScreenLayer(layerA);
        b.blender.addOnScreenLayer(layerB);

        b.setMediaStream(document.querySelector("video") as HTMLVideoElement)

        b.blender.render(25);


    }, err => console.error(err))


})