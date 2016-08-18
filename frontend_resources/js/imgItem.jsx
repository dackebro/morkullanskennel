function ImgItem(props) {
  var imgCount = props.imgCont.imgCount;
  var imgs = props.imgCont.imgs;
  var path = props.path;

  return (
    <div className="imgItemContainer">
      {imgs.map(({img,desc}, index) => (
        img === "NO_IMAGE" ? (
          <div className={imgThumbClasses(imgCount, index)}>
            <span className={"thumb" + imgCount + "imgsRescale"}></span>
          </div>
        ) : (
          <div className={imgThumbClasses(imgCount, index)}>
            <div className="imgCenterOuter">
              <a href={'/imgs' + path + '/' + img + '.png'}>
                <img src={'/imgs' + path + '/' + img + 'Thumb.png'}
                    className={"imgThumb " + "thumb" + imgCount + "imgsRescale"}
                />
              </a>
            </div>
            <div className="thumbDesc">{desc}</div>
          </div>
        )
      ))}
    </div>
  );
}

function imgThumbClasses(imgCount, index) {
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

module.exports = ImgItem;
