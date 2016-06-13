var contpath = '/cont/';


function getCont(source) {
  var path = contpath + source;
  var res = getSync(path);
  return JSON.parse(res);
}

function getSync(path) {
  var res;
  var request = new XMLHttpRequest();
  request.open('GET', path, false); //false parameter makes the request sync
  request.send(null);
  if (request.status === 200) {
    res = request.responseText;
  } else {
    //TODO: fix something here in case something breaks
  }
  return res;
}

module.exports = {
  getCont,
  getSync
}


