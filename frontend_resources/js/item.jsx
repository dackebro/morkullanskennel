function Item(props) {
  var cont = props;

  return (
    <div id={cont.id} className="itemContainer">
      <h1>{cont.title}</h1>
      <hr></hr>
      <span className="itemText">
        {cont.text}
      </span>
    </div>
  )
}
