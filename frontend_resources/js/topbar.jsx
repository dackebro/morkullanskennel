var t =         require('./tools.js');

class Topbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var {pages} = t.getJSON('/pages.json');

    return (
      <div className="topbarContainer">
        {
          pages.map(page => (
            <a href={page.href} className="topbarItem">
              {page.displayName}
            </a>
          ))
        }
      </div>
    )
  }
}

ReactDOM.render(
  <Topbar />,
  document.getElementById('topbar')
);
