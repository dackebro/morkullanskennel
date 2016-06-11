function Item(props) {
  var {cont} = props;

  return (
    <div id={cont.itemId} className="item">
      <h1>{cont.itemTitle}</h1>
      <hr></hr>
      {
        cont.itemText.map(elem => (
            <span className="itemText">
              {elem}
            </span>
        ))
      }
    </div>
  )
}

module.exports = Item
