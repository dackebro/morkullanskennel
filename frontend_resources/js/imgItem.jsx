function ImgItem(props) {
  var imgCount = props.imgCont.imgCount;
  var imgs = props.imgCont.imgs;
  var path = props.path;
  var imgindex;

  return (
    <div className="imgContainer">
      {thumb5imgs(imgCount, imgs, path)}
      {thumb3imgs(imgCount, imgs, path)}
      {thumb2imgs(imgCount, imgs, path)}
      {thumb1imgs(imgCount, imgs, path)}
    </div>
  );
}

function thumb5imgs(imgCount, imgs, path) {
  if (imgCount == 5) {
    return (imgs.map((img, index) => (
      <span className={"thumb5imgs" +
        (index == 0 ? " thumb5imgsleft" : (index == 4 ? " thumb5imgsright" : ""))
      }>
        <img src={'/imgs' + path + '/' + img + '.png'}/>
      </span>
    )))
  }
}

function thumb3imgs(imgCount, imgs, path) {
  if (imgCount == 3) {
    return (imgs.map((img, index) => (
      <span className={"thumb3imgs" +
        (index == 0 ? " thumb3imgsleft" : (index == 2 ? " thumb2imgsright" : ""))
      }>
        <img src={'/imgs' + path + '/' + img + '.png'}/>
      </span>
    )))
  }
}

function thumb2imgs(imgCount, imgs, path) {
  if (imgCount == 2) {
    return (imgs.map((img, index) => (
      <span className={"thumb2imgs" +
        (index == 0 ? " thumb2imgsleft" : (index == 1 ? " thumb2imgsright" : ""))
      }>
        <img src={'/imgs' + path + '/' + img + '.png'}/>
      </span>
    )))
  }
}

function thumb1imgs(imgCount, imgs, path) {
  if (imgCount == 1) {
    return (imgs.map((img, index) => (
      <span className={"thumb1imgs"}>
        <img src={'/imgs' + path + '/' + img + '.png'}/>
      </span>
    )))
  }
}

module.exports = ImgItem;
