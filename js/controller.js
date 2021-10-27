var gElCanvas = document.getElementById('my-canvas');
var gCtx = gElCanvas.getContext('2d');


function onSelectImg(imgId){
    getSelectedImg()
}

drawImg()


function drawImg(text) {
    var selectedImg=getSelectedImg()
    var img = new Image();
    img.src=selectedImg.url
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
      drawText(text)
    };
  }


  function drawText(text) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '40px Impact';
    gCtx.fillText(text, 50, 50);
    gCtx.strokeText(text, 50, 50);
  }

  function onAddText(textInput){
      addText(textInput)
      drawImg(textInput)
  }
