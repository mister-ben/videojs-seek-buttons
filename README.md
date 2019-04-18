# videojs-seek-buttons

Plugin for video.js to add seek buttons to the control bar. These buttons allow the user to skip forward or back by a configured number of seconds.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Options](#options)
- [Usage](#usage)
  - [`<script>` Tag](#script-tag)
  - [Browserify/CommonJS](#browserifycommonjs)
  - [RequireJS/AMD](#requirejsamd)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
## Installation

```sh
npm install --save videojs-seek-buttons
```

## Options

* `forward` - if a number greater than 0, a seek forward button will be added which seeks that number of seconds
* `back` - if a number greater than 0, a seek back button will be added which seeks that number of seconds

## Usage

To include videojs-seek-buttons on your website or web application, use any of the following methods to include the script.

You also need to include the plugin's CSS.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<link rel="stylesheet" href="//path/to/videojs-seek-buttons.css">
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-seek-buttons.min.js"></script>
<script>
  var player = videojs('my-video');

  player.seekButtons({
    forward: 30,
    back: 10
  });


// You could alternatively include the plugin in the setup options, e.g.
// var player = videojs('my-video', {
//   plugins: {
//     seekButtons: {
//       forward: 30,
//       back: 10
//     }
//   }
// });

</script>
```

The dist versions will be available from services which host npm packages such as jsdelivr:

* https://cdn.jsdelivr.net/npm/videojs-seek-buttons/dist/videojs-seek-buttons.min.js
* https://cdn.jsdelivr.net/npm/videojs-seek-buttons/dist/videojs-seek-buttons.css

### Browserify/CommonJS

When using with Browserify, install videojs-seek-buttons via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-seek-buttons');

var player = videojs('my-video');

player.seekButtons({
    forward: 30,
    back: 10
  });
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-seek-buttons'], function(videojs) {
  var player = videojs('my-video');

  player.seekButtons({
    forward: 30,
    back: 10
  });
});
```

## License

Apache-2.0. Copyright (c) mister-ben &lt;git@misterben.me&gt;


[videojs]: http://videojs.com/
