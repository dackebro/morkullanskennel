const contpath = '/cont';
const itemCollectionPath = '/items';


function getJSON(path) {
  var res = getSync(contpath + path);
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
  var purePath = path.substring(1);
  var siteCollection = getJSON(itemCollectionPath);
  var itemsURL = siteCollection[purePath];

  if (itemsURL == undefined) {
    //TODO: return could not find requested url page
    log('Could not find requested url');
  }

  var items = itemsURL.map(item => getJSON(path + '/' + item));

  return items;
}

module.exports = {
  getSiteCont
}


