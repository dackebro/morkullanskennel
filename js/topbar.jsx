class Topbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="topbarContainer">
        {this.props.pages.pages.map(page => (
          <a href={page.href} className="topbarItem" key={page.displayName}>
            {page.displayName}
          </a>
        ))}
      </div>
    )
  }
}

ReactDOM.render(
  <Topbar pages={getJSON('/pages.json')} />,
  document.getElementById('topbar')
);
