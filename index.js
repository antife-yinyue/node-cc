module.exports = function(req, res, next) {
  var app = req.app
  var options = [
    'compass', 'compile',
    '--no-line-comments',
    '--environment', app.get('env'),
    '--sass-dir', app.get('--sass-dir'),
    '--css-dir', app.get('--css-dir') || 'stylesheets',
    '--images-dir', app.get('--images-dir') || 'images'
  ]
  var lib

  if (lib = app.get('--require')) {
    options.push('--require', lib)
  }

  var compass = require('child_process').exec(
    options.join(' '),
    { cwd: process.cwd() + '/public' },
    function(err, stdout, stderr) {
      console.log(err == null ? stdout : stderr)
    }
  )

  compass.on('exit', function() {
    return next()
  })
}
