# is-playlist [![Build Status](https://travis-ci.org/itaisteinherz/is-playlist.svg?branch=master)](https://travis-ci.org/itaisteinherz/is-playlist)

> Check if an URL is a YouTube playlist


## Install

```
$ npm install is-playlist
```


## Usage

```js
const isPlaylist = require("is-playlist");

isPlaylist("https://www.youtube.com/playlist?list=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI");
//=> true

isPlaylist("https://youtu.be/BCQHnlnPusY?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV");
//=> true

isPlaylist("https://youtu.be/dQw4w9WgXcQ");
//=> false

isPlaylist("https://vimeo.com/channels/staffpicks/229370456");
//=> false
```


## API

### isPlaylist(url)

Checks if the given `url` is either a playlist (e.g. https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV) or a video that's part of a playlist (e.g. https://youtu.be/BCQHnlnPusY?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV).

#### url

Type: `string`

URL to check.


## License

MIT © [Itai Steinherz](https://github.com/itaisteinherz)
