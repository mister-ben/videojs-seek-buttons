/*! @name videojs-seek-buttons @version 2.2.0 @license Apache-2.0 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js')) :
	typeof define === 'function' && define.amd ? define(['video.js'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.videojsSeekButtons = factory(global.videojs));
}(this, (function (videojs) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var videojs__default = /*#__PURE__*/_interopDefaultLegacy(videojs);

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var setPrototypeOf = createCommonjsModule(function (module) {
	  function _setPrototypeOf(o, p) {
	    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	    return _setPrototypeOf(o, p);
	  }

	  module.exports = _setPrototypeOf;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var inheritsLoose = createCommonjsModule(function (module) {
	  function _inheritsLoose(subClass, superClass) {
	    subClass.prototype = Object.create(superClass.prototype);
	    subClass.prototype.constructor = subClass;
	    setPrototypeOf(subClass, superClass);
	  }

	  module.exports = _inheritsLoose;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var version = "2.2.0";

	var Button = videojs__default['default'].getComponent('Button'); // Default options for the plugin.

	var defaults = {
	  forwardIndex: 1,
	  backIndex: -1
	}; // Cross-compatibility for Video.js 5 and 6.

	var registerPlugin = videojs__default['default'].registerPlugin || videojs__default['default'].plugin; // const dom = videojs.dom || videojs;
	// document.sbInit = 0;
	// videojs.log('seek');
	// videojs.log(videojs === global.videojs);
	// videojs.log(videojs);
	// videojs.log(global.videojs);
	// videojs.log(document.body.querySelector('video'));

	/**
	 * Function to invoke when the player is ready.
	 *
	 * This is a great place for your plugin to initialize itself. When this
	 * function is called, the player will have its DOM and child components
	 * in place.
	 *
	 * @function onPlayerReady
	 * @param    {Player} player
	 *           A Video.js player object.
	 *
	 * @param    {Object} [options={}]
	 *           A plain object containing options for the plugin.
	 */

	var onPlayerReady = function onPlayerReady(player, options) {
	  player.addClass('vjs-seek-buttons');

	  if (options.forward && options.forward > 0) {
	    player.controlBar.seekForward = player.controlBar.addChild('seekButton', {
	      direction: 'forward',
	      seconds: options.forward
	    }, options.forwardIndex);
	  }

	  if (options.back && options.back > 0) {
	    player.controlBar.seekBack = player.controlBar.addChild('seekButton', {
	      direction: 'back',
	      seconds: options.back
	    }, options.backIndex);
	  }
	};
	/**
	 * A video.js plugin.
	 *
	 * In the plugin function, the value of `this` is a video.js `Player`
	 * instance. You cannot rely on the player being in a "ready" state here,
	 * depending on how the plugin is invoked. This may or may not be important
	 * to you; if not, remove the wait for "ready"!
	 *
	 * @function seekButtons
	 * @param    {Object} [options={}]
	 *           An object of options left to the plugin author to define.
	 */


	var seekButtons = function seekButtons(options) {
	  var _this = this;

	  // document.sbInit++;
	  this.ready(function () {
	    onPlayerReady(_this, videojs__default['default'].mergeOptions(defaults, options));
	  });
	}; // Include the version number.


	seekButtons.VERSION = version;
	/**
	 * Button to seek forward/back
	 *
	 * @extends Button
	 * @class SeekButton
	 */

	var SeekButton = /*#__PURE__*/function (_Button) {
	  inheritsLoose(SeekButton, _Button);

	  /**
	   * Constructor for class
	   *
	   * @param {Player|Object} player The player
	   * @param {Object=} options Button options
	   * @param {string} options.direction back or forward
	   * @param {Int} options.seconds number of seconds to seek
	   */
	  function SeekButton(player, options) {
	    var _this2;

	    _this2 = _Button.call(this, player, options) || this;

	    if (_this2.options_.direction === 'forward') {
	      _this2.controlText(_this2.localize('Seek forward {{seconds}} seconds').replace('{{seconds}}', _this2.options_.seconds));
	    } else if (_this2.options_.direction === 'back') {
	      _this2.controlText(_this2.localize('Seek back {{seconds}} seconds').replace('{{seconds}}', _this2.options_.seconds));
	    }

	    return _this2;
	  }
	  /**
	   * Return button class names which include the seek amount.
	   *
	   * @return {string} css cass string
	   */


	  var _proto = SeekButton.prototype;

	  _proto.buildCSSClass = function buildCSSClass() {
	    /* Each button will have the classes:
	       `vjs-seek-button`
	       `skip-forward` or `skip-back`
	       `skip-n` where `n` is the number of seconds
	       So you could have a generic icon for "skip back" and a more
	       specific one for "skip back 30 seconds"
	    */
	    return "vjs-seek-button skip-" + this.options_.direction + " " + ("skip-" + this.options_.seconds + " " + _Button.prototype.buildCSSClass.call(this));
	  }
	  /**
	   * Seek with the button's configured offset
	   */
	  ;

	  _proto.handleClick = function handleClick() {
	    var now = this.player_.currentTime();

	    if (this.options_.direction === 'forward') {
	      this.player_.currentTime(now + this.options_.seconds);
	    } else if (this.options_.direction === 'back') {
	      this.player_.currentTime(now - this.options_.seconds);
	    }
	  };

	  return SeekButton;
	}(Button); // console.log('register component with', videojs.VERSION, videojs);


	videojs__default['default'].registerComponent('SeekButton', SeekButton); // Register the plugin with video.js.

	registerPlugin('seekButtons', seekButtons);

	return seekButtons;

})));
