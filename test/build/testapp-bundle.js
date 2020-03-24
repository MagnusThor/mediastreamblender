/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/MediaLoader.js":
/*!****************************!*\
  !*** ./src/MediaLoader.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass MediaLoader {\n    static readFile(url) {\n        return new Promise((resolve, reject) => {\n            fetch(url).then((response) => {\n                resolve(response.blob());\n            }).catch(reject);\n        });\n    }\n    static getAudioMediaStream(url, callback) {\n        this.readFile(url).then((blob) => {\n            var context = new AudioContext();\n            var gainNode = context.createGain();\n            gainNode.connect(context.destination);\n            gainNode.gain.value = 0; // don't play for self\n            let reader = new FileReader();\n            reader.onload = (function (e) {\n                context.decodeAudioData(e.target.result, createSoundSource);\n            });\n            reader.readAsArrayBuffer(blob);\n            const createSoundSource = (buffer) => {\n                let soundSource = context.createBufferSource();\n                soundSource.buffer = buffer;\n                soundSource.start(0, 0 / 1000);\n                soundSource.connect(gainNode);\n                let destination = context.createMediaStreamDestination();\n                soundSource.connect(destination);\n                callback(destination.stream);\n            };\n        });\n    }\n}\nexports.MediaLoader = MediaLoader;\n\n\n//# sourceURL=webpack:///./src/MediaLoader.js?");

/***/ }),

/***/ "./src/MediaStreamBlender.js":
/*!***********************************!*\
  !*** ./src/MediaStreamBlender.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst MediaStreamRecorder_1 = __webpack_require__(/*! ./MediaStreamRecorder */ \"./src/MediaStreamRecorder.js\");\nconst StreamSource_1 = __webpack_require__(/*! ./StreamSource */ \"./src/StreamSource.js\");\nclass MediaStreamBlender {\n    /**\n     * Create a video element , add the track(s)\n     *\n     * @param {MediaStream} stream\n     * @returns {HTMLVideoElement}\n     * @memberof MediaStreamRenderer\n     */\n    createVideoFromStream(stream) {\n        const video = document.createElement('video');\n        video.srcObject = stream;\n        video.muted = true;\n        video.width = 640;\n        video.height = 360;\n        video.autoplay = true;\n        video.play();\n        return video;\n    }\n    /**\n     * Get a video stream from the canvas\n     *\n     * @returns\n     * @memberof MediaStreamBlender\n     */\n    captureStream() {\n        let stream = this.surface[\"captureStream\"]() || this.surface[\"mozCaptureStream\"]();\n        let videoStream = new MediaStream();\n        stream.getTracks().filter(function (t) {\n            return t.kind === 'video';\n        }).forEach(track => {\n            videoStream.addTrack(track);\n        });\n        return videoStream;\n    }\n    /**\n     *  Add MediaStreamTrack\n     *\n     * @param {string} id\n     * @param {Array<MediaStreamTrack>} tracks\n     * @param {boolean} isLocal\n     * @returns {MediaStream}\n     * @memberof MediaStreamBlender\n     */\n    addTracks(id, tracks, isLocal) {\n        const stream = new MediaStream();\n        tracks.forEach((track) => {\n            if (track.kind === \"video\") {\n                stream.addTrack(track);\n                let source = new StreamSource_1.StreamSource(stream, this.createVideoFromStream(stream), isLocal);\n                this.videosSources.set(id, source);\n            }\n            else {\n                if (!this.audioContext) {\n                    this.audioContext = new AudioContext();\n                    this.audioDestination = this.audioContext.createMediaStreamDestination();\n                }\n                stream.addTrack(track);\n                let audioSource = this.audioContext.createMediaStreamSource(stream);\n                let source = new StreamSource_1.StreamSource(stream, audioSource, isLocal);\n                if (!isLocal)\n                    audioSource.connect(this.audioDestination);\n                this.audioSources.set(id, source);\n            }\n            track.onended = () => {\n                this.onTrackEnded(id, track);\n            };\n        });\n        this.onTrack();\n        return stream;\n    }\n    /**\n     *  Refresh the canvas containging vidoes ( call after a new video is added )\n     *\n     * @memberof MediaStreamBlender\n     */\n    refreshCanvas() {\n        const numOfVideos = this.videosSources.size;\n        let videoSource = Array.from(this.videosSources.values());\n        this.surface.width = numOfVideos > 1 ? videoSource[0].source.width * 2 : videoSource[0].source.width;\n        let height = 1;\n        if (numOfVideos === 3 || numOfVideos === 4) {\n            height = 2;\n        }\n        if (numOfVideos === 5 || numOfVideos === 6) {\n            height = 3;\n        }\n        if (numOfVideos === 7 || numOfVideos === 8) {\n            height = 4;\n        }\n        if (numOfVideos === 9 || numOfVideos === 10) {\n            height = 5;\n        }\n        this.surface.height = videoSource[0].source.height * height;\n    }\n    /**\n     * Get a MediaStream of all remote audio tracks ( not self )\n     *\n     * @returns\n     * @memberof MediaStreamBlender\n     */\n    getRemoteAudioStream() {\n        this.audioDestination = this.audioContext.createMediaStreamDestination();\n        this.audioSources.forEach((_audioSource) => {\n            console.log(_audioSource.isLocal);\n            if (!_audioSource.isLocal) {\n                console.log(\"connecting to audioDestination\", _audioSource, this.audioDestination);\n                _audioSource.source.connect(this.audioDestination);\n            }\n        });\n        return this.audioDestination.stream;\n    }\n    /**\n     * Get a MediaStream containing all audio tracks\n     *\n     * @returns\n     * @memberof MediaStreamBlender\n     */\n    getAllAudioStreams() {\n        this.audioDestination = this.audioContext.createMediaStreamDestination();\n        this.audioSources.forEach((_audioSource) => {\n            _audioSource.source.connect(this.audioDestination);\n        });\n        return this.audioDestination.stream;\n    }\n    /**\n     * Draw video element on th canvas\n     *\n     * @param {HTMLVideoElement} video\n     * @param {number} index\n     * @memberof MediaStreamRender\n     */\n    drawVideo(video, index) {\n        let x = 0;\n        let y = 0;\n        let width = video.width;\n        let height = video.height;\n        if (index === 1) {\n            x = video.width;\n        }\n        if (index === 2) {\n            y = video.height;\n        }\n        if (index === 3) {\n            x = video.width;\n            y = video.height;\n        }\n        if (index === 4) {\n            y = video.height * 2;\n        }\n        if (index === 5) {\n            x = video.width;\n            y = video.height * 2;\n        }\n        if (index === 6) {\n            y = video.height * 3;\n        }\n        if (index === 7) {\n            x = video.width;\n            y = video.height * 3;\n        }\n        this.ctx.drawImage(video, x, y, width, height);\n    }\n    /**\n     * Creates an instance of MediaStreamBleder.\n     * @param {HTMLCanvasElement} [el]\n     * @memberof MediaStreamBleder\n     */\n    constructor(el) {\n        this.videosSources = new Map();\n        this.audioSources = new Map();\n        this.surface = el ? el : document.createElement(\"canvas\");\n        this.ctx = this.surface.getContext(\"2d\");\n    }\n    /**\n     * Start/stop recorder\n     *\n     * @memberof MediaStreamBleder\n     */\n    record() {\n        if (!this.isRecording) {\n            let video = this.captureStream().getVideoTracks();\n            let audio = this.getAllAudioStreams().getAudioTracks();\n            let tracks = [video[0], audio[0]];\n            this.recorder = new MediaStreamRecorder_1.MediaStreamRecorder(tracks);\n            this.recorder.start(10);\n            this.onRecordingStart();\n        }\n        else {\n            this.recorder.stop();\n            this.recorder.flush().then(this.onRecordingEnded);\n        }\n        this.isRecording = !this.isRecording;\n    }\n    /**\n     * Start / stop render video elements to canvas\n     *\n     * @param {number} fps\n     * @memberof MediaStreamBleder\n     */\n    render(fps) {\n        if (!this.isRendering) {\n            this.refreshCanvas();\n            this._handle = setInterval(() => {\n                Array.from(this.videosSources.values()).forEach((v, i) => {\n                    this.drawVideo(v.source, i);\n                });\n                // draw water mark, overlay ?\n                if (this.onFrameRendered)\n                    this.onFrameRendered(this.ctx);\n            }, 1000 / fps);\n        }\n        else {\n            this._handle = -1;\n            clearInterval(this._handle);\n        }\n        this.isRendering = !this.isRendering;\n    }\n}\nexports.MediaStreamBlender = MediaStreamBlender;\n\n\n//# sourceURL=webpack:///./src/MediaStreamBlender.js?");

/***/ }),

/***/ "./src/MediaStreamRecorder.js":
/*!************************************!*\
  !*** ./src/MediaStreamRecorder.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass MediaStreamRecorder {\n    constructor(tracks) {\n        this.tracks = tracks;\n        this.mediaStream = new MediaStream(tracks);\n        this.recorder = new MediaRecorder(this.mediaStream, {\n            mimeType: 'video/webm;codecs=vp9'\n        });\n        this.recorder.ondataavailable = (e) => {\n            if (e.data.size > 0)\n                this.data.push(e.data);\n        };\n    }\n    getBlobUrl() {\n        let blob = new Blob(this.data, {\n            type: 'video/webm'\n        });\n        return URL.createObjectURL(blob);\n    }\n    flush() {\n        return new Promise((resolve, reject) => {\n            resolve(this.getBlobUrl());\n            this.data = new Array();\n        });\n    }\n    stop() {\n        this.recorder.stop();\n    }\n    start(n) {\n        this.data = new Array();\n        this.recorder.start(n);\n    }\n}\nexports.MediaStreamRecorder = MediaStreamRecorder;\n\n\n//# sourceURL=webpack:///./src/MediaStreamRecorder.js?");

/***/ }),

/***/ "./src/StreamSource.js":
/*!*****************************!*\
  !*** ./src/StreamSource.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass StreamSource {\n    /**\n     *Creates an instance of StreamSource.\n     * @param {MediaStream} stream\n     * @param {*} source\n     * @param {boolean} isLocal\n     * @memberof StreamSource\n     */\n    constructor(stream, source, isLocal) {\n        this.stream = stream;\n        this.source = source;\n        this.isLocal = isLocal;\n    }\n}\nexports.StreamSource = StreamSource;\n\n\n//# sourceURL=webpack:///./src/StreamSource.js?");

/***/ }),

/***/ "./test/test.js":
/*!**********************!*\
  !*** ./test/test.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst MediaLoader_1 = __webpack_require__(/*! ../src/MediaLoader */ \"./src/MediaLoader.js\");\nconst MediaStreamBlender_1 = __webpack_require__(/*! ../src/MediaStreamBlender */ \"./src/MediaStreamBlender.js\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    // watermark image\n    let watermark = new Image();\n    watermark.src = \"logo.png\";\n    let p = new MediaStreamBlender_1.MediaStreamBlender(document.querySelector(\"canvas\"));\n    p.onFrameRendered = (ctx) => {\n        // post proocess , ad a watermrk\n        let x = 10;\n        let y = 10;\n        ctx.save();\n        ctx.filter = \"invert()\";\n        ctx.drawImage(watermark, x, y, 100, 100);\n        ctx.restore();\n    };\n    p.onTrack = () => {\n        p.refreshCanvas();\n        console.log(\"tracks added\");\n    };\n    p.onRecordingStart = () => {\n        console.log(\"stared recording\");\n    };\n    p.onRecordingEnded = (blobUrl) => {\n        const download = document.createElement(\"a\");\n        download.setAttribute(\"href\", blobUrl);\n        download.textContent = \"test.webm\";\n        download.setAttribute(\"download\", \"download.webm\");\n        download.click();\n    };\n    let audioPlayback = document.createElement('audio');\n    audioPlayback.controls = true;\n    audioPlayback.autoplay = true;\n    document.querySelector(\"body\").append(audioPlayback);\n    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream) => {\n        let tracks = mediaStream.getTracks();\n        // add a mp3\n        MediaLoader_1.MediaLoader.getAudioMediaStream(\"Bill Gates Commencement Speech 1.mp3\", (mediaStream) => {\n            p.addTracks(Math.random().toString(36).substring(6), mediaStream.getTracks(), false);\n        });\n        MediaLoader_1.MediaLoader.getAudioMediaStream(\"Pavane-for-a-dead-princess-piano.mp3\", (mediaStream) => {\n            p.addTracks(Math.random().toString(36).substring(6), mediaStream.getTracks(), false);\n        });\n        // add the captured video ( x 2 )\n        p.addTracks(Math.random().toString(36).substring(6), tracks, false);\n        p.addTracks(Math.random().toString(36).substring(6), tracks, true);\n        p.render(60);\n        //  get all remote audio tracks, and stream to a audio element\n        audioPlayback.srcObject = p.getRemoteAudioStream();\n    }).catch(err => {\n        console.error(err);\n    });\n    // expose API to window\n    window[\"mediaBlender\"] = p;\n});\n\n\n//# sourceURL=webpack:///./test/test.js?");

/***/ })

/******/ });