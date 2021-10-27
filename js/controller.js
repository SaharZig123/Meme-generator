var gElCanvas = document.getElementById('my-canvas')
var gCtx = gElCanvas.getContext('2d')

var elMain = document.querySelector('.main-content')
var elEditor = document.querySelector('.meme-editor')

var gCurrImg

function onSelectImg(imgId) {
  let elPlaceHolder = document.querySelector('[name=text-line]').placeholder
  gCurrImg = getSelectedImg(imgId)
  drawImg(elPlaceHolder)
  elMain.hidden = true
  elEditor.hidden = false
}

function drawImg(text) {
  let selectedImg = gCurrImg
  let img = new Image()
  img.src = selectedImg.url
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(text)
  }
}

function drawText(text) {
  let meme = getMemeObject()
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = 'white'
  gCtx.font = `${getFontSize()}px Impact`
  gCtx.fillText(text, 50, 50 + meme.lines[0].hight)
  gCtx.strokeText(text, 50, 50 + meme.lines[0].hight)
}

function onAddText(textInput) {
  addText(textInput)
  drawImg(textInput)
}

function onIncreaseTextSize() {
  let meme = getMemeObject()
  increaseTextSize()
  drawImg(meme.lines[0].txt)
}

function onDecreaseTextSize() {
  let meme = getMemeObject()
  decreaseTextSize()
  drawImg(meme.lines[0].txt)
}

function onTextUp() {
  let meme = getMemeObject()
  meme.lines[0].hight -= 2
  drawImg(meme.lines[0].txt)
}

function onTextDown() {
  let meme = getMemeObject()
  meme.lines[0].hight += 2
  drawImg(meme.lines[0].txt)
}
