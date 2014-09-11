# find-exec

[![Build Status](https://travis-ci.org/shime/find-exec.svg)](https://travis-ci.org/shime/find-exec)

Takes a list of shell commands and returns the first available.

## Examples

    $ which mplayer
    which: no mplayer

    $ which afplay
    /usr/bin/afplay

```javascript
var command = require('find-exec')(["mplayer", "afplay", "cvlc"])
console.log(command) // afplay
```

```javascript
require('find-exec')(["mplayer"]) // will throw error, none of commands is available
```

## Installation

    npm install find-exec

## License

MIT
