/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./example/src/blend.js":
/*!******************************!*\
  !*** ./example/src/blend.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.BlendExample = void 0;\r\nconst __1 = __webpack_require__(/*! ../.. */ \"./index.js\");\r\nclass BlendExample {\r\n    constructor() {\r\n        let canvas = document.createElement(\"canvas\"); // we just feed the result back to a video element \r\n        canvas.width = 1289;\r\n        canvas.height = 720;\r\n        this.blender = new __1.MediaStreamBlender();\r\n    }\r\n    addTracks(tracks) {\r\n        this.blender.addTracks((Math.random() + 1).toString(36).substring(7), tracks, true);\r\n    }\r\n    setMediaStream(videoEl) {\r\n        let ms = this.blender.captureStream(); // this can be used in  WebRTC - RTCPeerConnection \r\n        videoEl.srcObject = ms;\r\n    }\r\n}\r\nexports.BlendExample = BlendExample;\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const addScreenShareButton = document.querySelector(\"#add-screen-share\");\r\n    const b = new BlendExample();\r\n    navigator[\"getUserMedia\"]({ video: { width: 640, height: 360 }, audio: false }, (ms) => {\r\n        b.addTracks(ms.getTracks()); // add the webcam 640x360\r\n        // load a video 360p video\r\n        b.blender.addPIPStream(ms.getVideoTracks()[0]).then(r => {\r\n        });\r\n        addScreenShareButton.addEventListener(\"click\", () => {\r\n            const gdmOptions = { video: true,\r\n                audio: {\r\n                    echoCancellation: true,\r\n                    noiseSuppression: true,\r\n                    sampleRate: 44100\r\n                } };\r\n            navigator.mediaDevices.getDisplayMedia(gdmOptions).then((ms) => {\r\n                b.addTracks(ms.getVideoTracks());\r\n            });\r\n        });\r\n        __1.MediaLoader.loadVideos(\"assets/video1.webm\").then(v => {\r\n            b.blender.addVideoSource(\"video1\", v);\r\n            b.blender.refreshCanvas();\r\n        });\r\n        __1.MediaLoader.loadVideos(\"assets/video2.mp4\").then(v => {\r\n            b.blender.addVideoSource(\"video2\", v);\r\n            b.blender.refreshCanvas();\r\n        });\r\n        const layerA = {\r\n            id: \"Hello Box\",\r\n            fn: (time, canvas, ctx) => {\r\n                const c = \"#ff0000\";\r\n                ctx.fillStyle = c;\r\n                ctx.strokeStyle = c;\r\n                ctx.lineWidth = 10;\r\n                ctx.strokeRect(20, 20, 360 - 40, 360 - 40);\r\n                ctx.stroke();\r\n                ctx.font = \"70px 'Arial'\";\r\n                ctx.fillText(\"HELLO\", 60, 200);\r\n            },\r\n            visible: true\r\n        };\r\n        const layerB = {\r\n            id: \"bottom ribbon with text\",\r\n            fn: (time, canvas, ctx) => {\r\n                ctx.fillStyle = \"#ff0000a0\";\r\n                ctx.fillRect(0, canvas.height - 60, canvas.width / 2, 50);\r\n                ctx.fillStyle = \"#ffffff\";\r\n                ctx.font = \"30px 'Arial'\";\r\n                ctx.fillText(\"Change the world by being yourself\", 20, canvas.height - 25);\r\n            },\r\n            visible: true\r\n        };\r\n        b.blender.addOnScreenLayer(layerA);\r\n        b.blender.addOnScreenLayer(layerB);\r\n        b.setMediaStream(document.querySelector(\"video\"));\r\n        b.blender.render(25);\r\n    }, err => console.error(err));\r\n});\r\n\n\n//# sourceURL=webpack://mediastreamblender/./example/src/blend.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MediaLoader = exports.MediaStreamBlender = exports.MediaStreamRecorder = void 0;\r\nvar MediaStreamRecorder_1 = __webpack_require__(/*! ./src/MediaStreamRecorder */ \"./src/MediaStreamRecorder.js\");\r\nObject.defineProperty(exports, \"MediaStreamRecorder\", ({ enumerable: true, get: function () { return MediaStreamRecorder_1.MediaStreamRecorder; } }));\r\nvar MediaStreamBlender_1 = __webpack_require__(/*! ./src/MediaStreamBlender */ \"./src/MediaStreamBlender.js\");\r\nObject.defineProperty(exports, \"MediaStreamBlender\", ({ enumerable: true, get: function () { return MediaStreamBlender_1.MediaStreamBlender; } }));\r\nvar MediaLoader_1 = __webpack_require__(/*! ./src/MediaLoader */ \"./src/MediaLoader.js\");\r\nObject.defineProperty(exports, \"MediaLoader\", ({ enumerable: true, get: function () { return MediaLoader_1.MediaLoader; } }));\r\n\n\n//# sourceURL=webpack://mediastreamblender/./index.js?");

/***/ }),

/***/ "./node_modules/intrinsic-scale/dist/intrinsic-scale.common-js.js":
/*!************************************************************************!*\
  !*** ./node_modules/intrinsic-scale/dist/intrinsic-scale.common-js.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/*! npm.im/intrinsic-scale */\n\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nfunction fit(contains) {\n\treturn function (parentWidth, parentHeight, childWidth, childHeight) {\n\t\tvar doRatio = childWidth / childHeight;\n\t\tvar cRatio = parentWidth / parentHeight;\n\t\tvar width = parentWidth;\n\t\tvar height = parentHeight;\n\n\t\tif (contains ? (doRatio > cRatio) : (doRatio < cRatio)) {\n\t\t\theight = width / doRatio;\n\t\t} else {\n\t\t\twidth = height * doRatio;\n\t\t}\n\n\t\treturn {\n\t\t\twidth: width,\n\t\t\theight: height,\n\t\t\tx: (parentWidth - width) / 2,\n\t\t\ty: (parentHeight - height) / 2\n\t\t};\n\t};\n}\n\nvar contain = fit(true);\nvar cover = fit(false);\n\nexports.contain = contain;\nexports.cover = cover;\n\n//# sourceURL=webpack://mediastreamblender/./node_modules/intrinsic-scale/dist/intrinsic-scale.common-js.js?");

/***/ }),

/***/ "./src/MediaLoader.js":
/*!****************************!*\
  !*** ./src/MediaLoader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MediaLoader = void 0;\r\nclass MediaLoader {\r\n    static readFile(url) {\r\n        return new Promise((resolve, reject) => {\r\n            fetch(url).then((response) => {\r\n                resolve(response.blob());\r\n            }).catch(reject);\r\n        });\r\n    }\r\n    static getVideoMediaStream(url, callback) {\r\n        throw \"not yet implemented\"; // load and get the MediaStream of the video? Possible? Prolly yes.\r\n    }\r\n    static getAudioMediaStream(url, callback) {\r\n        this.readFile(url).then((blob) => {\r\n            var context = new AudioContext();\r\n            var gainNode = context.createGain();\r\n            gainNode.connect(context.destination);\r\n            gainNode.gain.value = 0; // don't play for self\r\n            let reader = new FileReader();\r\n            reader.onload = (function (e) {\r\n                context.decodeAudioData(e.target.result, createSoundSource);\r\n            });\r\n            reader.readAsArrayBuffer(blob);\r\n            const createSoundSource = (buffer) => {\r\n                let soundSource = context.createBufferSource();\r\n                soundSource.buffer = buffer;\r\n                soundSource.start(0, 0 / 1000);\r\n                soundSource.connect(gainNode);\r\n                let destination = context.createMediaStreamDestination();\r\n                soundSource.connect(destination);\r\n                callback(destination.stream);\r\n            };\r\n        });\r\n    }\r\n    /**\r\n     *\r\n     *\r\n     * @param {string[]} videoSorces\r\n     * @return {*}  {Promise<HTMLVideoElement>}\r\n     * @memberof MediaLoader\r\n     */\r\n    static loadVideos(videoSorces, w, h) {\r\n        return new Promise((resolve, reject) => {\r\n            let video = document.createElement(\"video\");\r\n            video.width = w | 640;\r\n            video.height = h | 360;\r\n            video.autoplay = true;\r\n            video.loop = true;\r\n            video.oncanplay = () => {\r\n                resolve(video);\r\n            };\r\n            video.onerror = (err) => {\r\n                reject(err);\r\n            };\r\n            video.src = videoSorces;\r\n        });\r\n    }\r\n}\r\nexports.MediaLoader = MediaLoader;\r\n\n\n//# sourceURL=webpack://mediastreamblender/./src/MediaLoader.js?");

/***/ }),

/***/ "./src/MediaStreamBlender.js":
/*!***********************************!*\
  !*** ./src/MediaStreamBlender.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MediaStreamBlender = void 0;\r\nconst MediaStreamRecorder_1 = __webpack_require__(/*! ./MediaStreamRecorder */ \"./src/MediaStreamRecorder.js\");\r\nconst TinyRenderer_1 = __webpack_require__(/*! ./TinyRenderer */ \"./src/TinyRenderer.js\");\r\nconst intrinsic_scale_1 = __webpack_require__(/*! intrinsic-scale */ \"./node_modules/intrinsic-scale/dist/intrinsic-scale.common-js.js\");\r\nclass MediaStreamBlender {\r\n    /**\r\n     * Creates an instance of MediaStreamBleder.\r\n     * @param {HTMLCanvasElement} [el]\r\n     * @memberof MediaStreamBleder\r\n     */\r\n    constructor(el) {\r\n        this.audioSources = new Map();\r\n        this.videosSources = new Map();\r\n        this.videosSources =\r\n            this.audioSources = new Map();\r\n        this.surface = el ? el : document.createElement(\"canvas\");\r\n        this.ctx = this.surface.getContext(\"2d\");\r\n        this.tinyRender = new TinyRenderer_1.Tiny2DRenderer(this.ctx);\r\n    }\r\n    /**\r\n     * Create a video element , add the track(s)\r\n     *\r\n     * @param {MediaStream} stream\r\n     * @returns {HTMLVideoElement}\r\n     * @memberof MediaStreamRenderer\r\n     */\r\n    createVideoFromStream(stream) {\r\n        const video = document.createElement('video');\r\n        video.srcObject = stream;\r\n        video.muted = true;\r\n        video.width = 640;\r\n        video.height = 360;\r\n        video.autoplay = true;\r\n        video.play();\r\n        return video;\r\n    }\r\n    /**\r\n     * Get a video stream from the canvas\r\n     *\r\n     * @returns MediaStream\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    captureStream() {\r\n        let stream = this.surface[\"captureStream\"]() || this.surface[\"mozCaptureStream\"]();\r\n        let videoStream = new MediaStream();\r\n        stream.getTracks().filter(function (t) {\r\n            return t.kind === 'video';\r\n        }).forEach(track => {\r\n            videoStream.addTrack(track);\r\n        });\r\n        return videoStream;\r\n    }\r\n    /**\r\n     * Add a background image to to surface\r\n     *\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    addBackgrouund() {\r\n        // do op \r\n    }\r\n    /**\r\n     * Add a video element from a HTMLVideoElement\r\n     *\r\n     * @param {string} id\r\n     * @param {HTMLVideoElement} vs\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    addVideoSource(id, vs) {\r\n        const sc = { source: vs, isLocal: true };\r\n        this.videosSources.set(id, sc);\r\n    }\r\n    /**\r\n     *  Add MediaStreamTracks\r\n     *\r\n     * @param {string} id\r\n     * @param {Array<MediaStreamTrack>} tracks\r\n     * @param {boolean} isLocal\r\n     * @returns {MediaStream}\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    addTracks(id, tracks, isLocal) {\r\n        const stream = new MediaStream();\r\n        tracks.forEach((track) => {\r\n            if (track.kind === \"video\") {\r\n                stream.addTrack(track);\r\n                let source = { stream, source: this.createVideoFromStream(stream), isLocal };\r\n                this.videosSources.set(id, source);\r\n            }\r\n            else {\r\n                if (!this.audioContext) {\r\n                    this.audioContext = new AudioContext();\r\n                    this.audioDestination = this.audioContext.createMediaStreamDestination();\r\n                }\r\n                stream.addTrack(track);\r\n                let audioSource = this.audioContext.createMediaStreamSource(stream);\r\n                let source = { stream, source: audioSource, isLocal };\r\n                if (!isLocal)\r\n                    audioSource.connect(this.audioDestination);\r\n                this.audioSources.set(id, source);\r\n            }\r\n            track.onended = () => {\r\n                if (this.onTrackEnded)\r\n                    this.onTrackEnded(id, track);\r\n            };\r\n        });\r\n        if (this.onTrack)\r\n            this.onTrack();\r\n        return stream;\r\n    }\r\n    /**\r\n     *  Refresh the canvas containg videos ( call after a new video is added )\r\n     *\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    refreshCanvas() {\r\n        const numOfVideos = this.videosSources.size;\r\n        let videoSource = Array.from(this.videosSources.values());\r\n        this.surface.width = numOfVideos > 1 ? videoSource[0].source.width * 2 : videoSource[0].source.width;\r\n        let height = 1;\r\n        if (numOfVideos === 3 || numOfVideos === 4) {\r\n            height = 2;\r\n        }\r\n        if (numOfVideos === 5 || numOfVideos === 6) {\r\n            height = 3;\r\n        }\r\n        if (numOfVideos === 7 || numOfVideos === 8) {\r\n            height = 4;\r\n        }\r\n        if (numOfVideos === 9 || numOfVideos === 10) {\r\n            height = 5;\r\n        }\r\n        this.surface.height = videoSource[0].source.height * height;\r\n    }\r\n    /**\r\n     * Get a MediaStream of all remote audio tracks ( not self )\r\n     *\r\n     * @returns\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    getRemoteAudioStream() {\r\n        this.audioDestination = this.audioContext.createMediaStreamDestination();\r\n        this.audioSources.forEach((_audioSource) => {\r\n            if (!_audioSource.isLocal) {\r\n                _audioSource.source.connect(this.audioDestination);\r\n            }\r\n        });\r\n        return this.audioDestination.stream;\r\n    }\r\n    /**\r\n     * Get a MediaStream containing all audio tracks\r\n     *\r\n     * @returns\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    getAllAudioStreams() {\r\n        this.audioDestination = this.audioContext.createMediaStreamDestination();\r\n        this.audioSources.forEach((_audioSource) => {\r\n            _audioSource.source.connect(this.audioDestination);\r\n        });\r\n        return this.audioDestination.stream;\r\n    }\r\n    /**\r\n     * Draw video element on th canvas\r\n     *\r\n     * @param {HTMLVideoElement} video\r\n     * @param {number} index\r\n     * @memberof MediaStreamRender\r\n     */\r\n    drawVideo(video, index) {\r\n        let x = 0;\r\n        let y = 0;\r\n        let width = video.width;\r\n        let height = video.height;\r\n        if (index === 1) {\r\n            x = video.width;\r\n        }\r\n        if (index === 2) {\r\n            y = video.height;\r\n        }\r\n        if (index === 3) {\r\n            x = video.width;\r\n            y = video.height;\r\n        }\r\n        if (index === 4) {\r\n            y = video.height * 2;\r\n        }\r\n        if (index === 5) {\r\n            x = video.width;\r\n            y = video.height * 2;\r\n        }\r\n        if (index === 6) {\r\n            y = video.height * 3;\r\n        }\r\n        if (index === 7) {\r\n            x = video.width;\r\n            y = video.height * 3;\r\n        }\r\n        this.ctx.drawImage(video, x, y, width, height);\r\n    }\r\n    /**\r\n     * Start/stop recorder\r\n     *\r\n     * @memberof MediaStreamBleder\r\n     */\r\n    record() {\r\n        if (!this.isRecording) {\r\n            let video = this.captureStream().getVideoTracks();\r\n            let audio = this.getAllAudioStreams().getAudioTracks();\r\n            let tracks = [video[0], audio[0]];\r\n            this.recorder = new MediaStreamRecorder_1.MediaStreamRecorder(tracks);\r\n            this.recorder.ondataavailable = this.onRecorderData;\r\n            this.recorder.start(500);\r\n            this.onRecordingStart();\r\n        }\r\n        else {\r\n            this.recorder.stop();\r\n            this.recorder.flush().then(this.onRecordingEnded);\r\n        }\r\n        this.isRecording = !this.isRecording;\r\n    }\r\n    /**\r\n     * Start / stop render video elements to canvas\r\n     *\r\n     * @param {number} fps\r\n     * @memberof MediaStreamBleder\r\n     */\r\n    render(fps) {\r\n        if (!this.isRendering) {\r\n            this.refreshCanvas();\r\n            this.addBackgrouund();\r\n            this._handle = setInterval(() => {\r\n                Array.from(this.videosSources.values()).forEach((v, i) => {\r\n                    this.drawVideo(v.source, i);\r\n                });\r\n                // add a pipVideo of avalibale\r\n                this.tinyRender.renderLayers(this._handle);\r\n                if (this.pipVideo) {\r\n                    this.ctx.drawImage(this.pipVideo, this.pipContainer.x + 10, this.pipContainer.y, this.pipContainer.width, this.pipContainer.height);\r\n                }\r\n                if (this.onFrameRendered)\r\n                    this.onFrameRendered(this.ctx);\r\n            }, 1000 / fps);\r\n        }\r\n        else {\r\n            clearInterval(this._handle);\r\n            this._handle = -1;\r\n        }\r\n        this.isRendering = !this.isRendering;\r\n    }\r\n    /**\r\n     * Add an on screen display later to surface\r\n     *\r\n     * @param {ILayer} layer\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    addOnScreenLayer(layer) {\r\n        this.tinyRender.addLayer(layer);\r\n    }\r\n    /**\r\n     * Add an array of layers to the surface\r\n     *\r\n     * @param {ILayer[]} layers\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    addOnScreenLayers(layers) {\r\n        layers.forEach(layer => this.tinyRender.addLayer(layer));\r\n    }\r\n    /**\r\n     * Add a picture in picture video element (top left corner )\r\n     *\r\n     * @param {MediaStreamTrack} mediaStreamTrack\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    addPIPStream(mediaStreamTrack) {\r\n        return new Promise((resolve, reject) => {\r\n            if (mediaStreamTrack.kind !== \"video\")\r\n                throw \"mediaStreamTrack provided is not of kind video \";\r\n            const pipVideo = document.createElement(\"video\");\r\n            pipVideo.width = 640;\r\n            pipVideo.height = 360;\r\n            pipVideo.autoplay = true;\r\n            pipVideo.oncanplay = () => {\r\n                this.pipContainer = intrinsic_scale_1.contain(100, 100, pipVideo.width, pipVideo.height);\r\n                resolve(pipVideo);\r\n            };\r\n            pipVideo.onerror = (err) => reject(err);\r\n            pipVideo.srcObject = new MediaStream([mediaStreamTrack]);\r\n            this.pipVideo = pipVideo;\r\n        });\r\n    }\r\n    /**\r\n     * Set the visibillity of the layer\r\n     *\r\n     * @param {string} layerId\r\n     * @param {boolean} visible\r\n     * @return {*}  {ILayer}\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    setLayerVisibility(layerId, visible) {\r\n        const layer = this.tinyRender.layers.get(layerId);\r\n        layer.visible = visible;\r\n        return layer;\r\n    }\r\n}\r\nexports.MediaStreamBlender = MediaStreamBlender;\r\n\n\n//# sourceURL=webpack://mediastreamblender/./src/MediaStreamBlender.js?");

/***/ }),

/***/ "./src/MediaStreamRecorder.js":
/*!************************************!*\
  !*** ./src/MediaStreamRecorder.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MediaStreamRecorder = void 0;\r\n// tod: define a set of modes\r\nclass MediaStreamRecorder {\r\n    /**\r\n     *Creates an instance of MediaStreamRecorder.\r\n     * @param {Array<MediaStreamTrack>} tracks\r\n     * @memberof MediaStreamRecorder\r\n     */\r\n    constructor(tracks) {\r\n        this.tracks = tracks;\r\n        this.mediaStream = new MediaStream(tracks);\r\n        this.recorder = new MediaRecorder(this.mediaStream, { mimeType: 'video/webm; codecs=\"opus,vp8\"' });\r\n        this.recorder.ondataavailable = (e) => {\r\n            if (e.data.size > 0) {\r\n                if (this.ondataavailable) {\r\n                    this.ondataavailable(e.data);\r\n                }\r\n                else {\r\n                    this.data.push(e.data);\r\n                }\r\n            }\r\n        };\r\n    }\r\n    /**\r\n     * Get a BlobURL from data\r\n     *\r\n     * @returns {string}\r\n     * @memberof MediaStreamRecorder\r\n     */\r\n    getBlobUrl() {\r\n        let blob = new Blob(this.data, {\r\n            type: 'video/webm; codecs=\"vp8\"'\r\n        });\r\n        return URL.createObjectURL(blob);\r\n    }\r\n    /**\r\n     * Get recorded data as Blob\r\n     *\r\n     * @returns {Blob}\r\n     * @memberof MediaStreamRecorder\r\n     */\r\n    getBlob() {\r\n        let blob = new Blob(this.data, {\r\n            type: 'video/webm'\r\n        });\r\n        return blob;\r\n    }\r\n    getParts() {\r\n        let blob = new Blob([this.data[0]], {\r\n            type: 'video/webm'\r\n        });\r\n        return blob;\r\n    }\r\n    /**\r\n     * Flush data buffer and get recorded data (blob)\r\n     *\r\n     * @returns {Promise<string>}\r\n     * @memberof MediaStreamRecorder\r\n     */\r\n    flush() {\r\n        return new Promise((resolve, reject) => {\r\n            resolve(this.getBlobUrl());\r\n            this.data = new Array();\r\n        });\r\n    }\r\n    /**\r\n     * Stop recording\r\n     *\r\n     * @memberof MediaStreamRecorder\r\n     */\r\n    stop() {\r\n        this.recorder.stop();\r\n    }\r\n    /**\r\n     * Start recording\r\n     *\r\n     * @param {number} n\r\n     * @memberof MediaStreamRecorder\r\n     */\r\n    start(n) {\r\n        this.data = new Array();\r\n        this.recorder.start(n);\r\n    }\r\n}\r\nexports.MediaStreamRecorder = MediaStreamRecorder;\r\n\n\n//# sourceURL=webpack://mediastreamblender/./src/MediaStreamRecorder.js?");

/***/ }),

/***/ "./src/TinyRenderer.js":
/*!*****************************!*\
  !*** ./src/TinyRenderer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Tiny2DRenderer = void 0;\r\n/**\r\n *\r\n *\r\n * @export\r\n * @class Tiny2DRenderer\r\n */\r\nclass Tiny2DRenderer {\r\n    constructor(ctx) {\r\n        this.ctx = ctx;\r\n        this.layers = new Map();\r\n        this.canvas = ctx.canvas;\r\n    }\r\n    /**\r\n     *\r\n     *\r\n     * @return {*}  {string}\r\n     * @memberof Tiny2DRenderer\r\n     */\r\n    toBase64() {\r\n        return this.canvas.toDataURL(\"image/png\", 1.0);\r\n    }\r\n    /**\r\n     *\r\n     *\r\n     * @param {string} key\r\n     * @memberof Tiny2DRenderer\r\n     */\r\n    deleteLayer(key) {\r\n        this.layers.delete(key);\r\n    }\r\n    /**\r\n     *\r\n     *\r\n     * @param {ILayer} layer\r\n     * @memberof Tiny2DRenderer\r\n     */\r\n    addLayer(layer) {\r\n        this.layers.set(layer.id, layer);\r\n    }\r\n    /**\r\n     *\r\n     *\r\n     * @param {number} t\r\n     * @param {string} [pre]\r\n     * @return {*}  {Tiny2DRenderer}\r\n     * @memberof Tiny2DRenderer\r\n     */\r\n    renderLayers(t, pre) {\r\n        if (!pre) {\r\n            this.layers.forEach((v) => {\r\n                if (v.visible)\r\n                    v.fn(t, this.canvas, this.ctx);\r\n            });\r\n        }\r\n        else {\r\n            let layer = this.layers.get(pre);\r\n            if (layer.visible)\r\n                layer.fn(t, this.canvas, this.ctx);\r\n        }\r\n        return this;\r\n    }\r\n}\r\nexports.Tiny2DRenderer = Tiny2DRenderer;\r\n\n\n//# sourceURL=webpack://mediastreamblender/./src/TinyRenderer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./example/src/blend.js");
/******/ 	
/******/ })()
;