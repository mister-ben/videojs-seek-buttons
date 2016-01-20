# videojs-seek-buttons

Plugin for video.js to add seek buttons to the control bar. Clicking the buttons seeks the video forward or back by the configured number of seconds.

### Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Inclusion](#inclusion)
- [Usage](#usage)
  - [Options](#options)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Install videojs-playlist via npm:

```sh
$ npm install videojs-seek-buttons
```

## Inclusion

Include videojs-seek-buttons on your website using the tool(s) of your choice.

The simplest method of inclusion is a `<script>` tag after the video.js `<script>` tag:

```html
<script src="path/to/video.js/dist/video.js"></script>
<script src="path/to/videojs-playlist/dist/videojs-seek-buttons.js"></script>
```

## Usage

```js
var player = videojs('video');

player.playlist([{
  forward: 20,
  back: 20
});
```

### Options

* `forward: n`: If `n` is a positive integer, a seek forward button is added that seeks `n` seconds.
* `back: n`: If `n` is a positive integer, a seek backward button is added that seeks `n` seconds.

## License

Apache-2.0. Copyright (c) Ben Clifford
