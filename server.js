var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleOne : {
    title : 'Article One | Sushant Gulati',
    date: '14th August 2017',
    heading: 'Article One',
    content: `<p>This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.</p>
        
        
            <p>This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.</p>
        
        
            <p>This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.</p>
    `
},
    articleTwo: { 
        title : 'Article Two | Sushant Gulati',
        date: '15th August 2017',
        heading: 'Article Two',
        content:` <p> This is the content for my second article. </p>
    `},
    
    articleThree: {
        title : 'Article Three | Sushant Gulati',
        date: '16th August 2017',
        heading: 'Article Three',
        content: `<p>This is the content for my first article. </p>
    `}
    
};

function createTemplate (data) { 
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

var htmlTemplate=
  `<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>    
    <body>
        <div class= "container">
        <div>
            <a href= '/'>
              Home  
            </a>
        </div>
        
        <div>
            <hr/>
            <h3> ${heading} </h3>
        </div>
        
        <div>
            ${date}
        </div>
        <div>
        ${content}
        </div>
        </div>
    
    </body>
    
    </html>
    ;`;
return htmlTemplate;

}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res) {
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req, res) {
    res.send(createTemplate(articleTwo));
});

app.get('/article-three', function(req, res){
    res.send(createTemplate(articleThree));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
