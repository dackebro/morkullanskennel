class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var path = window.location.pathname;
    var siteCont = getSiteCont(path); //an array of all items under current url

    return (
      <div>
        {siteCont.map((cont, index) => (
          <div className="itemContainer" key={index}>
            <Item cont={cont}
                  path={path} />
          </div>
        ))}
      </div>
    )
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    var props = this.props;
    return (
      <div id={props.cont.itemId} className="item" key={props.cont.itemId}>
        {props.cont.itemTitle == undefined ? '' : <h1>{props.cont.itemTitle}</h1>}
        {props.cont.itemTitle == undefined ? '' : <hr></hr>}
        {props.cont.itemText == undefined ? '' :
          props.cont.itemText.map((elem, index) => (
            <span className={"itemText" +
                    (index == 0 ?
                      " itemTextTop"
                    : (index == props.cont.itemText.length - 1 ?
                      " itemTextBottom"
                    : ""))
                  }
                  dangerouslySetInnerHTML={{__html: elem}}
                  key={index} />
          ))
        }
        {props.cont.itemImgs == undefined ? '' :
          props.cont.itemImgs.map((imgCont, index) => (
            <div key={index}>
              {index == 0 && props.cont.itemText == undefined ? '' : <hr></hr>}
              <ImgItem  imgCont={imgCont}
                        path={props.path}/>
            </div>
          ))
        }
      </div>
    )
  }
}

class ImgItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  imgThumbClasses(imgCount, index) {
    var thumbName = "thumb" + imgCount + "imgs";
    var left = " " + thumbName + "Left";
    var right = " " + thumbName + "Right";
    var add = "";

    if (imgCount == 1) {

    } else if (index == 0) {
      add = left;
    } else if (index == imgCount - 1) {
      add = right;
    }

    return thumbName + add;
  }

  render() {
    var props = this.props;
    var imgCount = props.imgCont.imgCount;
    var imgs = props.imgCont.imgs;
    var title = props.imgCont.imgTitle;
    var path = (props.path == '/' ? '/main/' : props.path);

    return (
      <div className="imgItemContainer">
        {title == undefined ? '' : <div className="imgTitle">{title}</div>}
        {imgs.map(({img,desc}, index) => (
          img === "NO_IMAGE" ? (
            <div className={this.imgThumbClasses(imgCount, index)} key={index}>
              <span className={"thumb" + imgCount + "imgsRescale"}></span>
            </div>
          ) : (
            <div className={this.imgThumbClasses(imgCount, index)} key={index}>
              <div className="imgCenterOuter">
                <a href={'/imgs' + path + img}>
                  <img src={'/imgs' + path + img.substring(0, img.lastIndexOf('.')) + 'Thumb' + img.substring(img.lastIndexOf('.'), img.length)}
                      className={"imgThumb " + "thumb" + imgCount + "imgsRescale"}
                  />
                </a>
              </div>
              {desc == undefined ? '' : <div className={"thumbDesc thumbDesc" + imgCount + "imgs"}>{desc}</div>}
            </div>
          )
        ))}
      </div>
    )
  }
}



ReactDOM.render(
  <Main />,
  document.getElementById('container')
);
