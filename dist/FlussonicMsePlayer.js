(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FlussonicMsePlayer"] = factory();
	else
		root["FlussonicMsePlayer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = exports.enableLogs = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _getSelfScope = __webpack_require__(50);

function noop() {}

var fakeLogger = {
  trace: noop,
  debug: noop,
  log: noop,
  warn: noop,
  info: noop,
  error: noop
};

var exportedLogger = fakeLogger;

// let lastCallTime;
// function formatMsgWithTimeInfo(type, msg) {
//   const now = Date.now();
//   const diff = lastCallTime ? '+' + (now - lastCallTime) : '0';
//   lastCallTime = now;
//   msg = (new Date(now)).toISOString() + ' | [' +  type + '] > ' + msg + ' ( ' + diff + ' ms )';
//   return msg;
// }

function formatMsg(type, msg) {
  msg = '[' + type + '] > ' + msg;
  return msg;
}

var global = (0, _getSelfScope.getSelfScope)();

function consolePrintFn(type) {
  var func = global.console[type];
  if (func) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args[0]) {
        args[0] = formatMsg(type, args[0]);
      }

      func.apply(global.console, args);
    };
  }
  return noop;
}

function exportLoggerFunctions(debugConfig) {
  for (var _len2 = arguments.length, functions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    functions[_key2 - 1] = arguments[_key2];
  }

  functions.forEach(function (type) {
    exportedLogger[type] = debugConfig[type] ? debugConfig[type].bind(debugConfig) : consolePrintFn(type);
  });
}

var enableLogs = exports.enableLogs = function enableLogs(debugConfig) {
  if (debugConfig === true || (typeof debugConfig === 'undefined' ? 'undefined' : _typeof(debugConfig)) === 'object') {
    exportLoggerFunctions(debugConfig,
    // Remove out from list here to hard-disable a log-level
    // 'trace',
    'debug', 'log', 'info', 'warn', 'error');
    // Some browsers don't allow to use bind on console object anyway
    // fallback to default if needed
    try {
      exportedLogger.log();
    } catch (e) {
      exportedLogger = fakeLogger;
    }
  } else {
    exportedLogger = fakeLogger;
  }
};

var logger = exports.logger = exportedLogger;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(20);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENTS = {
  // MediaSource
  MEDIA_SOURCE_SOURCE_OPEN: 'sourceopen',
  MEDIA_SOURCE_SOURCE_ENDED: 'sourceended',
  MEDIA_SOURCE_SOURCE_CLOSE: 'sourceclose',

  // HTMLMediaElement
  MEDIA_ELEMENT_PROGRESS: 'progress',
  MEDIA_ELEMENT_EMPTIED: 'emptied',

  // WebSocket
  WS_OPEN: 'open',
  WS_MESSAGE: 'message',
  WS_ERROR: 'error',
  WS_CLOSE: 'close',

  // Buffer
  BUFFER_UPDATE_END: 'updateend',
  BUFFER_ERROR: 'onerror',
  BUFFER_ABORT: 'onabort'
};

exports.default = EVENTS;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(28);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(38)('wks');
var uid = __webpack_require__(8);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMsg = exports.replaceHttpByWS = exports.checkVideoProgress = exports.MAX_DELAY = undefined;
exports.getMediaSource = getMediaSource;
exports.isAndroid = isAndroid;
exports.isSupportedMSE = isSupportedMSE;
exports.base64ToArrayBuffer = base64ToArrayBuffer;
exports.RawDataToUint8Array = RawDataToUint8Array;
exports.getTrackId = getTrackId;
exports.getRealUtcFromData = getRealUtcFromData;
exports.doArrayBuffer = doArrayBuffer;
exports.debugData = debugData;
exports.pad2 = pad2;
exports.humanTime = humanTime;
exports.logDM = logDM;
exports.showDispatchError = showDispatchError;

var _logger = __webpack_require__(2);

function getMediaSource() {
  if (typeof window !== 'undefined') {
    return window.MediaSource || window.WebKitMediaSource;
  }
}

function isAndroid() {
  var ua = navigator.userAgent;
  return ua.indexOf('Android') !== -1;
}

function isSupportedMSE() {
  // https://bugs.chromium.org/p/chromium/issues/detail?id=539707
  if (isAndroid()) {
    return false;
  }
  var mediaSource = getMediaSource();
  var sourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
  var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === 'function' && mediaSource.isTypeSupported('video/mp4; codecs="avc1.4d401f,mp4a.40.2"');

  // if SourceBuffer is exposed ensure its API is valid
  // safari and old version of Chrome doe not expose SourceBuffer globally so checking SourceBuffer.prototype is impossible
  var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === 'function' && typeof sourceBuffer.prototype.remove === 'function';
  return !!isTypeSupported && !!sourceBufferValidAPI;
}

function base64ToArrayBuffer(base64) {
  return Uint8Array.from(atob(base64), function (c) {
    return c.charCodeAt(0);
  });
}

function RawDataToUint8Array(rawData) {
  // 12,4 = mfhd;20,4 slice - segment.id;36,4 = tfhd;44,4 slice - track.id;64,4 = tfdt
  // 72,8 slice - prestime;84,4 = futc;92,8 slice - real utc;104,4 = trun
  var result = new Uint8Array(rawData);
  return result;
}
function getTrackId(data) {
  return data[47];
}

function getRealUtcFromData(view) {
  var pts1 = view[92] << 24 | view[93] << 16 | view[94] << 8 | view[95];
  var pts2 = view[96] << 24 | view[97] << 16 | view[98] << 8 | view[99];
  var realUtc = pts1 + pts2 / 1000000;
  return realUtc;
}

function doArrayBuffer() {
  var segment = this.segments.shift();

  if (!segment.isInit) {
    // last loaded frame's utc
    this.utc = getRealUtcFromData(segment.data);
    this.lastLoadedUTC = this.utc;
  }

  this.maybeAppend(segment);
}

function debugData(rawData) {
  var view = RawDataToUint8Array(rawData);
  var trackId = getTrackId(view);
  var utc = getRealUtcFromData(view);

  return { trackId: trackId, utc: utc, view: view };
}

var ua = navigator.userAgent;
var MAX_DELAY = exports.MAX_DELAY = /Edge/.test(ua) || /trident.*rv:1\d/i.test(ua) ? 10 // very slow buffers in Edge
: 2;

var checkVideoProgress = exports.checkVideoProgress = function checkVideoProgress(media, player) {
  var maxDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MAX_DELAY;
  return function (evt) {
    var ct = media.currentTime,
        buffered = media.buffered,
        l = media.buffered.length;


    if (!l) {
      return;
    }
    var endTime = buffered.end(l - 1);
    var delay = Math.abs(endTime - ct);
    if (player._stalling) {
      player.onEndStalling();
      // если поставелна пауза
      if (media.paused && player._pause && !player.playing) {
        media.currentTime = endTime - 0.0001;
        player.playPromise = media.play();
        player.playPromise.then(function () {
          player._pause = false;
          player.playing = true;
        });
      }
    }

    if (delay <= maxDelay) {
      return;
    }

    _logger.logger.log('nudge', ct, '->', l ? endTime : '-', ct - endTime); //evt, )
    media.currentTime = endTime - 0.2; // (Math.abs(ct - endTime)) //
  };
};

var replaceHttpByWS = exports.replaceHttpByWS = function replaceHttpByWS(url) {
  return url.replace(/^http/, 'ws');
};

var errorMsg = exports.errorMsg = function errorMsg(e) {
  return 'Error ' + e.name + ': ' + e.message + '\n' + e.stack;
};

function pad2(n) {
  return n <= 9 ? '0' + n : '' + n;
}

function humanTime(utcOrLive) {
  var lt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  // $FlowFixMe: string > 0 is always false
  if (!(utcOrLive > 0)) {
    return '';
  }

  // $FlowFixMe: just for flow
  var utc = utcOrLive;

  var d = new Date();
  d.setTime(utc * 1000);
  var localTime = !(lt === false);

  var h = localTime ? d.getHours() : d.getUTCHours();
  var m = localTime ? d.getMinutes() : d.getUTCMinutes();
  var s = localTime ? d.getSeconds() : d.getUTCSeconds();

  return pad2(h) + ':' + pad2(m) + ':' + pad2(s);
}

function logDM(isDataAB, parsedData) {
  if (parsedData) {
    _logger.logger.log('%c ' + parsedData.type + ' ' + (parsedData.type === 'event' ? parsedData.event : 'mse_init_segment'), 'background: aquamarine;', parsedData);
  }
}

var errorsCount = 0;

function showDispatchError(e, err) {
  var rawData = e.data;
  var isDataAB = rawData instanceof ArrayBuffer;
  console.error(errorMsg(e), err);

  if (this.media && this.media.error) {
    console.error('MediaError:', this.media.error);
  }

  if (isDataAB) {
    console.error('Data:', debugData(e.data));
  }

  errorsCount++;

  if (errorsCount >= this.opts.errorsBeforeStop) {
    errorsCount = 0;
    this.stopPromise = this.stop();
  }

  if (this.onError) {
    this.onError(err, e);
  }
}

/*
 * debug staff, after each operation you should
 * set count to 0, if you want show info about
 * ArrayBuffer frames
 */
// let count = 0

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var VIDEO = exports.VIDEO = 'video';
var AUDIO = exports.AUDIO = 'audio';

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MsePlayer = __webpack_require__(16);

var _MsePlayer2 = _interopRequireDefault(_MsePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MsePlayer2.default;
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import MediaSourceController from '../controllers/mediaSource'

__webpack_require__(17);

var _ws = __webpack_require__(40);

var _ws2 = _interopRequireDefault(_ws);

var _buffers = __webpack_require__(51);

var _buffers2 = _interopRequireDefault(_buffers);

var _mseUtils = __webpack_require__(12);

var mseUtils = _interopRequireWildcard(_mseUtils);

var _logger = __webpack_require__(2);

var _segments = __webpack_require__(52);

var _common = __webpack_require__(13);

var _events = __webpack_require__(6);

var _events2 = _interopRequireDefault(_events);

var _messages = __webpack_require__(53);

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WS_EVENT_PAUSED = 'paused';
var WS_EVENT_RESUMED = 'resumed';
var WS_EVENT_SEEKED = 'seeked';
var WS_EVENT_SWITCHED_TO_LIVE = 'switched_to_live';
var WS_EVENT_EOS = 'recordings_ended';
var WS_EVENT_NO_LIVE = 'stream_unavailable';

var TYPE_CONTENT_VIDEO = _common.VIDEO;
var TYPE_CONTENT_AUDIO = _common.AUDIO;
var DEFAULT_ERRORS_BEFORE_STOP = 1;
var DEFAULT_UPDATE = 100;

var MSEPlayer = function () {
  MSEPlayer.replaceHttpByWS = function replaceHttpByWS(url) {
    return mseUtils.replaceHttpByWS(url);
  };

  MSEPlayer.isSupported = function isSupported() {
    return mseUtils.isSupportedMSE();
  };
  /**
   *
   * @param media HTMLMediaElement
   * @param urlStream
   * @param opts
   */


  _createClass(MSEPlayer, null, [{
    key: 'version',
    get: function get() {
      return "18.09.2";
    }
  }]);

  function MSEPlayer(media, urlStream) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, MSEPlayer);

    if (opts.debug) {
      (0, _logger.enableLogs)(true);
      window.humanTime = mseUtils.humanTime;
    }

    _logger.logger.info('[mse-player]:', MSEPlayer.version);

    this.opts = opts || {};

    this.media = media;

    this.url = urlStream;

    this.opts.progressUpdateTime = this.opts.progressUpdateTime || DEFAULT_UPDATE;

    this.opts.errorsBeforeStop = this.opts.errorsBeforeStop ? this.opts.errorsBeforeStop : DEFAULT_ERRORS_BEFORE_STOP;

    if (typeof this.opts.errorsBeforeStop !== 'number' || isNaN(this.opts.errorsBeforeStop)) {
      throw new Error('invalid errorsBeforeStop param, should be number');
    }

    this.onProgress = opts && opts.onProgress;
    this.onMediaInfo = opts && opts.onMediaInfo;
    this.onError = opts && opts.onError;

    this.init();

    if (media instanceof HTMLMediaElement) {
      this.onAttachMedia({ media: media });
    }

    this.ws = new _ws2.default({
      message: this.dispatchMessage.bind(this),
      error: this.onError
    });

    /*
     * SourceBuffers Controller
     */

    this.sb = new _buffers2.default({ media: media });
  }

  MSEPlayer.prototype.play = function play(time, videoTrack, audioTack) {
    _logger.logger.log('[mse-player]: play()');
    return this._play(time, videoTrack, audioTack);
  };

  MSEPlayer.prototype.stop = function stop() {
    return this.onMediaDetaching();
  };

  MSEPlayer.prototype.seek = function seek(utc) {
    try {
      if (!utc) {
        throw new Error('utc should be "live" or UTC value');
      }
      this.ws.seek(utc);
      this.sb.seek();
      this.onStartStalling();
      // need for determine old frames
      this.seekValue = utc;
      this.media.pause();
      this._pause = true;
      this.playing = false;
    } catch (err) {
      _logger.logger.warn('seek:' + err.message);
    }
  };

  MSEPlayer.prototype.pause = function pause() {
    if (!canPause.bind(this)()) {
      return _logger.logger.log('[mse:playback] can not do pause');
    }
    var binded = _pause.bind(this);
    // https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
    this.playPromise.then(binded, binded);
    function _pause() {
      this.ws.pause();
      this.media.pause();
      this._pause = true;
      this.playing = false;

      if (this.onPause) {
        try {
          this.onPause();
        } catch (e) {
          console.error('Error ' + e.name + ':' + e.message + '\n' + e.stack);
        }
      }
    }

    function canPause() {
      if (this._pause || !this.media || !this.ws || !this.mediaSource || this.mediaSource && this.mediaSource.readyState !== 'open' || !this.playPromise) {
        return false;
      }
      return true;
    }
  };

  MSEPlayer.prototype.setTracks = function setTracks(tracks) {
    var _this = this;

    if (!this.mediaInfo) {
      _logger.logger.warn('Media info did not loaded. Should try after onMediaInfo triggered or inside.');
      return;
    }

    if (!Array.isArray(tracks)) {
      console.error('tracks should be an Array instance: ["v1", "a1"]');
    }

    var videoTracksStr = tracks.filter(function (id) {
      var stream = _this.mediaInfo.streams.find(function (s) {
        return id === s['track_id'];
      });
      return !!stream && stream.content === TYPE_CONTENT_VIDEO;
    }).join('');

    var audioTracksStr = tracks.filter(function (id) {
      var stream = _this.mediaInfo.streams.find(function (s) {
        return id === s['track_id'];
      });
      return !!stream && stream.content === TYPE_CONTENT_AUDIO;
    }).join('');

    this.onStartStalling();
    this.ws.setTracks(videoTracksStr, audioTracksStr);

    this.videoTrack = videoTracksStr;
    this.audioTrack = audioTracksStr;
    // ?
    this._setTracksFlag = true;
    this.waitForInitFrame = true;
  };

  /**
   *
   *  Private members
   *
   */

  MSEPlayer.prototype._play = function _play(from, videoTrack, audioTack) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      _logger.logger.log('_play', from, videoTrack, audioTack);
      if (_this2.playing) {
        var message = '[mse-player] _play: terminate because already has been playing';
        _logger.logger.log(message);
        return resolve({ message: message });
      }

      if (_this2._pause) {
        _this2._resume(); // ws
        // should invoke play method of video in onClick scope
        // further logic are duplicated at checkVideoProgress
        // https://github.com/jwplayer/jwplayer/issues/2421#issuecomment-333130812
        _this2._pause = false;
        _this2.playing = true;
        _this2.playPromise = _this2.media.play();
        _logger.logger.log('_play: terminate because _paused and should resume');
        return _this2.playPromise;
      }

      _this2.playTime = from;
      _this2.videoTrack = videoTrack;
      _this2.audioTack = audioTack;
      _this2._pause = false;

      // TODO: to observe this case, I have no idea when it fired
      if (!_this2.mediaSource) {
        _this2.onAttachMedia({ media: _this2.media });
        _this2.onsoa = _this2._play.bind(_this2, from, videoTrack, audioTack);
        _this2.mediaSource.addEventListener(_events2.default.MEDIA_SOURCE_SOURCE_OPEN, _this2.onsoa);
        _logger.logger.warn('mediaSource did not create');
        _this2.resolveThenMediaSourceOpen = _this2.resolveThenMediaSourceOpen ? _this2.resolveThenMediaSourceOpen : resolve;
        _this2.rejectThenMediaSourceOpen = _this2.rejectThenMediaSourceOpen ? _this2.rejectThenMediaSourceOpen : reject;
        return;
      }

      // deferring execution
      if (_this2.mediaSource && _this2.mediaSource.readyState !== 'open') {
        _logger.logger.warn('readyState is not "open"');
        _this2.shouldPlay = true;
        _this2.resolveThenMediaSourceOpen = _this2.resolveThenMediaSourceOpen ? _this2.resolveThenMediaSourceOpen : resolve;
        _this2.rejectThenMediaSourceOpen = _this2.rejectThenMediaSourceOpen ? _this2.rejectThenMediaSourceOpen : reject;
        return;
      }

      _this2.ws.start(_this2.url, _this2.playTime, _this2.videoTrack, _this2.audioTack);

      // https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
      _this2.playPromise = _this2.media.play();
      _this2.startProgressTimer();

      _this2.playPromise.then(function () {
        _this2.onStartStalling(); // switch off at progress checker
        if (_this2.resolveThenMediaSourceOpen) {
          _this2.playing = true;
          _this2.resolveThenMediaSourceOpen();
          _this2.resolveThenMediaSourceOpen = void 0;
          _this2.rejectThenMediaSourceOpen = void 0;
        }
      }, function () {
        _logger.logger.log('playPromise rejection. this.playing false');
        // if error, this.ws.connectionPromise can be undefined
        if (_this2.ws.connectionPromise) {
          _this2.ws.connectionPromise.then(function () {
            return _this2.ws.pause();
          }); // #6694
        }
        _this2._pause = true;
        _this2.playing = false;

        if (_this2.onError) {
          _this2.onError({
            error: 'play_promise_reject'
          });
        }

        if (_this2.rejectThenMediaSourceOpen) {
          _this2.rejectThenMediaSourceOpen();
          _this2.resolveThenMediaSourceOpen = void 0;
          _this2.rejectThenMediaSourceOpen = void 0;
        }
      });
      return _this2.playPromise;
    });
  };

  MSEPlayer.prototype.init = function init() {
    this._pause = false;
    this.playing = false;
    // flag to pending execution(true)
    this.shouldPlay = false;
    // store to execute pended method play
    this.playTime = void 0;
    this.audioTack = '';
    this.videoTrack = '';
    this.endProgressTimer();
  };

  MSEPlayer.prototype._resume = function _resume() {
    this.ws.resume();
  };

  MSEPlayer.prototype.onMediaDetaching = function onMediaDetaching() {
    if (this.stopRunning) {
      _logger.logger.warn('stop is running.');
      return;
    }
    this.stopRunning = true;
    // workaround pending playPromise state
    return this.handlerMediaDetaching();
    // TODO: how to be with pending internal statuses
    // https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
    var bindedMD = this.handlerMediaDetaching.bind(this);
    if (this.playPromise) {
      // there are two cases:
      // resolved/rejected
      // both required to shutdown ws, mediasources and etc.
      return this.playPromise.then(bindedMD, bindedMD);
    }
    if (!this.playPromise) {
      return this.handlerMediaDetaching();
    }
  };

  MSEPlayer.prototype.handlerMediaDetaching = function handlerMediaDetaching() {
    var _this3 = this;

    _logger.logger.info('media source detaching');

    var mediaEmptyPromise = void 0;

    // destroy media source and detach from media element
    this.removeMediaSource();

    if (this.media) {
      this.media.removeEventListener(_events2.default.MEDIA_ELEMENT_PROGRESS, this.oncvp); // checkVideoProgress
      mediaEmptyPromise = new Promise(function (resolve) {
        _this3._onmee = _this3.onMediaElementEmptied(resolve).bind(_this3);
      });
      mediaEmptyPromise.then(function () {
        return _this3.stopRunning = false;
      });
      this.media.addEventListener(_events2.default.MEDIA_ELEMENT_EMPTIED, this._onmee);
    }

    this.oncvp = null;

    this.mediaSource = null;

    this.init();
    this.ws.destroy();
    this.sb.destroy();
    return mediaEmptyPromise;
  };

  MSEPlayer.prototype.removeMediaSource = function removeMediaSource() {
    var ms = this.mediaSource;
    if (ms) {
      if (ms.readyState === 'open') {
        try {
          // endOfStream could trigger exception if any sourcebuffer is in updating state
          // we don't really care about checking sourcebuffer state here,
          // as we are anyway detaching the MediaSource
          // let's just avoid this exception to propagate
          ms.endOfStream();
        } catch (err) {
          _logger.logger.warn('onMediaDetaching:' + err.message + ' while calling endOfStream');
        }
      }

      ms.removeEventListener(_events2.default.MEDIA_SOURCE_SOURCE_OPEN, this.onmso);
      ms.removeEventListener(_events2.default.MEDIA_SOURCE_SOURCE_ENDED, this.onmse);
      ms.removeEventListener(_events2.default.MEDIA_SOURCE_SOURCE_CLOSE, this.onmsc);
      this.onmso = null;
      this.onmse = null;
      this.onmsc = null;
    }

    // Detach properly the MediaSource from the HTMLMediaElement as
    // suggested in https://github.com/w3c/media-source/issues/53.
    URL.revokeObjectURL(this.media.src);
    this.media.removeAttribute('src');
    this.media.load();
  };

  MSEPlayer.prototype.onMediaElementEmptied = function onMediaElementEmptied(resolve) {
    if (this._onmee && this.media) {
      this.media.removeEventListener(_events2.default.MEDIA_ELEMENT_EMPTIED, this._onmee);
      this._onmee = void 0;
    }
    return resolve();
  };

  MSEPlayer.prototype.onAttachMedia = function onAttachMedia(data) {
    var _this4 = this;

    this.media = data.media;
    var media = this.media;
    if (!(media instanceof HTMLMediaElement)) {
      throw new Error(_messages2.default.NOT_HTML_MEDIA_ELEMENT);
    }
    if (media) {
      // setup the media source
      var ms = this.mediaSource = new MediaSource();
      //Media Source listeners

      this.onmse = this.onMediaSourceEnded.bind(this);
      this.onmsc = this.onMediaSourceClose.bind(this);

      ms.addEventListener(_events2.default.MEDIA_SOURCE_SOURCE_ENDED, this.onmse);
      ms.addEventListener(_events2.default.MEDIA_SOURCE_SOURCE_CLOSE, this.onmsc);
      // link video and media Source
      media.src = URL.createObjectURL(ms);

      this.oncvp = mseUtils.checkVideoProgress(media, this).bind(this);
      this.media.addEventListener(_events2.default.MEDIA_ELEMENT_PROGRESS, this.oncvp);
      return new Promise(function (resolve) {
        _this4.onmso = _this4.onMediaSourceOpen.bind(_this4, resolve);
        ms.addEventListener(_events2.default.MEDIA_SOURCE_SOURCE_OPEN, _this4.onmso);
      });
    }
  };

  MSEPlayer.prototype.onMediaSourceOpen = function onMediaSourceOpen(resolve) {
    resolve();
    var mediaSource = this.mediaSource;
    if (mediaSource) {
      // once received, don't listen anymore to sourceopen event
      mediaSource.removeEventListener(_events2.default.MEDIA_SOURCE_SOURCE_OPEN, this.onmso);
    }

    // play was called but stoped and was pend(1.readyState is not open)
    // and time is come to execute it
    if (this.shouldPlay) {
      _logger.logger.info('readyState now is ' + this.mediaSource.readyState + ', and will be played', this.playTime, this.audioTack, this.videoTrack);
      this.shouldPlay = false;
      this._play(this.playTime, this.audioTack, this.videoTrack);
    }
  };

  MSEPlayer.prototype.dispatchMessage = function dispatchMessage(e) {
    if (this.stopRunning) {
      return;
    }

    var rawData = e.data;
    var isDataAB = rawData instanceof ArrayBuffer;
    var parsedData = !isDataAB ? JSON.parse(rawData) : void 0;
    mseUtils.logDM(isDataAB, parsedData);
    try {
      // ArrayBuffer data
      if (isDataAB) {
        // wait for MSE_INIT_SEGMENT
        if (this.waitForInitFrame) {
          return _logger.logger.log('old frames');
        }
        this.sb.procArrayBuffer(rawData);
      }

      /*
       * EVENTS
       */

      if (parsedData && parsedData.type === _segments.EVENT_SEGMENT) {
        var eventType = parsedData[_segments.EVENT_SEGMENT];
        switch (eventType) {
          case WS_EVENT_RESUMED:
            if (this._pause && !this.playing) {
              // wait for "progress" event, for shift currentTime and start playing
              this.onStartStalling();
            }
            break;
          case WS_EVENT_PAUSED:
            break;
          case WS_EVENT_SEEKED:
          case WS_EVENT_SWITCHED_TO_LIVE:
            this.seekValue = void 0;
            if (this.opts.onSeeked) {
              try {
                this.opts.onSeeked();
              } catch (err) {
                console.error(err);
              }
            }
            break;
          case WS_EVENT_EOS:
            this._eos = true;
            this.sb.onBufferEos();
            break;
          // if live source is unavailability
          case WS_EVENT_NO_LIVE:
            var noLiveError = { error: 'no_live', event: eventType };
            _logger.logger.log('do playPromise reject with error', noLiveError);
            // make playPromise rejected
            throw new Error(noLiveError);
            this.playPromise = Promise.rejected();
            break;
          default:
            if (this.opts.onError) {
              this.opts.onError({ error: 'unhandled_event', event: eventType });
            }
            _logger.logger.warn('unknown type of event', eventType);
        }
        return;
      }

      // MSE_INIT_SEGMENT
      if (parsedData && parsedData.type === _segments.MSE_INIT_SEGMENT) {
        return this.procInitSegment(rawData);
      }
    } catch (err) {
      this.ws.pause();
      mseUtils.showDispatchError.bind(this)(e, err);
    }
  };

  MSEPlayer.prototype.procInitSegment = function procInitSegment(rawData) {
    var data = JSON.parse(rawData);
    if (data.type !== _segments.MSE_INIT_SEGMENT) {
      return _logger.logger.warn('type is not ' + _segments.MSE_INIT_SEGMENT);
    }

    if (this.waitForInitFrame) {
      this.waitForInitFrame = false;
    }

    if (this.sb.isBuffered()) {
      this.media.pause();
      this.previouslyPaused = false;
      this._setTracksFlag = true;
      this.immediateSwitch = true;
      var startOffset = 0;
      var endOffset = Infinity;
      // TODO: should invoke remove method of SourceBuffer's
      this.sb.flushRange.push({ start: startOffset, end: endOffset, type: void 0 });
      // attempt flush immediately
      this.sb.flushBufferCounter = 0;
      this.sb.doFlush();
    }

    // calc this.audioTrackId this.videoTrackId
    this.sb.setTracksByType(data);

    var metadata = data.metadata;
    var streams = data.metadata.streams;

    var activeStreams = {};

    if (this.sb.videoTrackId) {
      activeStreams.video = streams[this.sb.videoTrackId - 1]['track_id'];
    }

    if (this.sb.audioTrackId) {
      activeStreams.audio = streams[this.sb.audioTrackId - 1]['track_id'];
    }

    this.doMediaInfo(_extends({}, metadata, { activeStreams: activeStreams }));
    _logger.logger.log('%cprocInitSegment:', 'background: lightpink;', data);

    if (this.mediaSource && !this.mediaSource.sourceBuffers.length) {
      this.sb.setMediaSource(this.mediaSource);
      this.sb.createSourceBuffers(data);
    }
    this.sb.createTracks(data.tracks);
  };

  MSEPlayer.prototype.doMediaInfo = function doMediaInfo(metadata) {
    _logger.logger.log('%cmediaInfo:', 'background: orange;', metadata);
    if (this.onMediaInfo) {
      this.mediaInfo = metadata;
      try {
        this.onMediaInfo(metadata);
      } catch (e) {
        console.error(mseUtils.errorMsg(e));
      }
    }
  };

  MSEPlayer.prototype.getVideoTracks = function getVideoTracks() {
    if (!this.mediaInfo) {
      return;
    }
    return this.mediaInfo.streams.filter(function (s) {
      return s.content === TYPE_CONTENT_VIDEO;
    });
  };

  MSEPlayer.prototype.getAudioTracks = function getAudioTracks() {
    if (!this.mediaInfo) {
      return;
    }
    return this.mediaInfo.streams.filter(function (s) {
      return s.content === TYPE_CONTENT_AUDIO;
    });
  };

  /**
   * on immediate level switch end, after new fragment has been buffered:
   * - nudge video decoder by slightly adjusting video currentTime (if currentTime buffered)
   * - resume the playback if needed
   */


  MSEPlayer.prototype.immediateLevelSwitchEnd = function immediateLevelSwitchEnd() {
    var media = this.media;
    if (media && media.buffered.length) {
      this.immediateSwitch = false;
      // if (BufferHelper.isBuffered(media, media.currentTime)) {
      // only nudge if currentTime is buffered
      // media.currentTime -= 0.0001;
      // }
      if (!this.previouslyPaused) {
        this.playPromise = media.play();
        this.playPromise.then(function () {
          player._pause = false;
          player.playing = true;
        });
      }
    }
  };

  MSEPlayer.prototype.onStartStalling = function onStartStalling() {
    if (this.opts.onStartStalling) {
      this.opts.onStartStalling();
    }
    this._stalling = true;
    _logger.logger.log('onStartStalling');
  };

  MSEPlayer.prototype.onEndStalling = function onEndStalling() {
    if (this.opts.onEndStalling) {
      this.opts.onEndStalling();
    }
    this._stalling = false;
    _logger.logger.log('onEndStalling');
  };

  MSEPlayer.prototype.startProgressTimer = function startProgressTimer() {
    this.timer = setInterval(this.onTimer.bind(this), this.opts.progressUpdateTime);
  };

  MSEPlayer.prototype.endProgressTimer = function endProgressTimer() {
    clearInterval(this.timer);
    this.timer = void 0;
  };

  MSEPlayer.prototype.onTimer = function onTimer() {
    if (this._eos) {
      return _logger.logger.log('nothing to play');
    }

    // #TODO explain
    if (this.immediateSwitch) {
      this.immediateLevelSwitchEnd();
    }

    if (this.sb.lastLoadedUTC === this.utcPrev) {
      // logger.log('%cloaded utc is not change', 'background: orange;', this.sb.lastLoadedUTC, this.utcPrev, this._stalling)
      return;
    }

    if (this._stalling) {
      // logger.log('%cStalling flag is true', 'background: lightred;')
      return;
    }

    this.utcPrev = this.sb.lastLoadedUTC;

    if (!this.onProgress) {
      return;
    }
    try {
      this.onProgress(this.sb.lastLoadedUTC);
    } catch (e) {
      console.error(mseUtils.errorMsg(e));
    }
  };

  MSEPlayer.prototype.onMediaSourceEnded = function onMediaSourceEnded() {
    _logger.logger.log('media source ended');
    try {
      if (this.opts.onEOS) {
        this.opts.onEOS();
      }
    } catch (err) {
      console.error('error while proccessing onEOS');
    }
  };

  MSEPlayer.prototype.onMediaSourceClose = function onMediaSourceClose() {
    _logger.logger.log('media source closed');
  };

  return MSEPlayer;
}();

exports.default = MSEPlayer;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
module.exports = __webpack_require__(3).Array.find;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(19);
var $find = __webpack_require__(29)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(39)(KEY);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(3);
var hide = __webpack_require__(4);
var redefine = __webpack_require__(26);
var ctx = __webpack_require__(9);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(22);
var toPrimitive = __webpack_require__(24);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(7)(function () {
  return Object.defineProperty(__webpack_require__(23)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var hide = __webpack_require__(4);
var has = __webpack_require__(27);
var SRC = __webpack_require__(8)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(3).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(9);
var IObject = __webpack_require__(30);
var toObject = __webpack_require__(31);
var toLength = __webpack_require__(33);
var asc = __webpack_require__(35);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(10);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(32);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(36);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var isArray = __webpack_require__(37);
var SPECIES = __webpack_require__(11)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(10);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(11)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(4)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWSURL = getWSURL;

var _parseurl = __webpack_require__(41);

var _parseurl2 = _interopRequireDefault(_parseurl);

var _events = __webpack_require__(6);

var _events2 = _interopRequireDefault(_events);

var _logger = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WS_COMMAND_SEEK_LIVE = '';
var WS_COMMAND_SEEK = 'play_from=';
var LIVE = 'live';

var WebSocketController = function () {
  function WebSocketController(opts) {
    _classCallCheck(this, WebSocketController);

    this.opts = opts;
    this.init();
    this.onwso = this.open.bind(this);
    this.onwsm = this.handleReceiveMessage.bind(this);
    this.onwse = this.handleError.bind(this);
  }

  WebSocketController.prototype.init = function init() {
    this.opened = false;
    this.connectionPromise = void 0;
  };

  WebSocketController.prototype.start = function start(url, time) {
    var _this = this;

    var videoTrack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var audioTack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    /**
     * if call ws.send command immediately after start
     * it causes to error message like "ws still in connection status"
     * #6809
     */

    this.connectionPromise = new Promise(function (res, rej) {
      var wsURL = getWSURL(url, time, videoTrack, audioTack);

      _this.websocket = new WebSocket(wsURL);
      _this.websocket.binaryType = 'arraybuffer';
      // do that for remove event method
      _this.websocket.addEventListener(_events2.default.WS_OPEN, _this.onwso);
      _this.websocket.addEventListener(_events2.default.WS_MESSAGE, _this.onwsm);
      _this.websocket.addEventListener(_events2.default.WS_ERROR, _this.onwse);
      _this._openingResolve = res;
      // TODO: to think cases when ws can fall
      _this._openingReject = rej;
    });
    return this.connectionPromise;
  };

  WebSocketController.prototype.open = function open() {
    this.opened = true;
    this._openingResolve(); // #6809
    this.resume();
    this.websocket.removeEventListener(_events2.default.WS_OPEN, this.onwso);
  };

  WebSocketController.prototype.send = function send(cmd) {
    this.websocket.send(cmd);
  };

  WebSocketController.prototype.resume = function resume() {
    _logger.logger.log('ws: send resume');
    this.websocket.send('resume');
  };

  WebSocketController.prototype.pause = function pause() {
    _logger.logger.log('ws: send pause');
    /**
     * 0 (CONNECTING) The connection is not yet open.
     * 1 (OPEN) The connection is open and ready to communicate.
     * 2 (CLOSING) The connection is in the process of closing.
     * 3 (CLOSED) The connection is closed or couldn't be opened.
     */
    if (this.websocket.readyState === 1) {
      this.websocket.send('pause');
    }
  };

  WebSocketController.prototype.seek = function seek(utc) {
    var commandStr = utc === LIVE ? WS_COMMAND_SEEK_LIVE : WS_COMMAND_SEEK;
    _logger.logger.log('' + commandStr + utc);
    this.websocket.send('' + commandStr + utc);
  };

  WebSocketController.prototype.setTracks = function setTracks(videoTrack, audioTrack) {
    this.websocket.send('set_tracks=' + videoTrack + audioTrack);
  };

  WebSocketController.prototype.handleReceiveMessage = function handleReceiveMessage(e) {
    this.opts.message(e);
  };

  WebSocketController.prototype.handleError = function handleError() {
    if (this.opts.error) {
      var _opts;

      (_opts = this.opts).error.apply(_opts, arguments);
    }
  };

  WebSocketController.prototype.destroy = function destroy() {
    if (this.websocket) {
      this.pause();
      this.websocket.removeEventListener(_events2.default.WS_MESSAGE, this.onwsm);
      this.websocket.onclose = function () {}; // disable onclose handler first
      this.websocket.close();
      this.init();
    }
  };

  return WebSocketController;
}();

// TODO


exports.default = WebSocketController;
function getWSURL(url, utc, videoTrack, audioTrack) {
  // TODO: then use @param time it prevent to wrong data from ws(trackID view[47] for example is 100)
  var time = utc;

  if (!time && !videoTrack && !audioTrack) {
    return url;
  }

  var parsedUrl = (0, _parseurl2.default)({ url: url });
  var othersParams = '';

  if (parsedUrl.query) {
    var currentParamsKeysValues = parsedUrl.query.split('&').map(function (keyValue) {
      return keyValue.split('=');
    });

    othersParams = currentParamsKeysValues.filter(function (p) {
      return p[0] !== 'from' && p[0] !== 'tracks';
    }).map(function (kv) {
      return kv.join('=');
    }).join('&');

    _logger.logger.log(othersParams);
  }

  var cleanUrl = parsedUrl.protocol + '//' + parsedUrl.host + parsedUrl.pathname + '?';
  var tracksExists = !!videoTrack || !!audioTrack;

  var ampFrom = tracksExists && !!time && time !== LIVE ? '&' : '';
  var fromQuery = utc === LIVE ? '' : 'from=' + Math.floor(time);

  var resultUrl = '' + cleanUrl + (tracksExists ? 'tracks=' + videoTrack + audioTrack : '') + ('' + ampFrom + fromQuery) + ('' + ((tracksExists || !!time && time !== LIVE) && !!othersParams ? '&' : '') + othersParams);
  return resultUrl;
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * parseurl
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var url = __webpack_require__(42)
var parse = url.parse
var Url = url.Url

/**
 * Module exports.
 * @public
 */

module.exports = parseurl
module.exports.original = originalurl

/**
 * Parse the `req` url with memoization.
 *
 * @param {ServerRequest} req
 * @return {Object}
 * @public
 */

function parseurl (req) {
  var url = req.url

  if (url === undefined) {
    // URL is undefined
    return undefined
  }

  var parsed = req._parsedUrl

  if (fresh(url, parsed)) {
    // Return cached URL parse
    return parsed
  }

  // Parse the URL
  parsed = fastparse(url)
  parsed._raw = url

  return (req._parsedUrl = parsed)
};

/**
 * Parse the `req` original url with fallback and memoization.
 *
 * @param {ServerRequest} req
 * @return {Object}
 * @public
 */

function originalurl (req) {
  var url = req.originalUrl

  if (typeof url !== 'string') {
    // Fallback
    return parseurl(req)
  }

  var parsed = req._parsedOriginalUrl

  if (fresh(url, parsed)) {
    // Return cached URL parse
    return parsed
  }

  // Parse the URL
  parsed = fastparse(url)
  parsed._raw = url

  return (req._parsedOriginalUrl = parsed)
};

/**
 * Parse the `str` url with fast-path short-cut.
 *
 * @param {string} str
 * @return {Object}
 * @private
 */

function fastparse (str) {
  if (typeof str !== 'string' || str.charCodeAt(0) !== 0x2f /* / */) {
    return parse(str)
  }

  var pathname = str
  var query = null
  var search = null

  // This takes the regexp from https://github.com/joyent/node/pull/7878
  // Which is /^(\/[^?#\s]*)(\?[^#\s]*)?$/
  // And unrolls it into a for loop
  for (var i = 1; i < str.length; i++) {
    switch (str.charCodeAt(i)) {
      case 0x3f: /* ?  */
        if (search === null) {
          pathname = str.substring(0, i)
          query = str.substring(i + 1)
          search = str.substring(i)
        }
        break
      case 0x09: /* \t */
      case 0x0a: /* \n */
      case 0x0c: /* \f */
      case 0x0d: /* \r */
      case 0x20: /*    */
      case 0x23: /* #  */
      case 0xa0:
      case 0xfeff:
        return parse(str)
    }
  }

  var url = Url !== undefined
    ? new Url()
    : {}
  url.path = str
  url.href = str
  url.pathname = pathname
  url.query = query
  url.search = search

  return url
}

/**
 * Determine if parsed is still fresh for url.
 *
 * @param {string} url
 * @param {object} parsedUrl
 * @return {boolean}
 * @private
 */

function fresh (url, parsedUrl) {
  return typeof parsedUrl === 'object' &&
    parsedUrl !== null &&
    (Url === undefined || parsedUrl instanceof Url) &&
    parsedUrl._raw === url
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(43);
var util = __webpack_require__(46);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(47);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return punycode;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)(module), __webpack_require__(45)))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(48);
exports.encode = exports.stringify = __webpack_require__(49);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelfScope = getSelfScope;
function getSelfScope() {
  // see https://stackoverflow.com/a/11237259/589493
  if (typeof window === 'undefined') {
    /* eslint-disable-next-line no-undef */
    return self;
  } else {
    return window;
  }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mseUtils = __webpack_require__(12);

var _logger = __webpack_require__(2);

var _common = __webpack_require__(13);

var _events = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BUFFER_MODE_SEQUENCE = 'sequence'; // segments

var BuffersController = function () {
  function BuffersController() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, BuffersController);

    _logger.logger.log('create BuffersController');
    this.media = opts.media;
    this.init(opts);

    this.doArrayBuffer = _mseUtils.doArrayBuffer.bind(this);
    this.maybeAppend = this.maybeAppend.bind(this);
    this.onSBUpdateEnd = this.onSBUpdateEnd.bind(this);
  }

  BuffersController.prototype.init = function init() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this.flushRange = [];
    this.appended = 0;
    this.mediaSource = opts.mediaSource;
    this.segments = [];
    this.sourceBuffer = {};
  };

  BuffersController.prototype.setMediaSource = function setMediaSource(ms) {
    this.mediaSource = ms;
  };

  BuffersController.prototype.createSourceBuffers = function createSourceBuffers(data) {
    var _this = this;

    var sb = this.sourceBuffer;

    data.tracks.forEach(function (s) {
      var isVideo = s.content === _common.VIDEO;
      var mimeType = isVideo ? 'video/mp4; codecs="avc1.4d401f"' : 'audio/mp4; codecs="mp4a.40.2"';

      sb[s.content] = _this.mediaSource.addSourceBuffer(mimeType);
      var buffer = sb[s.content];

      buffer.addEventListener(_events.BUFFER_UPDATE_END, _this.onSBUpdateEnd);
    });
  };

  BuffersController.prototype.onSBUpdateEnd = function onSBUpdateEnd() {
    if (this._needsFlush) {
      this.doFlush();
    }

    if (this._needsEos) {
      this.checkEos();
    }

    if (!this._needsFlush && this.segments.length) {
      this.doArrayBuffer();
    }
  };

  BuffersController.prototype.createTracks = function createTracks(tracks) {
    var _this2 = this;

    tracks.forEach(function (track) {
      var view = (0, _mseUtils.base64ToArrayBuffer)(track.payload);
      var segment = {
        type: _this2.getTypeBytrackId(track.id),
        isInit: true,
        data: view
      };
      _this2.maybeAppend(segment);
    });
  };

  BuffersController.prototype.maybeAppend = function maybeAppend(segment) {
    if (this._needsFlush) {
      this.segments.unshift(segment);
      return;
    }

    var buffer = this.sourceBuffer[segment.type];

    if (buffer.updating) {
      this.segments.unshift(segment);
    } else {
      buffer.appendBuffer(segment.data);
      this.appended++;
    }
  };

  BuffersController.prototype.setTracksByType = function setTracksByType(data) {
    var _this3 = this;

    data.tracks.forEach(function (s) {
      _this3[s.content === _common.VIDEO ? 'videoTrackId' : 'audioTrackId'] = s.id;
    });
  };

  BuffersController.prototype.getTypeBytrackId = function getTypeBytrackId(id) {
    return this.audioTrackId === id ? _common.AUDIO : _common.VIDEO;
  };

  BuffersController.prototype.procArrayBuffer = function procArrayBuffer(rawData) {
    var segment = this.rawDataToSegmnet(rawData);
    this.segments.push(segment);
    this.doArrayBuffer();
  };

  BuffersController.prototype.seek = function seek() {
    for (var k in this.sourceBuffer) {
      this.sourceBuffer[k].abort();
      this.sourceBuffer[k].mode = BUFFER_MODE_SEQUENCE;
    }

    this.segments = [];
  };

  BuffersController.prototype.isBuffered = function isBuffered() {
    var appended = 0;
    var sourceBuffer = this.sourceBuffer;
    for (var type in sourceBuffer) {
      appended += sourceBuffer[type].buffered.length;
    }
    return appended > 0;
  };

  BuffersController.prototype.doFlush = function doFlush() {
    // loop through all buffer ranges to flush
    while (this.flushRange.length) {
      var range = this.flushRange[0];
      // flushBuffer will abort any buffer append in progress and flush Audio/Video Buffer
      if (this.flushBuffer(range.start, range.end, range.type)) {
        // range flushed, remove from flush array
        this.flushRange.shift();
        this.flushBufferCounter = 0;
      } else {
        this._needsFlush = true;
        // avoid looping, wait for SB update end to retrigger a flush
        return;
      }
    }
    if (this.flushRange.length === 0) {
      // everything flushed
      this._needsFlush = false;

      // let's recompute this.appended, which is used to avoid flush looping
      var appended = 0;
      var sourceBuffer = this.sourceBuffer;
      try {
        for (var type in sourceBuffer) {
          appended += sourceBuffer[type].buffered.length;
        }
      } catch (error) {
        // error could be thrown while accessing buffered, in case sourcebuffer has already been removed from MediaSource
        // this is harmess at this stage, catch this to avoid reporting an internal exception
        console.error('error while accessing sourceBuffer.buffered');
      }
      this.appended = appended;
      this._setTracksFlag = false;
    }
  };

  /*
    flush specified buffered range,
    return true once range has been flushed.
    as sourceBuffer.remove() is asynchronous, flushBuffer will be retriggered on sourceBuffer update end
  */


  BuffersController.prototype.flushBuffer = function flushBuffer(startOffset, endOffset, typeIn) {
    var sb = void 0,
        i = void 0,
        bufStart = void 0,
        bufEnd = void 0,
        flushStart = void 0,
        flushEnd = void 0,
        sourceBuffer = this.sourceBuffer;
    if (Object.keys(sourceBuffer).length) {
      _logger.logger.log('flushBuffer,pos/start/end: ' + this.media.currentTime.toFixed(3) + '/' + startOffset + '/' + endOffset);
      // safeguard to avoid infinite looping : don't try to flush more than the nb of appended segments
      if (this.flushBufferCounter < this.appended) {
        for (var type in sourceBuffer) {
          // check if sourcebuffer type is defined (typeIn): if yes, let's only flush this one
          // if no, let's flush all sourcebuffers
          if (typeIn && type !== typeIn) {
            continue;
          }

          sb = sourceBuffer[type];
          // we are going to flush buffer, mark source buffer as 'not ended'
          sb.ended = false;
          if (!sb.updating) {
            try {
              for (i = 0; i < sb.buffered.length; i++) {
                bufStart = sb.buffered.start(i);
                bufEnd = sb.buffered.end(i);
                // workaround firefox not able to properly flush multiple buffered range.
                if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1 && endOffset === Number.POSITIVE_INFINITY) {
                  flushStart = startOffset;
                  flushEnd = endOffset;
                } else {
                  flushStart = Math.max(bufStart, startOffset);
                  flushEnd = Math.min(bufEnd, endOffset);
                }
                /* sometimes sourcebuffer.remove() does not flush
                   the exact expected time range.
                   to avoid rounding issues/infinite loop,
                   only flush buffer range of length greater than 500ms.
                */
                if (Math.min(flushEnd, bufEnd) - flushStart > 0.5) {
                  this.flushBufferCounter++;
                  _logger.logger.log('flush ' + type + ' [' + flushStart + ',' + flushEnd + '], of [' + bufStart + ',' + bufEnd + '], pos:' + this.media.currentTime);
                  sb.remove(flushStart, flushEnd);
                  return false;
                }
              }
            } catch (e) {
              _logger.logger.warn('exception while accessing sourcebuffer, it might have been removed from MediaSource');
            }
          } else {
            // logger.log('abort ' + type + ' append in progress');
            // this will abort any appending in progress
            // sb.abort();
            _logger.logger.warn('cannot flush, sb updating in progress');
            return false;
          }
        }
      } else {
        _logger.logger.warn('abort flushing too many retries');
      }
      _logger.logger.log('buffer flushed');
    }
    // everything flushed !
    return true;
  };

  BuffersController.prototype.rawDataToSegmnet = function rawDataToSegmnet(rawData) {
    var view = (0, _mseUtils.RawDataToUint8Array)(rawData);
    var trackId = (0, _mseUtils.getTrackId)(view);
    var trackType = this.getTypeBytrackId(trackId);
    return { type: trackType, data: view };
  };

  // on BUFFER_EOS mark matching sourcebuffer(s) as ended and trigger checkEos()


  BuffersController.prototype.onBufferEos = function onBufferEos() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var sb = this.sourceBuffer;
    var dataType = data.type;
    for (var type in sb) {
      if (!dataType || type === dataType) {
        if (!sb[type].ended) {
          sb[type].ended = true;
          _logger.logger.log(type + ' sourceBuffer now EOS');
        }
      }
    }
    this.checkEos();
  };

  // if all source buffers are marked as ended, signal endOfStream() to MediaSource.


  BuffersController.prototype.checkEos = function checkEos() {
    var sb = this.sourceBuffer,
        mediaSource = this.mediaSource;
    if (!mediaSource || mediaSource.readyState !== 'open') {
      this._needsEos = false;
      return;
    }
    for (var type in sb) {
      var sbobj = sb[type];
      if (!sbobj.ended) {
        return;
      }

      if (sbobj.updating) {
        this._needsEos = true;
        return;
      }
    }
    _logger.logger.log('all media data available, signal endOfStream() to MediaSource and stop loading fragment');
    // Notify the media element that it now has all of the media data
    try {
      mediaSource.endOfStream();
    } catch (e) {
      _logger.logger.warn('exception while calling mediaSource.endOfStream()');
    }
    this._needsEos = false;
  };

  BuffersController.prototype.destroy = function destroy() {
    this.init();
  };

  return BuffersController;
}();

exports.default = BuffersController;
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENT_SEGMENT = exports.EVENT_SEGMENT = 'event';
var MSE_INIT_SEGMENT = exports.MSE_INIT_SEGMENT = 'mse_init_segment';
var MSE_MEDIA_SEGMENT = exports.MSE_MEDIA_SEGMENT = 'mse_media_segment';

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MSG = {
  NOT_HTML_MEDIA_ELEMENT: 'media should be an HTMLMediaElement instance'
};

exports.default = MSG;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.FlussonicMsePlayer=t():e.FlussonicMsePlayer=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){var r=e.exports={version:"2.6.4"};"number"==typeof __e&&(__e=r)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logger=t.enableLogs=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r(52);function i(){}var s={trace:i,debug:i,log:i,warn:i,info:i,error:i},a=s;var u=(0,o.getSelfScope)();function c(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];r.forEach(function(t){a[t]=e[t]?e[t].bind(e):function(e){var t=u.console[e];return t?function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];n[0]&&(n[0]=function(e,t){return t="["+e+"] > "+t}(e,n[0])),t.apply(u.console,n)}:i}(t)})}t.enableLogs=function(e){if(!0===e||"object"===(void 0===e?"undefined":n(e))){c(e,"debug","log","info","warn","error");try{a.log()}catch(e){a=s}}else a=s},t.logger=a},function(e,t,r){var n=r(21),o=r(26);e.exports=r(5)?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){e.exports=!r(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={MEDIA_SOURCE_SOURCE_OPEN:"sourceopen",MEDIA_SOURCE_SOURCE_ENDED:"sourceended",MEDIA_SOURCE_SOURCE_CLOSE:"sourceclose",MEDIA_ELEMENT_PROGRESS:"progress",MEDIA_ELEMENT_EMPTIED:"emptied",WS_OPEN:"open",WS_MESSAGE:"message",WS_ERROR:"error",WS_CLOSE:"close",BUFFER_UPDATE_END:"updateend",BUFFER_ERROR:"onerror",BUFFER_ABORT:"onabort"},e.exports=t.default},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t,r){var n=r(1),o=r(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:r(30)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t,r){var n=r(31);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){var n=r(9)("wks"),o=r(8),i=r(0).Symbol,s="function"==typeof i;(e.exports=function(e){return n[e]||(n[e]=s&&i[e]||(s?i:o)("Symbol."+e))}).store=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.errorMsg=t.replaceHttpByWS=t.checkVideoProgress=t.MAX_DELAY=void 0,t.getMediaSource=o,t.isAndroid=i,t.isSupportedMSE=function(){if(i())return!1;var e=o(),t=window.SourceBuffer||window.WebKitSourceBuffer,r=e&&"function"==typeof e.isTypeSupported&&e.isTypeSupported('video/mp4; codecs="avc1.4d401f,mp4a.40.2"'),n=!t||t.prototype&&"function"==typeof t.prototype.appendBuffer&&"function"==typeof t.prototype.remove;return!!r&&!!n},t.base64ToArrayBuffer=function(e){return Uint8Array.from(atob(e),function(e){return e.charCodeAt(0)})},t.RawDataToUint8Array=s,t.getTrackId=a,t.getRealUtcFromData=u,t.doArrayBuffer=function(){var e=this.segments.shift();e.isInit||(this.utc=u(e.data),this.lastLoadedUTC=this.utc);this.maybeAppend(e)},t.debugData=c,t.pad2=p,t.humanTime=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!(e>0))return"";var r=e,n=new Date;n.setTime(1e3*r);var o=!(!1===t),i=o?n.getHours():n.getUTCHours(),s=o?n.getMinutes():n.getUTCMinutes(),a=o?n.getSeconds():n.getUTCSeconds();return p(i)+":"+p(s)+":"+p(a)},t.logDM=function(e,t){t&&n.logger.log("%c "+t.type+" "+("event"===t.type?t.event:"mse_init_segment"),"background: aquamarine;",t)},t.showDispatchError=function(e,t){var r=e.data instanceof ArrayBuffer;console.error(l(e),t),this.media&&this.media.error&&console.error("MediaError:",this.media.error);r&&console.error("Data:",c(e.data));++d>=this.opts.errorsBeforeStop&&(d=0,this.stopPromise=this.stop());this.onError&&this.onError(t,e)};var n=r(3);function o(){if("undefined"!=typeof window)return window.MediaSource||window.WebKitMediaSource}function i(){return-1!==navigator.userAgent.indexOf("Android")}function s(e){return new Uint8Array(e)}function a(e){return e[47]}function u(e){return(e[92]<<24|e[93]<<16|e[94]<<8|e[95])+(e[96]<<24|e[97]<<16|e[98]<<8|e[99])/1e6}function c(e){var t=s(e);return{trackId:a(t),utc:u(t),view:t}}var h=navigator.userAgent,f=t.MAX_DELAY=/Edge/.test(h)||/trident.*rv:1\d/i.test(h)?10:2,l=(t.checkVideoProgress=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f;return function(o){var i=e.currentTime,s=e.buffered,a=e.buffered.length;if(a){var u=s.end(a-1),c=Math.abs(u-i);t._stalling&&(t.onEndStalling(),e.paused&&t._pause&&!t.playing&&(e.currentTime=u-1e-4,t.playPromise=e.play(),t.playPromise.then(function(){t._pause=!1,t.playing=!0}))),c<=r||(n.logger.log("nudge",i,"->",a?u:"-",i-u),e.currentTime=u-.2)}}},t.replaceHttpByWS=function(e){return e.replace(/^http/,"ws")},t.errorMsg=function(e){return"Error "+e.name+": "+e.message+"\n"+e.stack});function p(e){return e<=9?"0"+e:""+e}var d=0},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.VIDEO="video",t.AUDIO="audio"},function(e,t,r){e.exports=r(16)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(17),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(18);var i=p(r(42)),s=p(r(53)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(13)),u=r(3),c=r(54),h=r(14),f=p(r(6)),l=p(r(55));function p(e){return e&&e.__esModule?e:{default:e}}var d=h.VIDEO,m=h.AUDIO,g=1,v=100,y=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n.debug&&((0,u.enableLogs)(!0),window.humanTime=a.humanTime),u.logger.info("[mse-player]:",e.version),this.opts=n||{},this.media=t,this.url=r,this.opts.progressUpdateTime=this.opts.progressUpdateTime||v,this.opts.errorsBeforeStop=this.opts.errorsBeforeStop?this.opts.errorsBeforeStop:g,"number"!=typeof this.opts.errorsBeforeStop||isNaN(this.opts.errorsBeforeStop))throw new Error("invalid errorsBeforeStop param, should be number");this.onProgress=n&&n.onProgress,this.onMediaInfo=n&&n.onMediaInfo,this.onError=n&&n.onError,this.init(),t instanceof HTMLMediaElement&&this.onAttachMedia({media:t}),this.ws=new i.default({message:this.dispatchMessage.bind(this),error:this.onError}),this.sb=new s.default({media:t})}return e.replaceHttpByWS=function(e){return a.replaceHttpByWS(e)},e.isSupported=function(){return a.isSupportedMSE()},o(e,null,[{key:"version",get:function(){return"19.02.15"}}]),e.prototype.play=function(e,t,r){return u.logger.log("[mse-player]: play()"),this._play(e,t,r)},e.prototype.stop=function(){return this.onMediaDetaching()},e.prototype.seek=function(e){try{if(!e)throw new Error('utc should be "live" or UTC value');this.ws.seek(e),this.sb.seek(),this.onStartStalling(),this.seekValue=e,this.media.pause(),this._pause=!0,this.playing=!1}catch(e){u.logger.warn("seek:"+e.message)}},e.prototype.pause=function(){if(!function(){if(this._pause||!this.media||!this.ws||!this.mediaSource||this.mediaSource&&"open"!==this.mediaSource.readyState||!this.playPromise)return!1;return!0}.bind(this)())return u.logger.log("[mse:playback] can not do pause");var e=function(){if(this.ws.pause(),this.media.pause(),this._pause=!0,this.playing=!1,this.onPause)try{this.onPause()}catch(e){console.error("Error "+e.name+":"+e.message+"\n"+e.stack)}}.bind(this);this.playPromise.then(e,e)},e.prototype.setTracks=function(e){var t=this;if(this.mediaInfo){Array.isArray(e)||console.error('tracks should be an Array instance: ["v1", "a1"]');var r=e.filter(function(e){var r=t.mediaInfo.streams.find(function(t){return e===t.track_id});return!!r&&r.content===d}).join(""),n=e.filter(function(e){var r=t.mediaInfo.streams.find(function(t){return e===t.track_id});return!!r&&r.content===m}).join("");this.onStartStalling(),this.ws.setTracks(r,n),this.videoTrack=r,this.audioTrack=n,this._setTracksFlag=!0,this.waitForInitFrame=!0}else u.logger.warn("Media info did not loaded. Should try after onMediaInfo triggered or inside.")},e.prototype._play=function(e,t,r){var n=this;return new Promise(function(o,i){if(u.logger.log("_play",e,t,r),n.playing){var s="[mse-player] _play: terminate because already has been playing";return u.logger.log(s),o({message:s})}return n._pause?(n._resume(),n._pause=!1,n.playing=!0,n.playPromise=n.media.play(),u.logger.log("_play: terminate because _paused and should resume"),n.playPromise):(n.playTime=e,n.videoTrack=t,n.audioTack=r,n._pause=!1,n.mediaSource?n.mediaSource&&"open"!==n.mediaSource.readyState?(u.logger.warn('readyState is not "open"'),n.shouldPlay=!0,n.resolveThenMediaSourceOpen=n.resolveThenMediaSourceOpen?n.resolveThenMediaSourceOpen:o,void(n.rejectThenMediaSourceOpen=n.rejectThenMediaSourceOpen?n.rejectThenMediaSourceOpen:i)):(n.ws.start(n.url,n.playTime,n.videoTrack,n.audioTack),n.playPromise=n.media.play(),n.startProgressTimer(),n.playPromise.then(function(){n.onStartStalling(),n.resolveThenMediaSourceOpen&&(n.playing=!0,n.resolveThenMediaSourceOpen(),n.resolveThenMediaSourceOpen=void 0,n.rejectThenMediaSourceOpen=void 0)},function(){u.logger.log("playPromise rejection. this.playing false"),n.ws.connectionPromise&&n.ws.connectionPromise.then(function(){return n.ws.pause()}),n._pause=!0,n.playing=!1,n.onError&&n.onError({error:"play_promise_reject"}),n.rejectThenMediaSourceOpen&&(n.rejectThenMediaSourceOpen(),n.resolveThenMediaSourceOpen=void 0,n.rejectThenMediaSourceOpen=void 0)}),n.playPromise):(n.onAttachMedia({media:n.media}),n.onsoa=n._play.bind(n,e,t,r),n.mediaSource.addEventListener(f.default.MEDIA_SOURCE_SOURCE_OPEN,n.onsoa),u.logger.warn("mediaSource did not create"),n.resolveThenMediaSourceOpen=n.resolveThenMediaSourceOpen?n.resolveThenMediaSourceOpen:o,void(n.rejectThenMediaSourceOpen=n.rejectThenMediaSourceOpen?n.rejectThenMediaSourceOpen:i)))})},e.prototype.init=function(){this._pause=!1,this.playing=!1,this.shouldPlay=!1,this.playTime=void 0,this.audioTack="",this.videoTrack="",this.endProgressTimer()},e.prototype._resume=function(){this.ws.resume()},e.prototype.onMediaDetaching=function(){if(!this.stopRunning)return this.stopRunning=!0,this.handlerMediaDetaching();u.logger.warn("stop is running.")},e.prototype.handlerMediaDetaching=function(){var e=this;u.logger.info("media source detaching");var t=void 0;return this.removeMediaSource(),this.media&&(this.media.removeEventListener(f.default.MEDIA_ELEMENT_PROGRESS,this.oncvp),(t=new Promise(function(t){e._onmee=e.onMediaElementEmptied(t).bind(e)})).then(function(){return e.stopRunning=!1}),this.media.addEventListener(f.default.MEDIA_ELEMENT_EMPTIED,this._onmee)),this.oncvp=null,this.mediaSource=null,this.init(),this.ws.destroy(),this.sb.destroy(),t},e.prototype.removeMediaSource=function(){var e=this.mediaSource;if(e){if("open"===e.readyState)try{e.endOfStream()}catch(e){u.logger.warn("onMediaDetaching:"+e.message+" while calling endOfStream")}e.removeEventListener(f.default.MEDIA_SOURCE_SOURCE_OPEN,this.onmso),e.removeEventListener(f.default.MEDIA_SOURCE_SOURCE_ENDED,this.onmse),e.removeEventListener(f.default.MEDIA_SOURCE_SOURCE_CLOSE,this.onmsc),this.onmso=null,this.onmse=null,this.onmsc=null}URL.revokeObjectURL(this.media.src),this.media.removeAttribute("src"),this.media.load()},e.prototype.onMediaElementEmptied=function(e){return this._onmee&&this.media&&(this.media.removeEventListener(f.default.MEDIA_ELEMENT_EMPTIED,this._onmee),this._onmee=void 0),e()},e.prototype.onAttachMedia=function(e){var t=this;this.media=e.media;var r=this.media;if(!(r instanceof HTMLMediaElement))throw new Error(l.default.NOT_HTML_MEDIA_ELEMENT);if(r){var n=this.mediaSource=new MediaSource;return this.onmse=this.onMediaSourceEnded.bind(this),this.onmsc=this.onMediaSourceClose.bind(this),n.addEventListener(f.default.MEDIA_SOURCE_SOURCE_ENDED,this.onmse),n.addEventListener(f.default.MEDIA_SOURCE_SOURCE_CLOSE,this.onmsc),r.src=URL.createObjectURL(n),this.oncvp=a.checkVideoProgress(r,this).bind(this),this.media.addEventListener(f.default.MEDIA_ELEMENT_PROGRESS,this.oncvp),new Promise(function(e){t.onmso=t.onMediaSourceOpen.bind(t,e),n.addEventListener(f.default.MEDIA_SOURCE_SOURCE_OPEN,t.onmso)})}},e.prototype.onMediaSourceOpen=function(e){e();var t=this.mediaSource;t&&t.removeEventListener(f.default.MEDIA_SOURCE_SOURCE_OPEN,this.onmso),this.shouldPlay&&(u.logger.info("readyState now is "+this.mediaSource.readyState+", and will be played",this.playTime,this.audioTack,this.videoTrack),this.shouldPlay=!1,this._play(this.playTime,this.audioTack,this.videoTrack))},e.prototype.dispatchMessage=function(e){if(!this.stopRunning){var t=e.data,r=t instanceof ArrayBuffer,n=r?void 0:JSON.parse(t);a.logDM(r,n);try{if(r){if(this.waitForInitFrame)return u.logger.log("old frames");this.sb.procArrayBuffer(t)}if(n&&n.type===c.EVENT_SEGMENT){var o=n[c.EVENT_SEGMENT];switch(o){case"resumed":this._pause&&!this.playing&&this.onStartStalling();break;case"paused":break;case"seeked":case"switched_to_live":if(this.seekValue=void 0,this.opts.onSeeked)try{this.opts.onSeeked()}catch(e){console.error(e)}break;case"recordings_ended":this._eos=!0,this.sb.onBufferEos();break;case"stream_unavailable":var i={error:"no_live",event:o};throw u.logger.log("do playPromise reject with error",i),new Error(i);default:this.opts.onError&&this.opts.onError({error:"unhandled_event",event:o}),u.logger.warn("unknown type of event",o)}return}if(n&&n.type===c.MSE_INIT_SEGMENT)return this.procInitSegment(t)}catch(t){this.ws.pause(),a.showDispatchError.bind(this)(e,t)}}},e.prototype.procInitSegment=function(e){var t=JSON.parse(e);if(t.type!==c.MSE_INIT_SEGMENT)return u.logger.warn("type is not "+c.MSE_INIT_SEGMENT);if(this.waitForInitFrame&&(this.waitForInitFrame=!1),this.sb.isBuffered()){this.media.pause(),this.previouslyPaused=!1,this._setTracksFlag=!0,this.immediateSwitch=!0;this.sb.flushRange.push({start:0,end:1/0,type:void 0}),this.sb.flushBufferCounter=0,this.sb.doFlush()}this.sb.setTracksByType(t);var r=t.metadata,o=t.metadata.tracks||t.metadata.streams,i={};this.sb.videoTrackId&&(i.video=o[this.sb.videoTrackId-1].track_id),this.sb.audioTrackId&&(i.audio=o[this.sb.audioTrackId-1].track_id),this.doMediaInfo(n({},r,{activeStreams:i})),u.logger.log("%cprocInitSegment:","background: lightpink;",t),this.mediaSource&&!this.mediaSource.sourceBuffers.length&&(this.sb.setMediaSource(this.mediaSource),this.sb.createSourceBuffers(t)),this.sb.createTracks(t.tracks)},e.prototype.doMediaInfo=function(e){if(u.logger.log("%cmediaInfo:","background: orange;",e),this.onMediaInfo){this.mediaInfo=e;try{this.onMediaInfo(e)}catch(e){console.error(a.errorMsg(e))}}},e.prototype.getVideoTracks=function(){if(this.mediaInfo)return this.mediaInfo.streams.filter(function(e){return e.content===d})},e.prototype.getAudioTracks=function(){if(this.mediaInfo)return this.mediaInfo.streams.filter(function(e){return e.content===m})},e.prototype.immediateLevelSwitchEnd=function(){var e=this.media;e&&e.buffered.length&&(this.immediateSwitch=!1,this.previouslyPaused||(this.playPromise=e.play(),this.playPromise.then(function(){player._pause=!1,player.playing=!0})))},e.prototype.onStartStalling=function(){this.opts.onStartStalling&&this.opts.onStartStalling(),this._stalling=!0,u.logger.log("onStartStalling")},e.prototype.onEndStalling=function(){this.opts.onEndStalling&&this.opts.onEndStalling(),this._stalling=!1,u.logger.log("onEndStalling")},e.prototype.startProgressTimer=function(){this.timer=setInterval(this.onTimer.bind(this),this.opts.progressUpdateTime)},e.prototype.endProgressTimer=function(){clearInterval(this.timer),this.timer=void 0},e.prototype.onTimer=function(){if(this._eos)return u.logger.log("nothing to play");if(this.immediateSwitch&&this.immediateLevelSwitchEnd(),this.sb.lastLoadedUTC!==this.utcPrev&&!this._stalling&&(this.utcPrev=this.sb.lastLoadedUTC,this.onProgress))try{this.onProgress(this.sb.lastLoadedUTC)}catch(e){console.error(a.errorMsg(e))}},e.prototype.onMediaSourceEnded=function(){u.logger.log("media source ended");try{this.opts.onEOS&&this.opts.onEOS()}catch(e){console.error("error while proccessing onEOS")}},e.prototype.onMediaSourceClose=function(){u.logger.log("media source closed")},e}();t.default=y,e.exports=t.default},function(e,t,r){r(19),e.exports=r(1).Array.find},function(e,t,r){"use strict";var n=r(20),o=r(32)(5),i=!0;"find"in[]&&Array(1).find(function(){i=!1}),n(n.P+n.F*i,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(41)("find")},function(e,t,r){var n=r(0),o=r(1),i=r(4),s=r(27),a=r(10),u=function(e,t,r){var c,h,f,l,p=e&u.F,d=e&u.G,m=e&u.S,g=e&u.P,v=e&u.B,y=d?n:m?n[t]||(n[t]={}):(n[t]||{}).prototype,S=d?o:o[t]||(o[t]={}),E=S.prototype||(S.prototype={});for(c in d&&(r=t),r)f=((h=!p&&y&&void 0!==y[c])?y:r)[c],l=v&&h?a(f,n):g&&"function"==typeof f?a(Function.call,f):f,y&&s(y,c,f,e&u.U),S[c]!=f&&i(S,c,l),g&&E[c]!=f&&(E[c]=f)};n.core=o,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},function(e,t,r){var n=r(22),o=r(23),i=r(25),s=Object.defineProperty;t.f=r(5)?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n=r(2);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){e.exports=!r(5)&&!r(7)(function(){return 7!=Object.defineProperty(r(24)("div"),"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(2),o=r(0).document,i=n(o)&&n(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,r){var n=r(2);e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(0),o=r(4),i=r(28),s=r(8)("src"),a=r(29),u=(""+a).split("toString");r(1).inspectSource=function(e){return a.call(e)},(e.exports=function(e,t,r,a){var c="function"==typeof r;c&&(i(r,"name")||o(r,"name",t)),e[t]!==r&&(c&&(i(r,s)||o(r,s,e[t]?""+e[t]:u.join(String(t)))),e===n?e[t]=r:a?e[t]?e[t]=r:o(e,t,r):(delete e[t],o(e,t,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||a.call(this)})},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){e.exports=r(9)("native-function-to-string",Function.toString)},function(e,t){e.exports=!1},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){var n=r(10),o=r(33),i=r(34),s=r(36),a=r(38);e.exports=function(e,t){var r=1==e,u=2==e,c=3==e,h=4==e,f=6==e,l=5==e||f,p=t||a;return function(t,a,d){for(var m,g,v=i(t),y=o(v),S=n(a,d,3),E=s(y.length),b=0,_=r?p(t,E):u?p(t,0):void 0;E>b;b++)if((l||b in y)&&(g=S(m=y[b],b,v),e))if(r)_[b]=g;else if(g)switch(e){case 3:return!0;case 5:return m;case 6:return b;case 2:_.push(m)}else if(h)return!1;return f?-1:c||h?h:_}}},function(e,t,r){var n=r(11);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,r){var n=r(35);e.exports=function(e){return Object(n(e))}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){var n=r(37),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t,r){var n=r(39);e.exports=function(e,t){return new(n(e))(t)}},function(e,t,r){var n=r(2),o=r(40),i=r(12)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),n(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},function(e,t,r){var n=r(11);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){var n=r(12)("unscopables"),o=Array.prototype;null==o[n]&&r(4)(o,n,{}),e.exports=function(e){o[n][e]=!0}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getWSURL=c;var n=s(r(43)),o=s(r(6)),i=r(3);function s(e){return e&&e.__esModule?e:{default:e}}var a="live",u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.opts=t,this.init(),this.onwso=this.open.bind(this),this.onwsm=this.handleReceiveMessage.bind(this),this.onwse=this.handleError.bind(this)}return e.prototype.init=function(){this.opened=!1,this.connectionPromise=void 0},e.prototype.start=function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return this.connectionPromise=new Promise(function(s,a){var u=c(e,t,n,i);r.websocket=new WebSocket(u),r.websocket.binaryType="arraybuffer",r.websocket.addEventListener(o.default.WS_OPEN,r.onwso),r.websocket.addEventListener(o.default.WS_MESSAGE,r.onwsm),r.websocket.addEventListener(o.default.WS_ERROR,r.onwse),r._openingResolve=s,r._openingReject=a}),this.connectionPromise},e.prototype.open=function(){this.opened=!0,this._openingResolve(),this.resume(),this.websocket.removeEventListener(o.default.WS_OPEN,this.onwso)},e.prototype.send=function(e){this.websocket.send(e)},e.prototype.resume=function(){i.logger.log("ws: send resume"),this.websocket.send("resume")},e.prototype.pause=function(){i.logger.log("ws: send pause"),1===this.websocket.readyState&&this.websocket.send("pause")},e.prototype.seek=function(e){var t=e===a?"":"play_from=";i.logger.log(""+t+e),this.websocket.send(""+t+e)},e.prototype.setTracks=function(e,t){this.websocket.send("set_tracks="+e+t)},e.prototype.handleReceiveMessage=function(e){this.opts.message(e)},e.prototype.handleError=function(){var e;this.opts.error&&(e=this.opts).error.apply(e,arguments)},e.prototype.destroy=function(){this.websocket&&(this.pause(),this.websocket.removeEventListener(o.default.WS_MESSAGE,this.onwsm),this.websocket.onclose=function(){},this.websocket.close(),this.init())},e}();function c(e,t,r,o){var s=t;if(!s&&!r&&!o)return e;var u=(0,n.default)({url:e}),c="";u.query&&(c=u.query.split("&").map(function(e){return e.split("=")}).filter(function(e){return"from"!==e[0]&&"tracks"!==e[0]}).map(function(e){return e.join("=")}).join("&"),i.logger.log(c));var h=!!r||!!o;return u.protocol+"//"+u.host+u.pathname+"?"+(h?"tracks="+r+o:"")+(h&&s&&s!==a?"&":"")+(t===a?"":"from="+Math.floor(s))+((h||s&&s!==a)&&c?"&":"")+c}t.default=u},function(e,t,r){"use strict";
 */var n=r(44),o=n.parse,i=n.Url;function s(e){var t=e.url;if(void 0!==t){var r=e._parsedUrl;return u(t,r)?r:((r=a(t))._raw=t,e._parsedUrl=r)}}function a(e){if("string"!=typeof e||47!==e.charCodeAt(0))return o(e);for(var t=e,r=null,n=null,s=1;s<e.length;s++)switch(e.charCodeAt(s)){case 63:null===n&&(t=e.substring(0,s),r=e.substring(s+1),n=e.substring(s));break;case 9:case 10:case 12:case 13:case 32:case 35:case 160:case 65279:return o(e)}var a=void 0!==i?new i:{};return a.path=e,a.href=e,a.pathname=t,a.query=r,a.search=n,a}function u(e,t){return"object"==typeof t&&null!==t&&(void 0===i||t instanceof i)&&t._raw===e}e.exports=s,e.exports.original=function(e){var t=e.originalUrl;if("string"!=typeof t)return s(e);var r=e._parsedOriginalUrl;if(u(t,r))return r;return(r=a(t))._raw=t,e._parsedOriginalUrl=r}},function(e,t,r){"use strict";var n=r(45),o=r(48);function i(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=S,t.resolve=function(e,t){return S(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?S(e,!1,!0).resolveObject(t):t},t.format=function(e){o.isString(e)&&(e=S(e));return e instanceof i?e.format():i.prototype.format.call(e)},t.Url=i;var s=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,u=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),h=["'"].concat(c),f=["%","/","?",";","#"].concat(h),l=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,d=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},v={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=r(49);function S(e,t,r){if(e&&o.isObject(e)&&e instanceof i)return e;var n=new i;return n.parse(e,t,r),n}i.prototype.parse=function(e,t,r){if(!o.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var i=e.indexOf("?"),a=-1!==i&&i<e.indexOf("#")?"?":"#",c=e.split(a);c[0]=c[0].replace(/\\/g,"/");var S=e=c.join(a);if(S=S.trim(),!r&&1===e.split("#").length){var E=u.exec(S);if(E)return this.path=S,this.href=S,this.pathname=E[1],E[2]?(this.search=E[2],this.query=t?y.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var b=s.exec(S);if(b){var _=(b=b[0]).toLowerCase();this.protocol=_,S=S.substr(b.length)}if(r||b||S.match(/^\/\/[^@\/]+@[^@\/]+/)){var w="//"===S.substr(0,2);!w||b&&g[b]||(S=S.substr(2),this.slashes=!0)}if(!g[b]&&(w||b&&!v[b])){for(var O,M,T=-1,k=0;k<l.length;k++){-1!==(A=S.indexOf(l[k]))&&(-1===T||A<T)&&(T=A)}-1!==(M=-1===T?S.lastIndexOf("@"):S.lastIndexOf("@",T))&&(O=S.slice(0,M),S=S.slice(M+1),this.auth=decodeURIComponent(O)),T=-1;for(k=0;k<f.length;k++){var A;-1!==(A=S.indexOf(f[k]))&&(-1===T||A<T)&&(T=A)}-1===T&&(T=S.length),this.host=S.slice(0,T),S=S.slice(T),this.parseHost(),this.hostname=this.hostname||"";var I="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!I)for(var j=this.hostname.split(/\./),P=(k=0,j.length);k<P;k++){var x=j[k];if(x&&!x.match(p)){for(var U="",R=0,C=x.length;R<C;R++)x.charCodeAt(R)>127?U+="x":U+=x[R];if(!U.match(p)){var B=j.slice(0,k),D=j.slice(k+1),L=x.match(d);L&&(B.push(L[1]),D.unshift(L[2])),D.length&&(S="/"+D.join(".")+S),this.hostname=B.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),I||(this.hostname=n.toASCII(this.hostname));var N=this.port?":"+this.port:"",F=this.hostname||"";this.host=F+N,this.href+=this.host,I&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==S[0]&&(S="/"+S))}if(!m[_])for(k=0,P=h.length;k<P;k++){var q=h[k];if(-1!==S.indexOf(q)){var W=encodeURIComponent(q);W===q&&(W=escape(q)),S=S.split(q).join(W)}}var G=S.indexOf("#");-1!==G&&(this.hash=S.substr(G),S=S.slice(0,G));var V=S.indexOf("?");if(-1!==V?(this.search=S.substr(V),this.query=S.substr(V+1),t&&(this.query=y.parse(this.query)),S=S.slice(0,V)):t&&(this.search="",this.query={}),S&&(this.pathname=S),v[_]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){N=this.pathname||"";var H=this.search||"";this.path=N+H}return this.href=this.format(),this},i.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",i=!1,s="";this.host?i=e+this.host:this.hostname&&(i=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(s=y.stringify(this.query));var a=this.search||s&&"?"+s||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||v[t])&&!1!==i?(i="//"+(i||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):i||(i=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),t+i+(r=r.replace(/[?#]/g,function(e){return encodeURIComponent(e)}))+(a=a.replace("#","%23"))+n},i.prototype.resolve=function(e){return this.resolveObject(S(e,!1,!0)).format()},i.prototype.resolveObject=function(e){if(o.isString(e)){var t=new i;t.parse(e,!1,!0),e=t}for(var r=new i,n=Object.keys(this),s=0;s<n.length;s++){var a=n[s];r[a]=this[a]}if(r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var u=Object.keys(e),c=0;c<u.length;c++){var h=u[c];"protocol"!==h&&(r[h]=e[h])}return v[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!v[e.protocol]){for(var f=Object.keys(e),l=0;l<f.length;l++){var p=f[l];r[p]=e[p]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||g[e.protocol])r.pathname=e.pathname;else{for(var d=(e.pathname||"").split("/");d.length&&!(e.host=d.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),r.pathname=d.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var m=r.pathname||"",y=r.search||"";r.path=m+y}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var S=r.pathname&&"/"===r.pathname.charAt(0),E=e.host||e.pathname&&"/"===e.pathname.charAt(0),b=E||S||r.host&&e.pathname,_=b,w=r.pathname&&r.pathname.split("/")||[],O=(d=e.pathname&&e.pathname.split("/")||[],r.protocol&&!v[r.protocol]);if(O&&(r.hostname="",r.port=null,r.host&&(""===w[0]?w[0]=r.host:w.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===d[0]?d[0]=e.host:d.unshift(e.host)),e.host=null),b=b&&(""===d[0]||""===w[0])),E)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,w=d;else if(d.length)w||(w=[]),w.pop(),w=w.concat(d),r.search=e.search,r.query=e.query;else if(!o.isNullOrUndefined(e.search)){if(O)r.hostname=r.host=w.shift(),(I=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=I.shift(),r.host=r.hostname=I.shift());return r.search=e.search,r.query=e.query,o.isNull(r.pathname)&&o.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!w.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var M=w.slice(-1)[0],T=(r.host||e.host||w.length>1)&&("."===M||".."===M)||""===M,k=0,A=w.length;A>=0;A--)"."===(M=w[A])?w.splice(A,1):".."===M?(w.splice(A,1),k++):k&&(w.splice(A,1),k--);if(!b&&!_)for(;k--;k)w.unshift("..");!b||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),T&&"/"!==w.join("/").substr(-1)&&w.push("");var I,j=""===w[0]||w[0]&&"/"===w[0].charAt(0);O&&(r.hostname=r.host=j?"":w.length?w.shift():"",(I=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=I.shift(),r.host=r.hostname=I.shift()));return(b=b||r.host&&w.length)&&!j&&w.unshift(""),w.length?r.pathname=w.join("/"):(r.pathname=null,r.path=null),o.isNull(r.pathname)&&o.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},i.prototype.parseHost=function(){var e=this.host,t=a.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},function(e,t,r){(function(e,n){var o;/*! https://mths.be/punycode v1.4.1 by @mathias */!function(i){t&&t.nodeType,e&&e.nodeType;var s="object"==typeof n&&n;s.global!==s&&s.window!==s&&s.self;var a,u=2147483647,c=36,h=1,f=26,l=38,p=700,d=72,m=128,g="-",v=/^xn--/,y=/[^\x20-\x7E]/,S=/[\x2E\u3002\uFF0E\uFF61]/g,E={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},b=c-h,_=Math.floor,w=String.fromCharCode;function O(e){throw new RangeError(E[e])}function M(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}function T(e,t){var r=e.split("@"),n="";return r.length>1&&(n=r[0]+"@",e=r[1]),n+M((e=e.replace(S,".")).split("."),t).join(".")}function k(e){for(var t,r,n=[],o=0,i=e.length;o<i;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<i?56320==(64512&(r=e.charCodeAt(o++)))?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),o--):n.push(t);return n}function A(e){return M(e,function(e){var t="";return e>65535&&(t+=w((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=w(e)}).join("")}function I(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function j(e,t,r){var n=0;for(e=r?_(e/p):e>>1,e+=_(e/t);e>b*f>>1;n+=c)e=_(e/b);return _(n+(b+1)*e/(e+l))}function P(e){var t,r,n,o,i,s,a,l,p,v,y,S=[],E=e.length,b=0,w=m,M=d;for((r=e.lastIndexOf(g))<0&&(r=0),n=0;n<r;++n)e.charCodeAt(n)>=128&&O("not-basic"),S.push(e.charCodeAt(n));for(o=r>0?r+1:0;o<E;){for(i=b,s=1,a=c;o>=E&&O("invalid-input"),((l=(y=e.charCodeAt(o++))-48<10?y-22:y-65<26?y-65:y-97<26?y-97:c)>=c||l>_((u-b)/s))&&O("overflow"),b+=l*s,!(l<(p=a<=M?h:a>=M+f?f:a-M));a+=c)s>_(u/(v=c-p))&&O("overflow"),s*=v;M=j(b-i,t=S.length+1,0==i),_(b/t)>u-w&&O("overflow"),w+=_(b/t),b%=t,S.splice(b++,0,w)}return A(S)}function x(e){var t,r,n,o,i,s,a,l,p,v,y,S,E,b,M,T=[];for(S=(e=k(e)).length,t=m,r=0,i=d,s=0;s<S;++s)(y=e[s])<128&&T.push(w(y));for(n=o=T.length,o&&T.push(g);n<S;){for(a=u,s=0;s<S;++s)(y=e[s])>=t&&y<a&&(a=y);for(a-t>_((u-r)/(E=n+1))&&O("overflow"),r+=(a-t)*E,t=a,s=0;s<S;++s)if((y=e[s])<t&&++r>u&&O("overflow"),y==t){for(l=r,p=c;!(l<(v=p<=i?h:p>=i+f?f:p-i));p+=c)M=l-v,b=c-v,T.push(w(I(v+M%b,0))),l=_(M/b);T.push(w(I(l,0))),i=j(r,E,n==o),r=0,++n}++r,++t}return T.join("")}a={version:"1.4.1",ucs2:{decode:k,encode:A},decode:P,encode:x,toASCII:function(e){return T(e,function(e){return y.test(e)?"xn--"+x(e):e})},toUnicode:function(e){return T(e,function(e){return v.test(e)?P(e.slice(4).toLowerCase()):e})}},void 0===(o=function(){return a}.call(t,r,t,e))||(e.exports=o)}()}).call(this,r(46)(e),r(47))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},function(e,t,r){"use strict";t.decode=t.parse=r(50),t.encode=t.stringify=r(51)},function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,i){t=t||"&",r=r||"=";var s={};if("string"!=typeof e||0===e.length)return s;var a=/\+/g;e=e.split(t);var u=1e3;i&&"number"==typeof i.maxKeys&&(u=i.maxKeys);var c=e.length;u>0&&c>u&&(c=u);for(var h=0;h<c;++h){var f,l,p,d,m=e[h].replace(a,"%20"),g=m.indexOf(r);g>=0?(f=m.substr(0,g),l=m.substr(g+1)):(f=m,l=""),p=decodeURIComponent(f),d=decodeURIComponent(l),n(s,p)?o(s[p])?s[p].push(d):s[p]=[s[p],d]:s[p]=d}return s};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,r){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,a){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?i(s(e),function(s){var a=encodeURIComponent(n(s))+r;return o(e[s])?i(e[s],function(e){return a+encodeURIComponent(n(e))}).join(t):a+encodeURIComponent(n(e[s]))}).join(t):a?encodeURIComponent(n(a))+r+encodeURIComponent(n(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function i(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var s=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSelfScope=function(){return"undefined"==typeof window?self:window}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(13),o=r(3),i=r(14),s=r(6);var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o.logger.log("create BuffersController"),this.media=t.media,this.init(t),this.doArrayBuffer=n.doArrayBuffer.bind(this),this.maybeAppend=this.maybeAppend.bind(this),this.onSBUpdateEnd=this.onSBUpdateEnd.bind(this)}return e.prototype.init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.flushRange=[],this.appended=0,this.mediaSource=e.mediaSource,this.segments=[],this.sourceBuffer={}},e.prototype.setMediaSource=function(e){this.mediaSource=e},e.prototype.createSourceBuffers=function(e){var t=this,r=this.sourceBuffer;e.tracks.forEach(function(e){var n=e.content===i.VIDEO?'video/mp4; codecs="avc1.4d401f"':'audio/mp4; codecs="mp4a.40.2"';r[e.content]=t.mediaSource.addSourceBuffer(n),r[e.content].addEventListener(s.BUFFER_UPDATE_END,t.onSBUpdateEnd)})},e.prototype.onSBUpdateEnd=function(){this._needsFlush&&this.doFlush(),this._needsEos&&this.checkEos(),!this._needsFlush&&this.segments.length&&this.doArrayBuffer()},e.prototype.createTracks=function(e){var t=this;e.forEach(function(e){var r=(0,n.base64ToArrayBuffer)(e.payload),o={type:t.getTypeBytrackId(e.id),isInit:!0,data:r};t.maybeAppend(o)})},e.prototype.maybeAppend=function(e){if(this._needsFlush)this.segments.unshift(e);else{var t=this.sourceBuffer[e.type];t.updating?this.segments.unshift(e):(t.appendBuffer(e.data),this.appended++)}},e.prototype.setTracksByType=function(e){var t=this;e.tracks.forEach(function(e){t[e.content===i.VIDEO?"videoTrackId":"audioTrackId"]=e.id})},e.prototype.getTypeBytrackId=function(e){return this.audioTrackId===e?i.AUDIO:i.VIDEO},e.prototype.procArrayBuffer=function(e){var t=this.rawDataToSegmnet(e);this.segments.push(t),this.doArrayBuffer()},e.prototype.seek=function(){for(var e in this.sourceBuffer)this.sourceBuffer[e].abort(),this.sourceBuffer[e].mode="sequence";this.segments=[]},e.prototype.isBuffered=function(){var e=0,t=this.sourceBuffer;for(var r in t)e+=t[r].buffered.length;return e>0},e.prototype.doFlush=function(){for(;this.flushRange.length;){var e=this.flushRange[0];if(!this.flushBuffer(e.start,e.end,e.type))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var t=0,r=this.sourceBuffer;try{for(var n in r)t+=r[n].buffered.length}catch(e){console.error("error while accessing sourceBuffer.buffered")}this.appended=t,this._setTracksFlag=!1}},e.prototype.flushBuffer=function(e,t,r){var n=void 0,i=void 0,s=void 0,a=void 0,u=void 0,c=void 0,h=this.sourceBuffer;if(Object.keys(h).length){if(o.logger.log("flushBuffer,pos/start/end: "+this.media.currentTime.toFixed(3)+"/"+e+"/"+t),this.flushBufferCounter<this.appended){for(var f in h)if(!r||f===r){if((n=h[f]).ended=!1,n.updating)return o.logger.warn("cannot flush, sb updating in progress"),!1;try{for(i=0;i<n.buffered.length;i++)if(s=n.buffered.start(i),a=n.buffered.end(i),-1!==navigator.userAgent.toLowerCase().indexOf("firefox")&&t===Number.POSITIVE_INFINITY?(u=e,c=t):(u=Math.max(s,e),c=Math.min(a,t)),Math.min(c,a)-u>.5)return this.flushBufferCounter++,o.logger.log("flush "+f+" ["+u+","+c+"], of ["+s+","+a+"], pos:"+this.media.currentTime),n.remove(u,c),!1}catch(e){o.logger.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")}}}else o.logger.warn("abort flushing too many retries");o.logger.log("buffer flushed")}return!0},e.prototype.rawDataToSegmnet=function(e){var t=(0,n.RawDataToUint8Array)(e),r=(0,n.getTrackId)(t);return{type:this.getTypeBytrackId(r),data:t}},e.prototype.onBufferEos=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.sourceBuffer,r=e.type;for(var n in t)r&&n!==r||t[n].ended||(t[n].ended=!0,o.logger.log(n+" sourceBuffer now EOS"));this.checkEos()},e.prototype.checkEos=function(){var e=this.sourceBuffer,t=this.mediaSource;if(t&&"open"===t.readyState){for(var r in e){var n=e[r];if(!n.ended)return;if(n.updating)return void(this._needsEos=!0)}o.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");try{t.endOfStream()}catch(e){o.logger.warn("exception while calling mediaSource.endOfStream()")}this._needsEos=!1}else this._needsEos=!1},e.prototype.destroy=function(){this.init()},e}();t.default=a,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.EVENT_SEGMENT="event",t.MSE_INIT_SEGMENT="mse_init_segment",t.MSE_MEDIA_SEGMENT="mse_media_segment"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={NOT_HTML_MEDIA_ELEMENT:"media should be an HTMLMediaElement instance"},e.exports=t.default}])});