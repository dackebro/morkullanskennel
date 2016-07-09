var Item =      require('./item.jsx');
var Topbar =    require('./topbar.jsx');
var t =         require('./tools.js');

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var path = '/template'; //TODO: should be a parameter somehow
    var siteCont = t.getSiteCont(path); //an array of all items under current url

    return (
      <div>
        {
          siteCont.map(cont => (
            <div className="itemContainer">
              <Item cont={cont}
                    path={path} />
            </div>
          ))
        }
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('container')
);
