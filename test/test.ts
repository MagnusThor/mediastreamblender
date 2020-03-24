import { MediaLoader } from "../src/MediaLoader";
import { MediaStreamBlender } from '../src/MediaStreamBlender';

document.addEventListener("DOMContentLoaded",() => {
   
    let p = new MediaStreamBlender(document.querySelector("canvas"));

    p.onTrack =() =>{
        p.refreshCanvas();
        console.log("tracks added");
    }

    p.onRecordingStart = () =>{
        console.log("stared recording");
    }

    p.onRecordingEnded = (blobUrl:string) => {
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
    
    navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((mediaStream: MediaStream) => {
   
        let tracks  = mediaStream.getTracks();

        // add a mp3
        MediaLoader.getAudioMediaStream("Bill Gates Commencement Speech 1.mp3", (mediaStream:MediaStream) => {
            p.addTracks(Math.random().toString(36).substring(6),mediaStream.getTracks(),false);
        });

        MediaLoader.getAudioMediaStream("Pavane-for-a-dead-princess-piano.mp3", (mediaStream:MediaStream) => {
            p.addTracks(Math.random().toString(36).substring(6),mediaStream.getTracks(),false);
        });

        // add the captured video ( x 2 )
        p.addTracks(Math.random().toString(36).substring(6),tracks,false);
        p.addTracks(Math.random().toString(36).substring(6),tracks,true);
        
       
        p.render(60);

        //  get all remote audio tracks, and stream to a audio element
        audioPlayback.srcObject = p.getRemoteAudioStream();


    }).catch(err => {
        console.error(err);
    });


    // expose API to window
    window["mediaBlender"] = p;
    

});