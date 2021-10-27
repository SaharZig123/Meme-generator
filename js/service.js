var gKeywords = { happy: 12, 'funny puk': 1 }

var gImgs = [
  { id: 1, url: '/meme-imgs/1.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 2, url: '/meme-imgs/2.jpg', keywords: ['trump', 'angry', 'fake news'] },
  { id: 3, url: '/meme-imgs/3.jpg', keywords: ['trump', 'angry', 'fake news'] },
]

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: '',
      size: 20,
      align: 'left',
      color: 'red',
    },
  ],
}

function getSelectedImg(imgId) {
  let imgIdx = gImgs.findIndex((img) => +imgId === img.id)
  console.log(imgIdx)
  return gImgs[imgIdx]
}

function addText(text) {
  gMeme.lines[0].txt = text
  console.log(gMeme)
}
