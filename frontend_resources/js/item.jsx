var ImgItem =   require('./imgitem.jsx');

function Item(props) {

  return (
    <div id={props.cont.itemId} className="item">
      <h1>{props.cont.itemTitle}</h1>
      <hr></hr>
      {
        props.cont.itemText.map(elem => (
            <span className="itemText">
              {elem}
            </span>
        ))
      }
      {
        props.cont.itemImgs.map(imgCont => (
          <div>
            <hr></hr>
            <ImgItem  imgCont={imgCont} 
                      path={props.path}/>
          </div>
        ))
      }
    </div>
  )
}

module.exports = Item
