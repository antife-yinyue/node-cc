## Installation

```bash
$ gem install compass
$ npm install node-cc
```

## Usage

```javascript
var app = require('express')()

app.configure('development', function() {
  // [required] The source directory where you keep your sass stylesheets.
  app.set('--sass-dir', __dirname + '/app/assets/stylesheets')

  // [optional] The target directory where you keep your css stylesheets.
  app.set('--css-dir', __dirname + '/public/stylesheets')

  // [optional] The directory where you keep your images.
  app.set('--images-dir', __dirname + '/public/images')

  // [optional] Require the given ruby LIBRARY before running commands.
  app.set('--require', __dirname + '/lib/ooxx.rb')

  app.use(require('node-cc'))
})
```

## License

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
