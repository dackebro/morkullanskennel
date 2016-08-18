var ImgItem =   require('./imgitem.jsx');

function Item(props) {

  return (
    <div id={props.cont.itemId} className="item">
      <h1>{props.cont.itemTitle}</h1>
      <hr></hr>
      {props.cont.itemText.map((elem, index) => (
        <span className={"itemText" +
                (index == 0 ?
                  " itemTextTop"
                : (index == props.cont.itemText.length - 1 ?
                  " itemTextBottom"
                : ""))
              }
              dangerouslySetInnerHTML={{__html: elem}} />
      ))}
      {props.cont.itemImgs.map(imgCont => (
        <div>
          <hr></hr>
          <ImgItem  imgCont={imgCont}
                    path={props.path}/>
        </div>
      ))}
    </div>
  )
}

module.exports = Item
