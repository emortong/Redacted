const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: true}))

const blacklist = (req, res, next) => {
  console.log(req.body.text);
  let blacklistedWords = {
    selfie : 'self-portrait',
    yummers : 'delicious',
    outchea : 'are out here',
    bruh : 'wow',
    doge : 'pug',
    cilantro : 'soap',
    bae : 'loved one',
    swag : 'style',
    yolo : 'carpe diem',
  }
  let words = req.body.text.split(' ');
  let newSentence = '';
  words.forEach((word) => {
    for(var prop in blacklistedWords) {;
      var search = new RegExp(prop,'i');
      if(word.match(search) !== null) {
        word = blacklistedWords[prop];
      }
    }
    newSentence += ` ${word}`;
  console.log(newSentence);
  })
  res.send(newSentence)
  next();
}


app.post('/', blacklist, (req, res) => {

})



if(!module.parent) {
  app.listen(4000, () => {
    console.log('Server started on port 4000')
  });
}