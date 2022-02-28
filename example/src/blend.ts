import { MediaStreamBlender, IStreamSource } from "../..";
import { ILayer } from "../../src/ILayer";

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
    let b = new BlendExample();
    navigator["getUserMedia"]({ video: { width: 640, height: 360 }, audio: false }, (ms) => {
        b.addTracks(ms.getTracks()) // add the webcam 640x360
        // load a video 360p video
        let video = document.createElement("video") as HTMLVideoElement // 
        video.width = 640;
        video.height = 360;
        video.autoplay = true;
        video.loop = true;
        video.oncanplay = () => {
            b.blender.addVideoSource(video.id || "foo", video);
            b.blender.addVideoSource(video.id || "bar", video);
         
            //  document.querySelector("div").appendChild(video)
            b.blender.refreshCanvas();
        }
        video.src = "assets/into.webm";
        const layerA: ILayer = {
            id: "myLayer",
            fn: (time: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
                const c = "#ffffff";
                ctx.fillStyle = c
                ctx.strokeStyle = c;
                ctx.lineWidth = 10;
                ctx.strokeRect(20, 20, 360 - 40, 360 - 40);
                ctx.stroke();
                ctx.font = "70px 'Arial'";
                ctx.fillText("HELLO", 60, 200);
            },
            order:0 
        }
        b.blender.addOnScreenLayer(layerA);

        b.setMediaStream(document.querySelector("video") as HTMLVideoElement)

        b.blender.render(25);


    }, err => console.error(err))


})