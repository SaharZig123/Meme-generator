var gKeywords = { happy: 12, 'funny puk': 1 }
var gCurrIdxImg
var gImgs = [
  { id: 1, url: './meme-imgs/1.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 2, url: './meme-imgs/2.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 3, url: './meme-imgs/3.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 4, url: './meme-imgs/4.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 5, url: './meme-imgs/5.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 6, url: './meme-imgs/6.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 7, url: './meme-imgs/7.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 8, url: './meme-imgs/8.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 9, url: './meme-imgs/9.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 10, url: './meme-imgs/10.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 11, url: './meme-imgs/11.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 12, url: './meme-imgs/12.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 13, url: './meme-imgs/13.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 14, url: './meme-imgs/14.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 15, url: './meme-imgs/15.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 16, url: './meme-imgs/16.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 17, url: './meme-imgs/17.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 18, url: './meme-imgs/18.jpg', keywords: ['trump', 'angry', 'fake news'] },
]

var gMeme = {
  selectedImgId: gCurrIdxImg,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'Here is your text',
      size: 40,
      align: 'left',
      color: 'red',
      hight: 0,
    },
  ],
}

function getSelectedImg(imgId) {
  let imgIdx = gImgs.findIndex((img) => +imgId === img.id)
  gCurrIdxImg = imgIdx
  return gImgs[imgIdx]
}

function addText(text) {
  gMeme.lines[gMeme.selectedLineIdx].txt = text
  console.log(gMeme)
}

function getMemeObject() {
  return gMeme
}

function increaseTextSize() {
  gMeme.lines[gMeme.selectedLineIdx].size += 3
}

function decreaseTextSize() {
  gMeme.lines[gMeme.selectedLineIdx].size -= 3
}

function addNewLine() {
  let newLine = {
    txt: 'Here is your second text',
    size: 40,
    align: 'left',
    color: 'red',
    hight: 0,
  }
  gMeme.lines.push(newLine)
}

function switchLines() {
  meme.selectedLineIdx = meme.selectedLineIdx ? 0 : 1
}

function setSelectedLine(lineId) {
  gMeme.selectedLineIdx = +lineId
}
