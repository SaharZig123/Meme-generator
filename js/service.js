var gKeywords = { happy: 12, 'funny puk': 1 }
var gCurrIdxImg
var gImgs = [
  { id: 1, url: '/meme-imgs/1.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 2, url: '/meme-imgs/2.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 3, url: '/meme-imgs/3.jpg', keywords: ['trump', 'angry', 'fake news'] },
]

var gMeme = {
  selectedImgId: gCurrIdxImg,
  selectedLineIdx: 0,
  lines: [
    {
      txt: '',
      size: 40,
      align: 'left',
      color: 'red',
      hight:0
    },
  ],
}

function getSelectedImg(imgId) {
  let imgIdx = gImgs.findIndex((img) => +imgId === img.id)
  gCurrIdxImg = imgIdx
  return gImgs[imgIdx]
}

function addText(text) {
  gMeme.lines[0].txt = text
  console.log(gMeme)
}

function getMemeObject() {
  return gMeme
}

function getFontSize() {
  return gMeme.lines[0].size
}

function increaseTextSize() {
  gMeme.lines[0].size += 3
}

function decreaseTextSize() {
  gMeme.lines[0].size -= 3
}


