function Item(props) {
  var {cont} = props;

  return (
    <div id={cont.itemId} className="itemContainer">
      <h1>{cont.itemTitle}</h1>
      <hr></hr>
      <span className="itemText">
        {cont.itemText}
      </span>
    </div>
  )
}

module.exports = Item
