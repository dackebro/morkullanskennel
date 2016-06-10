class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="test">
        Some random shitty text to find out wether it works or not
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('container')
);