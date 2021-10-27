const gElCanvas = document.getElementById('my-canvas')
const gCtx = gElCanvas.getContext('2d')

const elMain = document.querySelector('.main-content')
const elEditor = document.querySelector('.meme-editor')

const meme = getMemeObject()
var gCurrImg

function onSelectImg(imgId) {
  gCurrImg = getSelectedImg(imgId)
  drawImg()
  elMain.hidden = true
  elEditor.hidden = false
}

function drawImg() {
  let selectedImg = gCurrImg
  let img = new Image()
  img.src = selectedImg.url
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText()
  }
}

function drawText() {
  let x = gElCanvas.width / 2
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = 'white'
  gCtx.textAlign = 'center'
  gCtx.font = `${meme.lines[0].size}px Impact`
  gCtx.fillText(meme.lines[0].txt, x, 50 + meme.lines[0].hight)
  gCtx.strokeText(meme.lines[0].txt, x, 50 + meme.lines[0].hight)
  if (meme.lines[1]) {
    gCtx.font = `${meme.lines[1].size}px Impact`
    gCtx.fillText(meme.lines[1].txt, x, 400 + meme.lines[1].hight)
    gCtx.strokeText(meme.lines[1].txt, x, 400 + meme.lines[1].hight)
  }
}

function onAddText(textInput) {
  addText(textInput)
  drawImg()
}

function onIncreaseTextSize() {
  increaseTextSize()
  drawImg()
}

function onDecreaseTextSize() {
  decreaseTextSize()
  drawImg()
}

function onTextUp() {
  meme.lines[meme.selectedLineIdx].hight -= 2
  drawImg()
}

function onTextDown() {
  meme.lines[meme.selectedLineIdx].hight += 2
  drawImg()
}

function onAddLine() {
  if (meme.lines.length === 2) return
  addNewLine()
  let elSecondInput = document.querySelector('[name=text-line2]')
  elSecondInput.hidden = false
  meme.selectedLineIdx = 1
  drawImg()
}

function onSwitchLines() {
  switchLines()
}

function onClickInput(lineId) {
  console.log(lineId)
  setSelectedLine(lineId)
}
