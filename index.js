require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const shortenUrl = require('./data').shorten_URL
const getUrl = require('./data').getUrl
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.post('/api/shorturl', function(req, res) {

  // validate 'http://www.example.com' format
  let regex = /^http:\/\/\w*.com$/   

  let originalURL = req.body.url
  if(!regex.test(originalURL)){
    res.json({
      error: 'invalid url'
    })
  }
  else{
    res.json(shortenUrl(originalURL))
  }
  
});

app.get('/api/shorturl/:shorturl', (req, res)=>{
  let originalUrl = getUrl(req.params.shorturl)
  console.log(`short url: ${req.params.shorturl}, type: ${typeof req.params.shorturl} `)
  console.log('original url: ', typeof originalUrl)
  if(originalUrl){
    res.redirect(originalUrl)
  }
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
