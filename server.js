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
  res.sendFile(__dirname + '/index.html');
  log('');
  log('Processed ' + req.url);
});

app.get('/js/bundle.js', browserify(__dirname + fpath +  'js/main.jsx'));

app.get('/js/*', function(req, res) {
  res.sendFile(__dirname + fpath +  req.url);
  log('Processed ' + req.url);
})

app.get('/style/*.css', function(req, res) {
  res.sendFile(__dirname + fpath + req.url);
  log('Processed ' + req.url);
});

app.get('/cont/pages.json', function(req, res) {;
  res.sendFile(__dirname + fpath + req.url);
  log('Processed ' + req.url);
});

app.get('/cont/*/itemCollection.json', function(req, res) {
  res.sendFile(__dirname + fpath + req.url);
  log('Processed ' + req.url);
});

app.get('/cont/*/*', function(req, res) {;
  res.sendFile(__dirname + fpath + req.url);
  log('Processed ' + req.url);
});

app.get('/imgs/*/*', function(req, res) {
  res.sendFile(__dirname + fpath + req.url);
  log('Processed ' + req.url);
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
