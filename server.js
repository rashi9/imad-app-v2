var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:'article one|rashi agarwal',
    heading:'article one',
    date:'march 4,2017',
    content: ` <p>
                My name is rashi agarwal.
            </p>
            <p>
                I like to paint. I study in kjsce.
            </p>`
};
function createTemplate(data) {
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;

var htmlTemplate = `<html>
  <head>
      <title>
        ${title}
      </title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <style>
          .container{
              max-width:800px;
              margin:0 auto;
              color:red;
              font-family:monotype corsiva;
              padding-top:60px;
              padding-left:20px;
              padding-right:20px;
              
          }
      </style>
  </head>  
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <h3>
           ${heading}
        </h3>
        <div>
       ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
    
</html>

`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
     res.send(createTemplate(articleone));
});
app.get('/article-two', function (req, res) {
      res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
      res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
