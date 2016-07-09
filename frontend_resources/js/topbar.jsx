var t =         require('./tools.js');

class Topbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var {pages} = t.getJSON('/pages.json');

    return (
      <div>
        {
          pages.map(page => (
            <span className="topbarItem">
              <a href={page.href}>{page.displayName}</a>
            </span>
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
