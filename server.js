/**
 * @author Erik Dackebro <erik.dackebro@gmail.com>
 * @license The MIT License (MIT) <https://opensource.org/licenses/MIT>
 * @copyright Copyright (c) 2016 Erik Dackebro
 * @since 2016-06-09
 * @version 0.1
 */

var app         = require('express')();
var http        = require('http');
var fs          = require('fs');
var browserify  = require('browserify-middleware');

var server    = http.Server(app);
var bpath     = './backend_resources/';
var fpath     = '/frontend_resources/';
var conn      = JSON.parse(fs.readFileSync(bpath + 'connection_settings.json'));



app.get('/', function(req, res) {
  log('Processing        ' + req.url);
  res.sendFile(__dirname + '/index.html');
  log('Processed request ' + req.url + '\n');
});

//app.get('/js/bundle.js',browserify(__dirname + '/fpath_resources/js/main.jsx'));

app.get('/js/bundle.js', function(req, res) {
  log('Processing        ' + req.url);
  res.sendFile(__dirname + fpath +  'js/main.jsx');
  //res.send(browserify(__dirname + '/fpath_resources/js/main.jsx'));
  log('Processed request ' + req.url + '\n');
});

app.get('/js/*', function(req, res) {
  log('Processing        ' + req.url);
  res.sendFile(__dirname + fpath +  req.url);
  log('Processed request ' + req.url + '\n');
})

app.get('/style/*.css', function(req, res) {
  log('Processing        ' + req.url);
  res.sendFile(__dirname + fpath + req.url);
  log('Processed request ' + req.url + '\n');
});

app.get('/cont/*', function(req, res) {
  log('Processing        ' + req.url);
  res.sendFile(__dirname + fpath + 'cont/item_template.json');
  log('Processed request ' + req.url);
  log('Sent data:\n' + fs.readFileSync(__dirname + fpath + 'cont/item_template.json') + '\n');
});



/**
 * Start the server.
 * @param {number} conn.PORT The port to listen to
 * @param {server~onListenSuccess} callback Callback handling the success of server.listen
 */
server.listen(conn.PORT, function() {
  log('Server listening on: http://' + conn.url + ':' + conn.PORT + '/');
});








/**
 * So i don't have to write console.log each time
 * @param input Data to log
 */
function log(input) {
  console.log(input);
}

/**
 * Print on what adress and port we're listening
 * @callback server~onListenSuccess
 */
