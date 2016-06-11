var Item = require('./item.jsx');

var contpath = '/cont/';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  getCont(source) {
    var path = contpath + source;
    var res = getSync(path);
    return JSON.parse(res);
  }

  render() {
    var source = 'template'; //TODO: should be a parameter somehow
    var cont = this.getCont(source); //currently the content of one item in .json

    return (
      <div id="test">
        <Item cont={cont} />
      </div>
    )
  }
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

ReactDOM.render(
  <Main />,
  document.getElementById('container')
);
