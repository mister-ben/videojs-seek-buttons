import videojs from 'video.js';
import {version as VERSION} from '../package.json';

const Button = videojs.getComponent('Button');

// Default options for the plugin.
const defaults = {
  forwardIndex: 1,
  backIndex: 1
};

/**
 * Set up buttons when the player is ready.
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
 * Plugin init if ready or on ready
 *
 * @function seekButtons
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const seekButtons = function(options) {
  this.ready(() => {
    onPlayerReady(this, videojs.obj.merge(defaults, options));
  });
};

// Include the version number.
seekButtons.VERSION = VERSION;

/**
 * Button to seek forward/back
 *
 * @extends Button
 * @class SeekButton
 */
class SeekButton extends Button {
  /**
   * Constructor for class
   *
   * @param {Player|Object} player The player
   * @param {Object=} options Button options
   * @param {string} options.direction back or forward
   * @param {Int} options.seconds number of seconds to seek
   */
  constructor(player, options) {
    super(player, options);
    this.$('.vjs-icon-placeholder').classList.add('vjs-icon-replay');
    if (this.options_.direction === 'forward') {
      this.controlText(this.localize('Seek forward {{seconds}} seconds')
        .replace('{{seconds}}', this.options_.seconds));
    } else if (this.options_.direction === 'back') {
      this.controlText(this.localize('Seek back {{seconds}} seconds')
        .replace('{{seconds}}', this.options_.seconds));
    }
  }

  /**
   * Return button class names which include the seek amount.
   *
   * @return {string} css cass string
   */
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

  /**
   * Seek with the button's configured offset
   */
  handleClick() {
    const now = this.player_.currentTime();

    if (this.options_.direction === 'forward') {
      let duration = this.player_.duration();

      if (this.player_.liveTracker && this.player_.liveTracker.isLive()) {
        duration = this.player_.liveTracker.seekableEnd();
      }

      this.player_.currentTime(Math.min(now + this.options_.seconds, duration));
    } else if (this.options_.direction === 'back') {
      this.player_.currentTime(Math.max(0, now - this.options_.seconds));
    }
  }
}
videojs.registerComponent('SeekButton', SeekButton);

// Register the plugin with video.js.
videojs.registerPlugin('seekButtons', seekButtons);

export default seekButtons;
