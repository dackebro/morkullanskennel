function getJSON(path) {
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

function getSiteCont(path) {
  path = (path == '/' ? '/main/' : path);
  var siteCollection = getJSON(path + 'itemCollection.json');

  if (siteCollection == undefined) {
    //TODO: return could not find requested url page
    console.log('Could not find requested url');
  }

  var items = siteCollection.items.map(item => getJSON(path + item));

  return items;
}
