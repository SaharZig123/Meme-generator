var gElCanvas = document.getElementById('my-canvas')
var gCtx = gElCanvas.getContext('2d')

var elMain = document.querySelector('.main-content')
var elEditor = document.querySelector('.meme-editor')

var currImg

function onSelectImg(imgId) {
  let elPlaceHolder = document.querySelector('[name=text-line]').placeholder
  currImg = getSelectedImg(imgId)
  drawImg(elPlaceHolder)
  elMain.hidden = true
  elEditor.hidden = false
}

function drawImg(text) {
  let selectedImg = currImg
  let img = new Image()
  img.src = selectedImg.url
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(text)
  }
}

function drawText(text) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = 'white'
  gCtx.font = '40px Impact'
  gCtx.fillText(text, 50, 50)
  gCtx.strokeText(text, 50, 50)
}

function onAddText(textInput) {
  addText(textInput)
  drawImg(textInput)
}
