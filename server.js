/**
 * @author Erik Dackebro <erik.dackebro@gmail.com>
 * @license The MIT License (MIT) <https://opensource.org/licenses/MIT>
 * @copyright Copyright (c) 2016 Erik Dackebro
 * @since 2016-06-09
 * @version 0.1
 */

var http    = require('http');
var fs      = require('fs');
var server;


var resources = './backend_resources/';
var conn      = JSON.parse(fs.readFileSync(resources + 'connection_settings.json'));

function log(input) {
  console.log(input);
}

function handle(req, res) {
    res.end('Hit path ' + req.url);
    log('Processed request ' + req.url);
}

//Initiate the server
server = http.createServer(handle);

/**
 * Start the server.
 * @param {number} conn.PORT The port to listen to
 * @param {server~onListenSuccess} callback Callback handling the success of server.listen
 */
server.listen(conn.PORT, function() {
  log('Server listening on: http://' + conn.url + ':' + conn.PORT);
});










/**
 * Print on what adress and port we're listening
 * @callback server~onListenSuccess
 */
