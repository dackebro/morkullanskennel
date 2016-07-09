function ImgItem(props) {
  var imgCount = props.imgCont.imgCount;
  var imgs = props.imgCont.imgs;
  var path = props.path;

  return (
    <div className="imgContainer">
      {imgs.map((img, index) => (
        <span className={imgThumbClasses(imgCount, index)}>
          {img === "NO_IMAGE" ?
            (<span className={"thumb" + imgCount + "imgsRescale"}></span>)
          :
            (<a href={'/imgs' + path + '/' + img + '.png'}>
              <img src={'/imgs' + path + '/' + img + 'Thumb.png'}
                  className={"thumb" + imgCount + "imgsRescale"}
              />
            </a>)
          }
        </span>
      ))}
    </div>
  );
}

function imgThumbClasses(imgCount, index) {
  var thumbName = "thumb" + imgCount + "imgs";
  var left = " " + thumbName + "left";
  var right = " " + thumbName + "right";
  var add = "";

  if (imgCount == 1) {

  } else if (index == 0) {
    add = left;
  } else if (index == imgCount - 1) {
    add = right;
  }

  return "imgThumb " + thumbName + add;
}

module.exports = ImgItem;
