import videojs from 'video.js';
import {version as VERSION} from '../package.json';

const Button = videojs.getComponent('Button');

// Default options for the plugin.
const defaults = {
  forwardIndex: 1,
  backIndex: 1
};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

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
const onPlayerReady = (player, options) => {

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
const seekButtons = function(options) {
  // document.sbInit++;
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
};

// Include the version number.
seekButtons.VERSION = VERSION;

/**
 * Button to seek forward/back
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Button
 * @class SeekToggle
 */
class SeekButton extends Button {
  constructor(player, options) {
    super(player, options);
    if (this.options_.direction === 'forward') {
      this.controlText(this.localize('Seek forward {{seconds}} seconds')
        .replace('{{seconds}}', this.options_.seconds));
    } else if (this.options_.direction === 'back') {
      this.controlText(this.localize('Seek back {{seconds}} seconds')
        .replace('{{seconds}}', this.options_.seconds));
    }
  }

  buildCSSClass() {
    /* Each button will have the classes:
       `vjs-seek-button`
       `skip-forward` or `skip-back`
       `skip-n` where `n` is the number of seconds
       So you could have a generic icon for "skip back" and a more
       specific one for "skip back 30 seconds"
    */
    return `vjs-seek-button skip-${this.options_.direction} ` +
      `skip-${this.options_.seconds} ${super.buildCSSClass()}`;
  }

  handleClick() {
    const now = this.player_.currentTime();

    if (this.options_.direction === 'forward') {
      this.player_.currentTime(now + this.options_.seconds);
    } else if (this.options_.direction === 'back') {
      this.player_.currentTime(now - this.options_.seconds);
    }
  }
}
// console.log('register component with', videojs.VERSION, videojs);
videojs.registerComponent('SeekButton', SeekButton);

// Register the plugin with video.js.
registerPlugin('seekButtons', seekButtons);

export default seekButtons;
