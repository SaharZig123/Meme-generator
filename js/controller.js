const gElCanvas = document.getElementById('my-canvas')
const gCtx = gElCanvas.getContext('2d')

const elMain = document.querySelector('.main-content')
const elEditor = document.querySelector('.meme-editor')

const meme = getMemeObject()
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
  let x = gElCanvas.width / 2
  let fontSizes = getFontSizes()
  console.log(fontSizes)
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = 'white'

  gCtx.textAlign = 'center'
  if (meme.selectedLineIdx === 0) {
    gCtx.font = `${fontSizes[0]}px Impact`
    gCtx.fillText(text, x, 50 + meme.lines[0].hight)
    gCtx.strokeText(text, x, 50 + meme.lines[0].hight)
    if (meme.lines[1]) {
      gCtx.font = `${fontSizes[1]}px Impact`
      gCtx.fillText(meme.lines[1].txt, x, 400 + meme.lines[1].hight)
      gCtx.strokeText(meme.lines[1].txt, x, 400 + meme.lines[1].hight)
    }
  } else if (meme.selectedLineIdx === 1) {
    gCtx.font = `${fontSizes[0]}px Impact`
    gCtx.fillText(meme.lines[0].txt, x, 50 + meme.lines[0].hight)
    gCtx.strokeText(meme.lines[0].txt, x, 50 + meme.lines[0].hight)
    gCtx.font = `${fontSizes[1]}px Impact`
    gCtx.fillText(text, x, 400 + meme.lines[1].hight)
    gCtx.strokeText(text, x, 400 + meme.lines[1].hight)
  }
}

function onAddText(textInput) {
  addText(textInput)
  drawImg(textInput)
}

function onIncreaseTextSize() {
  increaseTextSize()
  drawImg(meme.lines[meme.selectedLineIdx].txt)
}

function onDecreaseTextSize() {
  decreaseTextSize()
  drawImg(meme.lines[meme.selectedLineIdx].txt)
}

function onTextUp() {
  meme.lines[meme.selectedLineIdx].hight -= 2
  drawImg(meme.lines[meme.selectedLineIdx].txt)
}

function onTextDown() {
  meme.lines[meme.selectedLineIdx].hight += 2
  drawImg(meme.lines[meme.selectedLineIdx].txt)
}

function onAddLine() {
  if (meme.lines.length === 2) return
  addNewLine()
  let elSecondInput = document.querySelector('[name=text-line2]')
  elSecondInput.hidden = false
  meme.selectedLineIdx = 1
  drawImg(elSecondInput.placeholder)
}

function onSwitchLines() {
  switchLines()
}

function onClickInput(lineId) {
  console.log(lineId)
  setSelectedLine(lineId)
}
