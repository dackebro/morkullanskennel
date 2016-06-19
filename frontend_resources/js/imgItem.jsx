function ImgItem(props) {
  var imgCount = props.imgCont.imgCount;
  var imgs = props.imgCont.imgs;
  var path = props.path;
  var imgindex;
  console.log(path);

  return (
    <div className="imgContainer">
      {
        imgs.map((img, index) => (
          <span className={"thumb5imgs" +
            (index == 0 ? " thumb5imgsleft" : (index == 4 ? " thumb5imgsright" : ""))
          }>
            <img src={'/imgs' + path + '/' + img + '.png'}/>
          </span>
        ))
      }
    </div>
  );
}

module.exports = ImgItem;
