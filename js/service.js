var gKeywords = { happy: 12, 'funny puk': 1 }

var gImgs = [{ id: 1, url: '/meme-imgs/1.jpg', keywords: ['trump', 'angry', 'fake news'] }]

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I never eat Falafel',
      size: 20,
      align: 'left',
      color: 'red',
    },
  ],
}

function getSelectedImg() {
  // let imgIdx=gImgs.findIndex((img)=>imgId=gImgs.id)
  return gImgs[0]
}

function getText() {
  return gMeme.lines[0].txt
}
