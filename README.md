stitch-haml-coffee
===========

Adds [Haml Coffee](https://github.com/netzpirat/haml-coffee) support for [Stitch](https://github.com/sstephenson/stitch).

## Installation

Haml Coffee is available in NPM and can be installed with:

```bash
$ npm install haml-coffee
```

## Usage

```coffeescript
stitch = require 'stitch'
require 'stitch-haml-coffee'
fs = require 'fs'

bundle = stitch.createPackage paths: ['models/', 'views/']
bundle.compile (err, source) ->
  fs.writeFile 'app.js', source, (err) ->
    if (err)
    	throw err
    console.log 'Compiled!'
```

Heavily inspired by [stitch-jade](http://https://github.com/kaptajnen/stitch-jade).

## Authors

* [Jonas Thiel](https://github.com/jnbt)

## Contributors

See all contributors on [the contributor page](https://github.com/jnbt/stitch-haml-coffee/contributors).

## License

(The MIT License)

Copyright (c) 2013 Jonas Thiel

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

