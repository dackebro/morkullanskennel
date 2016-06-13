var Item = require('./item.jsx');
var t = require('./tools.js');

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var source = 'template'; //TODO: should be a parameter somehow
    var cont = t.getCont(source); //currently the content of one item in .json

    return (
      <div id="itemContainer">
        <Item cont={cont} />
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('container')
);
