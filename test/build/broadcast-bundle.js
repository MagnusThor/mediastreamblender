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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/sender.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar MediaStreamRecorder_1 = __webpack_require__(/*! ./src/MediaStreamRecorder */ \"./src/MediaStreamRecorder.js\");\r\nexports.MediaStreamRecorder = MediaStreamRecorder_1.MediaStreamRecorder;\r\nvar MediaStreamBlender_1 = __webpack_require__(/*! ./src/MediaStreamBlender */ \"./src/MediaStreamBlender.js\");\r\nexports.MediaStreamBlender = MediaStreamBlender_1.MediaStreamBlender;\r\nvar MediaLoader_1 = __webpack_require__(/*! ./src/MediaLoader */ \"./src/MediaLoader.js\");\r\nexports.MediaLoader = MediaLoader_1.MediaLoader;\r\nvar StreamSource_1 = __webpack_require__(/*! ./src/StreamSource */ \"./src/StreamSource.js\");\r\nexports.StreamSource = StreamSource_1.StreamSource;\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/index.js":
/*!****************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BandwidthConstraints_1 = __webpack_require__(/*! ./src/WebRTC/BandwidthConstraints */ \"./node_modules/thor-io.client-vnext/src/WebRTC/BandwidthConstraints.js\");\nexports.BandwidthConstraints = BandwidthConstraints_1.BandwidthConstraints;\nvar BinaryMessage_1 = __webpack_require__(/*! ./src/Messages/BinaryMessage */ \"./node_modules/thor-io.client-vnext/src/Messages/BinaryMessage.js\");\nexports.BinaryMessage = BinaryMessage_1.BinaryMessage;\nvar DataChannel_1 = __webpack_require__(/*! ./src/WebRTC/DataChannel */ \"./node_modules/thor-io.client-vnext/src/WebRTC/DataChannel.js\");\nexports.DataChannel = DataChannel_1.DataChannel;\nvar Factory_1 = __webpack_require__(/*! ./src/Factory */ \"./node_modules/thor-io.client-vnext/src/Factory.js\");\nexports.Factory = Factory_1.Factory;\nvar TextMessage_1 = __webpack_require__(/*! ./src/Messages/TextMessage */ \"./node_modules/thor-io.client-vnext/src/Messages/TextMessage.js\");\nexports.Message = TextMessage_1.TextMessage;\nvar Listener_1 = __webpack_require__(/*! ./src/Listener */ \"./node_modules/thor-io.client-vnext/src/Listener.js\");\nexports.Listener = Listener_1.Listener;\nvar PeerChannel_1 = __webpack_require__(/*! ./src/WebRTC/PeerChannel */ \"./node_modules/thor-io.client-vnext/src/WebRTC/PeerChannel.js\");\nexports.PeerChannel = PeerChannel_1.PeerChannel;\nvar PropertyMessage_1 = __webpack_require__(/*! ./src/Messages/PropertyMessage */ \"./node_modules/thor-io.client-vnext/src/Messages/PropertyMessage.js\");\nexports.PropertyMessage = PropertyMessage_1.PropertyMessage;\nvar Controller_1 = __webpack_require__(/*! ./src/Controller */ \"./node_modules/thor-io.client-vnext/src/Controller.js\");\nexports.Proxy = Controller_1.Controller;\nvar Utils_1 = __webpack_require__(/*! ./src/Utils/Utils */ \"./node_modules/thor-io.client-vnext/src/Utils/Utils.js\");\nexports.Utils = Utils_1.Utils;\nvar WebRTC_1 = __webpack_require__(/*! ./src/WebRTC/WebRTC */ \"./node_modules/thor-io.client-vnext/src/WebRTC/WebRTC.js\");\nexports.WebRTC = WebRTC_1.WebRTC;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/index.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/src/Controller.js":
/*!*************************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/src/Controller.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TextMessage_1 = __webpack_require__(/*! ./Messages/TextMessage */ \"./node_modules/thor-io.client-vnext/src/Messages/TextMessage.js\");\nvar Listener_1 = __webpack_require__(/*! ./Listener */ \"./node_modules/thor-io.client-vnext/src/Listener.js\");\nvar Controller = (function () {\n    function Controller(alias, ws) {\n        var _this = this;\n        this.alias = alias;\n        this.ws = ws;\n        this.listeners = new Map();\n        this.IsConnected = false;\n        this.On(\"___error\", function (err) {\n            _this.OnError(err);\n        });\n    }\n    Controller.prototype.OnError = function (event) { };\n    Controller.prototype.OnOpen = function (event) { };\n    Controller.prototype.OnClose = function (event) { };\n    Controller.prototype.Connect = function () {\n        this.ws.send(new TextMessage_1.TextMessage(\"___connect\", {}, this.alias, null, null, true).toString());\n        return this;\n    };\n    ;\n    Controller.prototype.Close = function () {\n        this.ws.send(new TextMessage_1.TextMessage(\"___close\", {}, this.alias, null, null, true).toString());\n        return this;\n    };\n    ;\n    Controller.prototype.Subscribe = function (topic, callback) {\n        this.ws.send(new TextMessage_1.TextMessage(\"___subscribe\", {\n            topic: topic,\n            controller: this.alias\n        }, this.alias).toString());\n        return this.On(topic, callback);\n    };\n    Controller.prototype.Unsubscribe = function (topic) {\n        this.ws.send(new TextMessage_1.TextMessage(\"___unsubscribe\", {\n            topic: topic,\n            controller: this.alias\n        }, this.alias).toString());\n    };\n    Controller.prototype.On = function (topic, fn) {\n        var listener = new Listener_1.Listener(topic, fn);\n        this.listeners.set(topic, listener);\n        return listener;\n    };\n    Controller.prototype.Off = function (topic) {\n        this.listeners.delete(topic);\n    };\n    Controller.prototype.findListener = function (topic) {\n        return this.listeners.get(topic);\n    };\n    Controller.prototype.InvokeBinary = function (buffer) {\n        if (buffer instanceof ArrayBuffer) {\n            this.ws.send(buffer);\n            return this;\n        }\n        else {\n            throw (\"parameter provided must be an ArrayBuffer constructed by Client.BinaryMessage\");\n        }\n    };\n    Controller.prototype.PublishBinary = function (buffer) {\n        if (buffer instanceof ArrayBuffer) {\n            this.ws.send(buffer);\n            return this;\n        }\n        else {\n            throw (\"parameter provided must be an ArrayBuffer constructed by Client.BinaryMessage\");\n        }\n    };\n    Controller.prototype.Invoke = function (method, data, controller) {\n        this.ws.send(new TextMessage_1.TextMessage(method, data, controller || this.alias, null, null, true).toString());\n        return this;\n    };\n    Controller.prototype.Publish = function (topic, data, controller) {\n        this.Invoke(topic, data, controller || this.alias);\n        return this;\n    };\n    Controller.prototype.SetProperty = function (propName, propValue, controller) {\n        this.Invoke(propName, propValue, controller || this.alias);\n        return this;\n    };\n    Controller.prototype.Dispatch = function (topic, data, buffer) {\n        if (topic === \"___open\") {\n            this.IsConnected = true;\n            this.OnOpen(JSON.parse(data));\n            return;\n        }\n        else if (topic === \"___close\") {\n            this.OnClose([JSON.parse(data)]);\n            this.IsConnected = false;\n        }\n        else {\n            var listener = this.findListener(topic);\n            if (listener)\n                listener.fn(JSON.parse(data), buffer);\n        }\n    };\n    return Controller;\n}());\nexports.Controller = Controller;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/src/Controller.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/src/DataChannels/DataChannelListner.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/src/DataChannels/DataChannelListner.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Listener_1 = __webpack_require__(/*! ../Listener */ \"./node_modules/thor-io.client-vnext/src/Listener.js\");\nvar DataChannelListner = (function (_super) {\n    __extends(DataChannelListner, _super);\n    function DataChannelListner(channelName, topic, fn) {\n        var _this = _super.call(this, topic, fn) || this;\n        _this.channelName = channelName;\n        _this.count = 0;\n        return _this;\n    }\n    return DataChannelListner;\n}(Listener_1.Listener));\nexports.DataChannelListner = DataChannelListner;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/src/DataChannels/DataChannelListner.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/src/Factory.js":
/*!**********************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/src/Factory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BinaryMessage_1 = __webpack_require__(/*! ./Messages/BinaryMessage */ \"./node_modules/thor-io.client-vnext/src/Messages/BinaryMessage.js\");\nvar Controller_1 = __webpack_require__(/*! ./Controller */ \"./node_modules/thor-io.client-vnext/src/Controller.js\");\nvar Factory = (function () {\n    function Factory(url, controllers, params) {\n        var _this = this;\n        this.url = url;\n        this.controllers = new Map();\n        this.ws = new WebSocket(url + this.toQuery(params || {}));\n        this.ws.binaryType = \"arraybuffer\";\n        controllers.forEach(function (alias) {\n            _this.controllers.set(alias, new Controller_1.Controller(alias, _this.ws));\n        });\n        this.ws.onmessage = function (event) {\n            if (typeof (event.data) !== \"object\") {\n                var message = JSON.parse(event.data);\n                _this.GetController(message.C).Dispatch(message.T, message.D);\n            }\n            else {\n                var message = BinaryMessage_1.BinaryMessage.fromArrayBuffer(event.data);\n                _this.GetController(message.C).Dispatch(message.T, message.D, message.B);\n            }\n        };\n        this.ws.onclose = function (event) {\n            _this.IsConnected = false;\n            _this.OnClose.apply(_this, [event]);\n        };\n        this.ws.onerror = function (error) {\n            _this.OnError.apply(_this, [error]);\n        };\n        this.ws.onopen = function (event) {\n            _this.IsConnected = true;\n            _this.OnOpen.apply(_this, Array.from(_this.controllers.values()));\n        };\n    }\n    Factory.prototype.toQuery = function (obj) {\n        return \"?\" + Object.keys(obj).map(function (key) { return (encodeURIComponent(key) + \"=\" +\n            encodeURIComponent(obj[key])); }).join(\"&\");\n    };\n    Factory.prototype.Close = function () {\n        this.ws.close();\n    };\n    Factory.prototype.GetController = function (alias) {\n        return this.controllers.get(alias);\n    };\n    Factory.prototype.RemoveController = function (alias) {\n        this.controllers.delete(alias);\n    };\n    Factory.prototype.OnOpen = function (controllers) { };\n    Factory.prototype.OnError = function (error) { };\n    Factory.prototype.OnClose = function (event) { };\n    return Factory;\n}());\nexports.Factory = Factory;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/src/Factory.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/src/Listener.js":
/*!***********************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/src/Listener.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Listener = (function () {\n    function Listener(topic, fn) {\n        this.fn = fn;\n        this.topic = topic;\n        this.count = 0;\n    }\n    return Listener;\n}());\nexports.Listener = Listener;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/src/Listener.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/src/Messages/BinaryMessage.js":
/*!*************************************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/src/Messages/BinaryMessage.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Utils_1 = __webpack_require__(/*! ../Utils/Utils */ \"./node_modules/thor-io.client-vnext/src/Utils/Utils.js\");\nvar TextMessage_1 = __webpack_require__(/*! ./TextMessage */ \"./node_modules/thor-io.client-vnext/src/Messages/TextMessage.js\");\nvar BinaryMessage = (function () {\n    function BinaryMessage(message, arrayBuffer) {\n        this.arrayBuffer = arrayBuffer;\n        this.header = new Uint8Array(Utils_1.Utils.longToArray(message.length));\n        this.Buffer = Utils_1.Utils.joinBuffers(Utils_1.Utils.joinBuffers(this.header.buffer, Utils_1.Utils.stingToBuffer(message).buffer), arrayBuffer);\n    }\n    BinaryMessage.fromArrayBuffer = function (buffer) {\n        var bytes = new Uint8Array(buffer);\n        var header = bytes.slice(0, 8);\n        var payloadLength = Utils_1.Utils.arrayToLong(header);\n        var start = header.byteLength + payloadLength;\n        var bytesMessage = bytes.slice(header.byteLength, start);\n        var stop = buffer.byteLength;\n        var messageBuffer = bytes.slice(start, stop);\n        var textMessage = String.fromCharCode.apply(null, new Uint16Array(bytesMessage));\n        var message = JSON.parse(textMessage);\n        return new TextMessage_1.TextMessage(message.T, message.D, message.C, messageBuffer, message.I, message.F);\n    };\n    return BinaryMessage;\n}());\nexports.BinaryMessage = BinaryMessage;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/src/Messages/BinaryMessage.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/src/Messages/PropertyMessage.js":
/*!***************************************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/src/Messages/PropertyMessage.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Utils_1 = __webpack_require__(/*! ../Utils/Utils */ \"./node_modules/thor-io.client-vnext/src/Utils/Utils.js\");\nvar PropertyMessage = (function () {\n    function PropertyMessage() {\n        this.messageId = Utils_1.Utils.newGuid();\n    }\n    return PropertyMessage;\n}());\nexports.PropertyMessage = PropertyMessage;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/src/Messages/PropertyMessage.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/src/Messages/TextMessage.js":
/*!***********************************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/src/Messages/TextMessage.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BinaryMessage_1 = __webpack_require__(/*! ./BinaryMessage */ \"./node_modules/thor-io.client-vnext/src/Messages/BinaryMessage.js\");\nvar Utils_1 = __webpack_require__(/*! ../Utils/Utils */ \"./node_modules/thor-io.client-vnext/src/Utils/Utils.js\");\nvar TextMessage = (function () {\n    function TextMessage(topic, object, controller, buffer, uuid, isFinal) {\n        this.D = object;\n        this.T = topic;\n        this.C = controller;\n        this.B = buffer;\n        this.I = uuid || Utils_1.Utils.newGuid();\n        this.F = isFinal;\n    }\n    Object.defineProperty(TextMessage.prototype, \"JSON\", {\n        get: function () {\n            return {\n                T: this.T,\n                D: JSON.stringify(this.D),\n                C: this.C,\n                I: this.I,\n                F: this.F\n            };\n        },\n        enumerable: true,\n        configurable: true\n    });\n    TextMessage.prototype.toString = function () {\n        return JSON.stringify(this.JSON);\n    };\n    TextMessage.fromArrayBuffer = function (buffer) {\n        return BinaryMessage_1.BinaryMessage.fromArrayBuffer(buffer);\n    };\n    return TextMessage;\n}());\nexports.TextMessage = TextMessage;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/src/Messages/TextMessage.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/src/Utils/Utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/src/Utils/Utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Utils = (function () {\n    function Utils() {\n    }\n    Utils.stingToBuffer = function (str) {\n        var len = str.length;\n        var arr = new Array(len);\n        for (var i = 0; i < len; i++) {\n            arr[i] = str.charCodeAt(i) & 0xFF;\n        }\n        return new Uint8Array(arr);\n    };\n    Utils.arrayToLong = function (byteArray) {\n        var value = 0;\n        var byteLength = byteArray.byteLength;\n        for (var i = byteLength - 1; i >= 0; i--) {\n            value = (value * 256) + byteArray[i];\n        }\n        return value;\n    };\n    Utils.longToArray = function (long) {\n        var byteArray = new Uint8Array(8);\n        var byteLength = byteArray.length;\n        for (var index = 0; index < byteLength; index++) {\n            var byte = long & 0xff;\n            byteArray[index] = byte;\n            long = (long - byte) / 256;\n        }\n        return byteArray;\n    };\n    Utils.newGuid = function () {\n        var s4 = function () {\n            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);\n        };\n        return s4() + s4() + \"-\" + s4() + \"-\" + s4() + \"-\" + s4() + \"-\" + s4() + s4() + s4();\n    };\n    Utils.newRandomString = function (length) {\n        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);\n    };\n    Utils.joinBuffers = function (a, b) {\n        var newBuffer = new Uint8Array(a.byteLength + b.byteLength);\n        newBuffer.set(new Uint8Array(a), 0);\n        newBuffer.set(new Uint8Array(b), a.byteLength);\n        return newBuffer.buffer;\n    };\n    return Utils;\n}());\nexports.Utils = Utils;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/src/Utils/Utils.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/src/WebRTC/BandwidthConstraints.js":
/*!******************************************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/src/WebRTC/BandwidthConstraints.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BandwidthConstraints = (function () {\n    function BandwidthConstraints(videobandwidth, audiobandwidth) {\n        this.videobandwidth = videobandwidth;\n        this.audiobandwidth = audiobandwidth;\n    }\n    return BandwidthConstraints;\n}());\nexports.BandwidthConstraints = BandwidthConstraints;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/src/WebRTC/BandwidthConstraints.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/src/WebRTC/DataChannel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/src/WebRTC/DataChannel.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TextMessage_1 = __webpack_require__(/*! ../Messages/TextMessage */ \"./node_modules/thor-io.client-vnext/src/Messages/TextMessage.js\");\nvar DataChannelListner_1 = __webpack_require__(/*! ../DataChannels/DataChannelListner */ \"./node_modules/thor-io.client-vnext/src/DataChannels/DataChannelListner.js\");\nvar BinaryMessage_1 = __webpack_require__(/*! ../Messages/BinaryMessage */ \"./node_modules/thor-io.client-vnext/src/Messages/BinaryMessage.js\");\nvar Utils_1 = __webpack_require__(/*! ../Utils/Utils */ \"./node_modules/thor-io.client-vnext/src/Utils/Utils.js\");\nvar DataChannel = (function () {\n    function DataChannel(label, listeners) {\n        this.Listners = listeners || new Map();\n        this.PeerChannels = new Map();\n        this.label = label;\n        this.messageFragments = new Map();\n    }\n    DataChannel.prototype.findListener = function (topic) {\n        var _this = this;\n        var listener = Array.from(this.Listners.values()).find(function (pre) {\n            return pre.channelName === _this.label && pre.topic === topic;\n        });\n        return listener;\n    };\n    DataChannel.prototype.On = function (topic, fn) {\n        var listener = new DataChannelListner_1.DataChannelListner(this.label, topic, fn);\n        this.Listners.set(topic, listener);\n        return listener;\n    };\n    DataChannel.prototype.Off = function (topic) {\n        return this.Listners.delete(topic);\n    };\n    DataChannel.prototype.OnOpen = function (event, peerId, name) { };\n    DataChannel.prototype.OnClose = function (event, peerId, name) { };\n    DataChannel.prototype.addMessageFragment = function (message) {\n        if (!this.messageFragments.has(message.I)) {\n            var data = { msg: message, receiveBuffer: new ArrayBuffer(0) };\n            data.receiveBuffer = Utils_1.Utils.joinBuffers(data.receiveBuffer, message.B);\n            this.messageFragments.set(message.I, data);\n        }\n        else {\n            var current = this.messageFragments.get(message.I);\n            current.receiveBuffer = Utils_1.Utils.joinBuffers(current.receiveBuffer, message.B);\n        }\n        if (message.F) {\n            var result = this.messageFragments.get(message.I);\n            result.msg.B = result.receiveBuffer;\n            this.dispatchMessage(result.msg);\n            this.messageFragments.delete(message.I);\n        }\n        message.B = new ArrayBuffer(0);\n    };\n    DataChannel.prototype.dispatchMessage = function (msg) {\n        var listener = this.findListener(msg.T);\n        listener && listener.fn.apply(this, [JSON.parse(msg.D), msg.B]);\n    };\n    DataChannel.prototype.onMessage = function (event) {\n        var isBinary = typeof (event.data) !== \"string\";\n        if (isBinary) {\n            this.addMessageFragment(BinaryMessage_1.BinaryMessage.fromArrayBuffer(event.data));\n        }\n        else {\n            this.dispatchMessage(JSON.parse(event.data));\n        }\n    };\n    DataChannel.prototype.Close = function (name) {\n        var _this = this;\n        this.PeerChannels.forEach(function (pc) {\n            if (pc.dataChannel.label === name || _this.label)\n                pc.dataChannel.close();\n        });\n    };\n    DataChannel.prototype.Invoke = function (topic, data, isFinal, uuid) {\n        var _this = this;\n        this.PeerChannels.forEach(function (channel) {\n            if (channel.dataChannel.readyState === \"open\" && channel.label === _this.label) {\n                channel.dataChannel.send(new TextMessage_1.TextMessage(topic, data, channel.label, null, uuid, isFinal).toString());\n            }\n        });\n        return this;\n    };\n    DataChannel.prototype.InvokeBinary = function (topic, data, arrayBuffer, isFinal, uuid) {\n        var _this = this;\n        var m = new TextMessage_1.TextMessage(topic, data, this.label, null, uuid, isFinal);\n        var message = new BinaryMessage_1.BinaryMessage(m.toString(), arrayBuffer);\n        this.PeerChannels.forEach(function (channel) {\n            if (channel.dataChannel.readyState === \"open\" && channel.label === _this.label) {\n                channel.dataChannel.send(message.Buffer);\n            }\n        });\n        return this;\n    };\n    DataChannel.prototype.addPeerChannel = function (pc) {\n        this.PeerChannels.set({\n            id: pc.peerId, name: pc.label\n        }, pc);\n    };\n    DataChannel.prototype.removePeerChannel = function (id) {\n        return this.PeerChannels.delete({ id: id, name: this.label });\n    };\n    return DataChannel;\n}());\nexports.DataChannel = DataChannel;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/src/WebRTC/DataChannel.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/src/WebRTC/PeerChannel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/src/WebRTC/PeerChannel.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar PeerChannel = (function () {\n    function PeerChannel(peerId, dataChannel, label) {\n        this.peerId = peerId;\n        this.dataChannel = dataChannel;\n        this.label = label;\n    }\n    return PeerChannel;\n}());\nexports.PeerChannel = PeerChannel;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/src/WebRTC/PeerChannel.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/src/WebRTC/WebRTC.js":
/*!****************************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/src/WebRTC/WebRTC.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar WebRTCConnection_1 = __webpack_require__(/*! ./WebRTCConnection */ \"./node_modules/thor-io.client-vnext/src/WebRTC/WebRTCConnection.js\");\nvar PeerChannel_1 = __webpack_require__(/*! ./PeerChannel */ \"./node_modules/thor-io.client-vnext/src/WebRTC/PeerChannel.js\");\nvar DataChannel_1 = __webpack_require__(/*! ./DataChannel */ \"./node_modules/thor-io.client-vnext/src/WebRTC/DataChannel.js\");\nvar BandwidthConstraints_1 = __webpack_require__(/*! ./BandwidthConstraints */ \"./node_modules/thor-io.client-vnext/src/WebRTC/BandwidthConstraints.js\");\nvar WebRTC = (function () {\n    function WebRTC(brokerController, rtcConfig) {\n        var _this = this;\n        this.brokerController = brokerController;\n        this.rtcConfig = rtcConfig;\n        this.Errors = new Array();\n        this.LocalStreams = new Array();\n        this.DataChannels = new Map();\n        this.Peers = new Map();\n        this.brokerController.On(\"contextSignal\", function (signal) {\n            var msg = JSON.parse(signal.message);\n            switch (msg.type) {\n                case \"offer\":\n                    _this.onOffer(signal, signal.skipLocalTracks || false);\n                    break;\n                case \"answer\":\n                    _this.onAnswer(signal);\n                    break;\n                case \"candidate\":\n                    _this.onCandidate(signal);\n                    break;\n            }\n        });\n        brokerController.On(\"contextCreated\", function (peer) {\n            _this.LocalPeerId = peer.peerId;\n            _this.Context = peer.context;\n            _this.OnContextCreated(peer);\n        });\n        brokerController.On(\"contextChanged\", function (context) {\n            _this.Context = context;\n            _this.OnContextChanged(context);\n        });\n        brokerController.On(\"connectTo\", function (peers) {\n            _this.onConnectTo(peers);\n        });\n    }\n    WebRTC.prototype.onConnectTo = function (peerConnections) {\n        this.Connect(peerConnections);\n    };\n    WebRTC.prototype.onConnected = function (peerId) {\n        if (this.OnContextConnected)\n            this.OnContextConnected(this.findPeerConnection(peerId), this.getPeerConnection(peerId));\n    };\n    WebRTC.prototype.OnDisconnected = function (peerId) {\n        var peerConnection = this.getPeerConnection(peerId);\n        if (this.OnContextDisconnected)\n            this.OnContextDisconnected(this.findPeerConnection(peerId), peerConnection);\n        peerConnection.close();\n        this.removePeerConnection(peerId);\n    };\n    WebRTC.prototype.addTrackToPeers = function (track) {\n        var _this = this;\n        Array.from((this.Peers.values())).forEach(function (p) {\n            var pc = p.RTCPeer;\n            pc.onnegotiationneeded = function (e) {\n                pc.createOffer()\n                    .then(function (offer) { return pc.setLocalDescription(offer); })\n                    .then(function () {\n                    var offer = {\n                        sender: _this.LocalPeerId,\n                        recipient: p.id,\n                        message: JSON.stringify(pc.localDescription),\n                        skipLocalTracks: true\n                    };\n                    _this.brokerController.Invoke(\"contextSignal\", offer);\n                });\n            };\n            p.RTCPeer.addTrack(track);\n        });\n    };\n    WebRTC.prototype.setBandwithConstraints = function (videobandwidth, audiobandwidth) {\n        this.bandwidthConstraints = new BandwidthConstraints_1.BandwidthConstraints(videobandwidth, audiobandwidth);\n    };\n    WebRTC.prototype.setMediaBitrates = function (sdp) {\n        return this.setMediaBitrate(this.setMediaBitrate(sdp, \"video\", this.bandwidthConstraints.videobandwidth), \"audio\", this.bandwidthConstraints.audiobandwidth);\n    };\n    WebRTC.prototype.setMediaBitrate = function (sdp, media, bitrate) {\n        var lines = sdp.split(\"\\n\");\n        var line = -1;\n        for (var i = 0; i < lines.length; i++) {\n            if (lines[i].indexOf(\"m=\" + media) === 0) {\n                line = i;\n                break;\n            }\n        }\n        if (line === -1) {\n            return sdp;\n        }\n        line++;\n        while (lines[line].indexOf(\"i=\") === 0 || lines[line].indexOf(\"c=\") === 0) {\n            line++;\n        }\n        if (lines[line].indexOf(\"b\") === 0) {\n            lines[line] = \"b=AS:\" + bitrate;\n            return lines.join(\"\\n\");\n        }\n        var newLines = lines.slice(0, line);\n        newLines.push(\"b=AS:\" + bitrate);\n        newLines = newLines.concat(lines.slice(line, lines.length));\n        return newLines.join(\"\\n\");\n    };\n    WebRTC.prototype.CreateDataChannel = function (name) {\n        var channel = new DataChannel_1.DataChannel(name);\n        this.DataChannels.set(name, channel);\n        return channel;\n    };\n    WebRTC.prototype.RemoveDataChannel = function (name) {\n        this.DataChannels.delete(name);\n    };\n    WebRTC.prototype.addError = function (err) {\n        this.OnError(err);\n    };\n    WebRTC.prototype.onCandidate = function (event) {\n        var _this = this;\n        var msg = JSON.parse(event.message);\n        var candidate = msg.iceCandidate;\n        var pc = this.getPeerConnection(event.sender);\n        pc.addIceCandidate(new RTCIceCandidate(candidate)).then(function () {\n        }).catch(function (err) {\n            _this.addError(err);\n        });\n    };\n    WebRTC.prototype.onAnswer = function (event) {\n        var _this = this;\n        var pc = this.getPeerConnection(event.sender);\n        pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(event.message))).then(function (p) {\n        }).catch(function (err) {\n            _this.addError(err);\n        });\n    };\n    WebRTC.prototype.onOffer = function (event, skipLocalTracks) {\n        var _this = this;\n        var pc = this.getPeerConnection(event.sender);\n        if (!skipLocalTracks) {\n            this.LocalStreams.forEach(function (stream) {\n                stream.getTracks().forEach(function (track) {\n                    pc.addTrack(track, stream);\n                });\n            });\n        }\n        pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(event.message)));\n        pc.createAnswer({ offerToReceiveAudio: true, offerToReceiveVideo: true }).then(function (description) {\n            pc.setLocalDescription(description).then(function () {\n                if (_this.bandwidthConstraints)\n                    description.sdp = _this.setMediaBitrates(description.sdp);\n                var answer = {\n                    sender: _this.LocalPeerId,\n                    recipient: event.sender,\n                    message: JSON.stringify(description)\n                };\n                _this.brokerController.Invoke(\"contextSignal\", answer);\n            }).catch(function (err) { return _this.addError(err); });\n        }).catch(function (err) { return _this.addError(err); });\n    };\n    WebRTC.prototype.AddLocalStream = function (stream) {\n        this.LocalStreams.push(stream);\n        return this;\n    };\n    WebRTC.prototype.AddIceServer = function (iceServer) {\n        this.rtcConfig.iceServers.push(iceServer);\n        return this;\n    };\n    WebRTC.prototype.removePeerConnection = function (id) {\n        this.Peers.delete(id);\n    };\n    WebRTC.prototype.createPeerConnection = function (id) {\n        var _this = this;\n        var rtcPeerConnection = new RTCPeerConnection(this.rtcConfig);\n        rtcPeerConnection.onsignalingstatechange = function (state) { };\n        rtcPeerConnection.onicecandidate = function (event) {\n            if (!event || !event.candidate)\n                return;\n            if (event.candidate) {\n                var msg = {\n                    sender: _this.LocalPeerId,\n                    recipient: id,\n                    message: JSON.stringify({\n                        type: 'candidate',\n                        iceCandidate: event.candidate\n                    })\n                };\n                _this.brokerController.Invoke(\"contextSignal\", msg);\n            }\n        };\n        rtcPeerConnection.oniceconnectionstatechange = function (event) {\n            switch (event.target.iceConnectionState) {\n                case \"connected\":\n                    _this.onConnected(id);\n                    break;\n                case \"disconnected\":\n                    _this.cleanUp(id);\n                    _this.OnDisconnected(id);\n                    break;\n            }\n        };\n        rtcPeerConnection.ontrack = function (event) {\n            var connection = _this.Peers.get(id);\n            connection.stream.addTrack(event.track);\n            if (_this.OnRemoteTrack)\n                _this.OnRemoteTrack(event.track, connection);\n        };\n        this.DataChannels.forEach(function (dataChannel) {\n            var pc = new PeerChannel_1.PeerChannel(id, rtcPeerConnection.createDataChannel(dataChannel.label), dataChannel.label);\n            dataChannel.addPeerChannel(pc);\n            rtcPeerConnection.ondatachannel = function (event) {\n                var channel = event.channel;\n                channel.onopen = function (event) {\n                    _this.DataChannels.get(channel.label).OnOpen(event, id, channel.label);\n                };\n                channel.onclose = function (event) {\n                    _this.DataChannels.get(channel.label).removePeerChannel(id);\n                    _this.DataChannels.get(channel.label).OnClose(event, id, channel.label);\n                };\n                channel.onmessage = function (message) {\n                    _this.DataChannels.get(channel.label).onMessage(message);\n                };\n            };\n        });\n        return rtcPeerConnection;\n    };\n    WebRTC.prototype.cleanUp = function (id) {\n        this.DataChannels.forEach(function (d) {\n            d.removePeerChannel(id);\n        });\n    };\n    WebRTC.prototype.findPeerConnection = function (id) {\n        return this.Peers.get(id);\n    };\n    WebRTC.prototype.reconnectAll = function () {\n        throw \"not yet implemeted\";\n    };\n    WebRTC.prototype.getPeerConnection = function (id) {\n        var match = this.Peers.get(id);\n        if (!match) {\n            var pc = new WebRTCConnection_1.WebRTCConnection(id, this.createPeerConnection(id));\n            this.Peers.set(id, pc);\n            return pc.RTCPeer;\n        }\n        return match.RTCPeer;\n    };\n    WebRTC.prototype.createOffer = function (peer) {\n        var _this = this;\n        var peerConnection = this.createPeerConnection(peer.peerId);\n        this.LocalStreams.forEach(function (stream) {\n            stream.getTracks().forEach(function (track) {\n                peerConnection.addTrack(track, stream);\n            });\n            _this.OnLocalStream(stream);\n        });\n        peerConnection.createOffer({ offerToReceiveAudio: true, offerToReceiveVideo: true }).then(function (description) {\n            peerConnection.setLocalDescription(description).then(function () {\n                if (_this.bandwidthConstraints)\n                    description.sdp = _this.setMediaBitrates(description.sdp);\n                var offer = {\n                    sender: _this.LocalPeerId,\n                    recipient: peer.peerId,\n                    message: JSON.stringify(description)\n                };\n                _this.brokerController.Invoke(\"contextSignal\", offer);\n            }).catch(function (err) {\n                _this.addError(err);\n            });\n        }).catch(function (err) {\n            _this.addError(err);\n        });\n        return peerConnection;\n    };\n    WebRTC.prototype.Disconnect = function () {\n        this.Peers.forEach(function (connection) {\n            connection.RTCPeer.close();\n        });\n        this.ChangeContext(Math.random().toString(36).substring(2));\n    };\n    WebRTC.prototype.DisconnectPeer = function (id) {\n        var peer = this.findPeerConnection(id);\n        peer.RTCPeer.close();\n    };\n    WebRTC.prototype.Connect = function (peerConnections) {\n        var _this = this;\n        peerConnections.forEach(function (peerConnection) {\n            var pc = new WebRTCConnection_1.WebRTCConnection(peerConnection.peerId, _this.createOffer(peerConnection));\n            _this.Peers.set(peerConnection.peerId, pc);\n        });\n        return this;\n    };\n    WebRTC.prototype.ChangeContext = function (context) {\n        this.brokerController.Invoke(\"changeContext\", { context: context });\n        return this;\n    };\n    WebRTC.prototype.ConnectPeers = function () {\n        this.brokerController.Invoke(\"connectContext\", {});\n    };\n    WebRTC.prototype.ConnectContext = function () {\n        this.ConnectPeers();\n    };\n    return WebRTC;\n}());\nexports.WebRTC = WebRTC;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/src/WebRTC/WebRTC.js?");

/***/ }),

/***/ "./node_modules/thor-io.client-vnext/src/WebRTC/WebRTCConnection.js":
/*!**************************************************************************!*\
  !*** ./node_modules/thor-io.client-vnext/src/WebRTC/WebRTCConnection.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar WebRTCConnection = (function () {\n    function WebRTCConnection(id, rtcPeerConnection) {\n        this.id = id;\n        this.RTCPeer = rtcPeerConnection;\n        this.stream = new MediaStream();\n    }\n    return WebRTCConnection;\n}());\nexports.WebRTCConnection = WebRTCConnection;\n\n\n//# sourceURL=webpack:///./node_modules/thor-io.client-vnext/src/WebRTC/WebRTCConnection.js?");

/***/ }),

/***/ "./src/MediaLoader.js":
/*!****************************!*\
  !*** ./src/MediaLoader.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass MediaLoader {\r\n    static readFile(url) {\r\n        return new Promise((resolve, reject) => {\r\n            fetch(url).then((response) => {\r\n                resolve(response.blob());\r\n            }).catch(reject);\r\n        });\r\n    }\r\n    static getAudioMediaStream(url, callback) {\r\n        this.readFile(url).then((blob) => {\r\n            var context = new AudioContext();\r\n            var gainNode = context.createGain();\r\n            gainNode.connect(context.destination);\r\n            gainNode.gain.value = 0; // don't play for self\r\n            let reader = new FileReader();\r\n            reader.onload = (function (e) {\r\n                context.decodeAudioData(e.target.result, createSoundSource);\r\n            });\r\n            reader.readAsArrayBuffer(blob);\r\n            const createSoundSource = (buffer) => {\r\n                let soundSource = context.createBufferSource();\r\n                soundSource.buffer = buffer;\r\n                soundSource.start(0, 0 / 1000);\r\n                soundSource.connect(gainNode);\r\n                let destination = context.createMediaStreamDestination();\r\n                soundSource.connect(destination);\r\n                callback(destination.stream);\r\n            };\r\n        });\r\n    }\r\n}\r\nexports.MediaLoader = MediaLoader;\r\n\n\n//# sourceURL=webpack:///./src/MediaLoader.js?");

/***/ }),

/***/ "./src/MediaStreamBlender.js":
/*!***********************************!*\
  !*** ./src/MediaStreamBlender.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst MediaStreamRecorder_1 = __webpack_require__(/*! ./MediaStreamRecorder */ \"./src/MediaStreamRecorder.js\");\r\nconst StreamSource_1 = __webpack_require__(/*! ./StreamSource */ \"./src/StreamSource.js\");\r\nclass MediaStreamBlender {\r\n    /**\r\n     * Creates an instance of MediaStreamBleder.\r\n     * @param {HTMLCanvasElement} [el]\r\n     * @memberof MediaStreamBleder\r\n     */\r\n    constructor(el) {\r\n        this.videosSources = new Map();\r\n        this.audioSources = new Map();\r\n        this.surface = el ? el : document.createElement(\"canvas\");\r\n        this.ctx = this.surface.getContext(\"2d\");\r\n    }\r\n    /**\r\n     * Create a video element , add the track(s)\r\n     *\r\n     * @param {MediaStream} stream\r\n     * @returns {HTMLVideoElement}\r\n     * @memberof MediaStreamRenderer\r\n     */\r\n    createVideoFromStream(stream) {\r\n        const video = document.createElement('video');\r\n        video.srcObject = stream;\r\n        video.muted = true;\r\n        video.width = 640;\r\n        video.height = 360;\r\n        video.autoplay = true;\r\n        video.play();\r\n        return video;\r\n    }\r\n    /**\r\n     * Get a video stream from the canvas\r\n     *\r\n     * @returns\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    captureStream() {\r\n        let stream = this.surface[\"captureStream\"]() || this.surface[\"mozCaptureStream\"]();\r\n        let videoStream = new MediaStream();\r\n        stream.getTracks().filter(function (t) {\r\n            return t.kind === 'video';\r\n        }).forEach(track => {\r\n            videoStream.addTrack(track);\r\n        });\r\n        return videoStream;\r\n    }\r\n    /**\r\n     *  Add MediaStreamTrack\r\n     *\r\n     * @param {string} id\r\n     * @param {Array<MediaStreamTrack>} tracks\r\n     * @param {boolean} isLocal\r\n     * @returns {MediaStream}\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    addTracks(id, tracks, isLocal) {\r\n        const stream = new MediaStream();\r\n        tracks.forEach((track) => {\r\n            if (track.kind === \"video\") {\r\n                stream.addTrack(track);\r\n                let source = new StreamSource_1.StreamSource(stream, this.createVideoFromStream(stream), isLocal);\r\n                this.videosSources.set(id, source);\r\n            }\r\n            else {\r\n                if (!this.audioContext) {\r\n                    this.audioContext = new AudioContext();\r\n                    this.audioDestination = this.audioContext.createMediaStreamDestination();\r\n                }\r\n                stream.addTrack(track);\r\n                let audioSource = this.audioContext.createMediaStreamSource(stream);\r\n                let source = new StreamSource_1.StreamSource(stream, audioSource, isLocal);\r\n                if (!isLocal)\r\n                    audioSource.connect(this.audioDestination);\r\n                this.audioSources.set(id, source);\r\n            }\r\n            track.onended = () => {\r\n                this.onTrackEnded(id, track);\r\n            };\r\n        });\r\n        this.onTrack();\r\n        return stream;\r\n    }\r\n    /**\r\n     *  Refresh the canvas containging vidoes ( call after a new video is added )\r\n     *\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    refreshCanvas() {\r\n        const numOfVideos = this.videosSources.size;\r\n        let videoSource = Array.from(this.videosSources.values());\r\n        this.surface.width = numOfVideos > 1 ? videoSource[0].source.width * 2 : videoSource[0].source.width;\r\n        let height = 1;\r\n        if (numOfVideos === 3 || numOfVideos === 4) {\r\n            height = 2;\r\n        }\r\n        if (numOfVideos === 5 || numOfVideos === 6) {\r\n            height = 3;\r\n        }\r\n        if (numOfVideos === 7 || numOfVideos === 8) {\r\n            height = 4;\r\n        }\r\n        if (numOfVideos === 9 || numOfVideos === 10) {\r\n            height = 5;\r\n        }\r\n        this.surface.height = videoSource[0].source.height * height;\r\n    }\r\n    /**\r\n     * Get a MediaStream of all remote audio tracks ( not self )\r\n     *\r\n     * @returns\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    getRemoteAudioStream() {\r\n        this.audioDestination = this.audioContext.createMediaStreamDestination();\r\n        this.audioSources.forEach((_audioSource) => {\r\n            if (!_audioSource.isLocal) {\r\n                _audioSource.source.connect(this.audioDestination);\r\n            }\r\n        });\r\n        return this.audioDestination.stream;\r\n    }\r\n    /**\r\n     * Get a MediaStream containing all audio tracks\r\n     *\r\n     * @returns\r\n     * @memberof MediaStreamBlender\r\n     */\r\n    getAllAudioStreams() {\r\n        this.audioDestination = this.audioContext.createMediaStreamDestination();\r\n        this.audioSources.forEach((_audioSource) => {\r\n            _audioSource.source.connect(this.audioDestination);\r\n        });\r\n        return this.audioDestination.stream;\r\n    }\r\n    /**\r\n     * Draw video element on th canvas\r\n     *\r\n     * @param {HTMLVideoElement} video\r\n     * @param {number} index\r\n     * @memberof MediaStreamRender\r\n     */\r\n    drawVideo(video, index) {\r\n        let x = 0;\r\n        let y = 0;\r\n        let width = video.width;\r\n        let height = video.height;\r\n        if (index === 1) {\r\n            x = video.width;\r\n        }\r\n        if (index === 2) {\r\n            y = video.height;\r\n        }\r\n        if (index === 3) {\r\n            x = video.width;\r\n            y = video.height;\r\n        }\r\n        if (index === 4) {\r\n            y = video.height * 2;\r\n        }\r\n        if (index === 5) {\r\n            x = video.width;\r\n            y = video.height * 2;\r\n        }\r\n        if (index === 6) {\r\n            y = video.height * 3;\r\n        }\r\n        if (index === 7) {\r\n            x = video.width;\r\n            y = video.height * 3;\r\n        }\r\n        this.ctx.drawImage(video, x, y, width, height);\r\n    }\r\n    /**\r\n     * Start/stop recorder\r\n     *\r\n     * @memberof MediaStreamBleder\r\n     */\r\n    record() {\r\n        if (!this.isRecording) {\r\n            let video = this.captureStream().getVideoTracks();\r\n            let audio = this.getAllAudioStreams().getAudioTracks();\r\n            let tracks = [video[0], audio[0]];\r\n            this.recorder = new MediaStreamRecorder_1.MediaStreamRecorder(tracks);\r\n            this.recorder.ondataavailable = this.onRecorderData;\r\n            this.recorder.start(500);\r\n            this.onRecordingStart();\r\n        }\r\n        else {\r\n            this.recorder.stop();\r\n            this.recorder.flush().then(this.onRecordingEnded);\r\n        }\r\n        this.isRecording = !this.isRecording;\r\n    }\r\n    /**\r\n     * Start / stop render video elements to canvas\r\n     *\r\n     * @param {number} fps\r\n     * @memberof MediaStreamBleder\r\n     */\r\n    render(fps) {\r\n        if (!this.isRendering) {\r\n            this.refreshCanvas();\r\n            this._handle = setInterval(() => {\r\n                Array.from(this.videosSources.values()).forEach((v, i) => {\r\n                    this.drawVideo(v.source, i);\r\n                });\r\n                // draw water mark, overlay ?\r\n                if (this.onFrameRendered)\r\n                    this.onFrameRendered(this.ctx);\r\n            }, 1000 / fps);\r\n        }\r\n        else {\r\n            clearInterval(this._handle);\r\n            this._handle = -1;\r\n        }\r\n        this.isRendering = !this.isRendering;\r\n    }\r\n}\r\nexports.MediaStreamBlender = MediaStreamBlender;\r\n\n\n//# sourceURL=webpack:///./src/MediaStreamBlender.js?");

/***/ }),

/***/ "./src/MediaStreamRecorder.js":
/*!************************************!*\
  !*** ./src/MediaStreamRecorder.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass MediaStreamRecorder {\r\n    /**\r\n     *Creates an instance of MediaStreamRecorder.\r\n     * @param {Array<MediaStreamTrack>} tracks\r\n     * @memberof MediaStreamRecorder\r\n     */\r\n    constructor(tracks) {\r\n        this.tracks = tracks;\r\n        this.mediaStream = new MediaStream(tracks);\r\n        this.recorder = new MediaRecorder(this.mediaStream, { mimeType: 'video/webm; codecs=\"opus,vp8\"' });\r\n        this.recorder.ondataavailable = (e) => {\r\n            if (e.data.size > 0) {\r\n                if (this.ondataavailable) {\r\n                    this.ondataavailable(e.data);\r\n                }\r\n                else {\r\n                    this.data.push(e.data);\r\n                }\r\n            }\r\n        };\r\n    }\r\n    /**\r\n     * Get a BlobURL from data\r\n     *\r\n     * @returns {string}\r\n     * @memberof MediaStreamRecorder\r\n     */\r\n    getBlobUrl() {\r\n        let blob = new Blob(this.data, {\r\n            type: 'video/webm; codecs=\"vp8\"'\r\n        });\r\n        return URL.createObjectURL(blob);\r\n    }\r\n    /**\r\n     * Get recorded data as Blob\r\n     *\r\n     * @returns {Blob}\r\n     * @memberof MediaStreamRecorder\r\n     */\r\n    getBlob() {\r\n        let blob = new Blob(this.data, {\r\n            type: 'video/webm'\r\n        });\r\n        return blob;\r\n    }\r\n    getParts() {\r\n        let blob = new Blob([this.data[0]], {\r\n            type: 'video/webm'\r\n        });\r\n        return blob;\r\n    }\r\n    /**\r\n     * Flush data buffer and get recorded data (blob)\r\n     *\r\n     * @returns {Promise<string>}\r\n     * @memberof MediaStreamRecorder\r\n     */\r\n    flush() {\r\n        return new Promise((resolve, reject) => {\r\n            resolve(this.getBlobUrl());\r\n            this.data = new Array();\r\n        });\r\n    }\r\n    /**\r\n     * Stop recording\r\n     *\r\n     * @memberof MediaStreamRecorder\r\n     */\r\n    stop() {\r\n        this.recorder.stop();\r\n    }\r\n    /**\r\n     * Start recording\r\n     *\r\n     * @param {number} n\r\n     * @memberof MediaStreamRecorder\r\n     */\r\n    start(n) {\r\n        this.data = new Array();\r\n        this.recorder.start(n);\r\n    }\r\n}\r\nexports.MediaStreamRecorder = MediaStreamRecorder;\r\n\n\n//# sourceURL=webpack:///./src/MediaStreamRecorder.js?");

/***/ }),

/***/ "./src/MediaStreamer.js":
/*!******************************!*\
  !*** ./src/MediaStreamer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass MediaSourceStreamer {\r\n    constructor(el, logger, pre) {\r\n        this.el = el;\r\n        this.logger = logger;\r\n        this.numOfBuffersAdded = 0;\r\n        this.sourceBuffers = new Array();\r\n        this.mediaSource = new MediaSource();\r\n        this.mediaSource.onsourceopen = (ev) => {\r\n            this.onSourceOpen(ev);\r\n            if (pre)\r\n                this.sourceBuffer.appendBuffer(pre);\r\n        };\r\n        this.mediaSource.onsourceclose = (ev) => {\r\n            this.onSourceClose(ev);\r\n        };\r\n        this.mediaSource.onsourceended = (ev) => {\r\n            this.onSourceEnded(ev);\r\n        };\r\n        this.el.src = URL.createObjectURL(this.mediaSource);\r\n    }\r\n    addChunk(chunk, ts) {\r\n        if (!this.sourceBuffer)\r\n            return;\r\n        this.sourceBuffers.push(chunk);\r\n        if (!this.sourceBuffer.updating)\r\n            this.getNextBuffer();\r\n        if (this.sourceBuffers.length === 0)\r\n            this.startPlayback();\r\n    }\r\n    startPlayback() {\r\n        //    this.el.play();\r\n    }\r\n    getNextBuffer() {\r\n        if (this.sourceBuffers.length && !this.sourceBuffer.updating) {\r\n            let bs = this.sourceBuffers.shift();\r\n            if (bs)\r\n                this.sourceBuffer.appendBuffer(bs);\r\n        }\r\n        this.numOfBuffersAdded++;\r\n    }\r\n    onSourceOpen(ev) {\r\n        this.sourceBuffer = this.mediaSource.addSourceBuffer('video/webm; codecs=\"opus,vp8\"');\r\n        this.sourceBuffer.onerror = (err) => {\r\n        };\r\n        this.sourceBuffer.onupdateend = (ev) => {\r\n            this.getNextBuffer();\r\n            if (this.logger) {\r\n                let sb = this.sourceBuffer;\r\n                let video = this.el;\r\n                this.logger.log(\"timestampOffset\", sb.timestampOffset);\r\n                this.logger.log(\"appendWindowStart\", sb.appendWindowStart);\r\n                this.logger.log(\"appendWindowEnd\", sb.appendWindowEnd);\r\n                for (let i = 0; i < sb.buffered.length; i++) {\r\n                    this.logger.log(\"buffered\", i, sb.buffered.start(i), sb.buffered.end(i));\r\n                }\r\n                for (let i = 0; i < video.seekable.length; i++) {\r\n                    this.logger.log(\"seekable\", i, video.seekable.start(i), video.seekable.end(i));\r\n                }\r\n                this.logger.log(\"webkitAudioDecodedByteCount\", video[\"webkitAudioDecodedByteCount\"]);\r\n                this.logger.log(\"webkitVideoDecodedByteCount\", video[\"webkitVideoDecodedByteCount\"]);\r\n                this.logger.log(\"webkitDecodedFrameCount\", video[\"webkitDecodedFrameCount\"]);\r\n                this.logger.log(\"webkitDroppedFrameCount\", video[\"webkitDroppedFrameCount\"]);\r\n            }\r\n        };\r\n    }\r\n    onSourceClose(ev) {\r\n        this.mediaSource.removeSourceBuffer(this.sourceBuffer);\r\n    }\r\n    onSourceEnded(ev) {\r\n    }\r\n}\r\nexports.MediaSourceStreamer = MediaSourceStreamer;\r\n\n\n//# sourceURL=webpack:///./src/MediaStreamer.js?");

/***/ }),

/***/ "./src/StreamSource.js":
/*!*****************************!*\
  !*** ./src/StreamSource.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass StreamSource {\r\n    /**\r\n     *Creates an instance of StreamSource.\r\n     * @param {MediaStream} stream\r\n     * @param {*} source\r\n     * @param {boolean} isLocal\r\n     * @memberof StreamSource\r\n     */\r\n    constructor(stream, source, isLocal) {\r\n        this.stream = stream;\r\n        this.source = source;\r\n        this.isLocal = isLocal;\r\n    }\r\n}\r\nexports.StreamSource = StreamSource;\r\n\n\n//# sourceURL=webpack:///./src/StreamSource.js?");

/***/ }),

/***/ "./test/sender.js":
/*!************************!*\
  !*** ./test/sender.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst thor_io_client_vnext_1 = __webpack_require__(/*! thor-io.client-vnext */ \"./node_modules/thor-io.client-vnext/index.js\");\r\nconst MediaStreamer_1 = __webpack_require__(/*! ../src/MediaStreamer */ \"./src/MediaStreamer.js\");\r\nconst __1 = __webpack_require__(/*! .. */ \"./index.js\");\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    let mediaStreamer;\r\n    let factory = new thor_io_client_vnext_1.Factory(\"wss://kollokvium.herokuapp.com\", [\"broker\"]);\r\n    factory.OnOpen = () => {\r\n        let broker = factory.GetController(\"broker\");\r\n        let rtc = new thor_io_client_vnext_1.WebRTC(broker, {\r\n            \"sdpSemantics\": 'plan-b',\r\n            \"iceTransports\": 'all',\r\n            \"rtcpMuxPolicy\": \"require\",\r\n            \"bundlePolicy\": \"max-bundle\",\r\n            \"iceServers\": [\r\n                {\r\n                    \"urls\": \"stun:stun.l.google.com:19302\"\r\n                }\r\n            ]\r\n        });\r\n        rtc.OnContextCreated = (p) => {\r\n            console.log(\"Connected to a random context\");\r\n        };\r\n        rtc.OnContextChanged = (p) => {\r\n            console.log(\"Now connected to\", p.context);\r\n            rtc.ConnectContext();\r\n        };\r\n        let constraints = {\r\n            video: {\r\n                width: { min: 320, max: 1280, ideal: 640 },\r\n                height: { min: 240, max: 720, ideal: 360 },\r\n                frameRate: 30\r\n            }, audio: true\r\n        };\r\n        navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {\r\n            fetch(\"into.webm\").then((r) => {\r\n                return r.arrayBuffer();\r\n            }).then((arr) => {\r\n                let tracks = mediaStream.getTracks();\r\n                rtc.ChangeContext(\"foo-bar\");\r\n                let video = document.createElement(\"video\");\r\n                video.width = 640;\r\n                video.height = 360;\r\n                video.controls = true;\r\n                video.muted = true;\r\n                mediaStreamer = new MediaStreamer_1.MediaSourceStreamer(video);\r\n                let recorder = new __1.MediaStreamRecorder(tracks);\r\n                let dataChannel = rtc.CreateDataChannel(\"streamChannel\");\r\n                dataChannel.OnOpen = (a, b, c) => {\r\n                    let blob = recorder.getParts();\r\n                    blob.arrayBuffer().then((buf) => {\r\n                        dataChannel.InvokeBinary(\"handshake\", {\r\n                            video: video.currentTime\r\n                        }, buf, true);\r\n                    });\r\n                };\r\n                recorder.ondataavailable = (blob) => {\r\n                    blob.arrayBuffer().then((buffer) => {\r\n                        mediaStreamer.addChunk(buffer, video.currentTime);\r\n                        const meta = {\r\n                            time: video.currentTime,\r\n                            size: buffer.byteLength\r\n                        };\r\n                        dataChannel.InvokeBinary(\"segment\", meta, buffer, true);\r\n                    });\r\n                };\r\n                recorder.start(600);\r\n                video.play();\r\n                document.querySelector(\"#stream-video\").append(video);\r\n            }).catch(err => {\r\n                console.error(err);\r\n            });\r\n        });\r\n        // expose API to window\r\n        broker.Connect();\r\n    };\r\n});\r\n\n\n//# sourceURL=webpack:///./test/sender.js?");

/***/ })

/******/ });