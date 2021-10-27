var gElCanvas = document.getElementById('my-canvas');
var gCtx = gElCanvas.getContext('2d');


function onSelectImg(imgId){
    getSelectedImg()
}

drawImg2()


function drawImg2() {
    var selectedImg=getSelectedImg()
    console.log(selectedImg)
    var img = new Image();
    img.src=selectedImg.url
    console.log(img.src)
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
      drawText()
    };
  }


  function drawText() {
  let memeText=getText()
  console.log(memeText)
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '40px Impact';
    gCtx.fillText(memeText, 50, 50);
    gCtx.strokeText(memeText, 50, 50);
  }
