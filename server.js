var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
      title:  'Article One | Sujan Rai',
      heading: 'Article One',
      date: 'Feb 17, 2017',
      content: `
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum in sem sit amet maximus. Proin egestas nisi vitae orci rhoncus porta. Sed nec finibus nisi. Suspendisse in interdum enim. Pellentesque id lacinia neque, nec dictum justo. Praesent quis nisi eget ex feugiat cursus. Aliquam vulputate mi dolor.
    
        Fusce eget sagittis mi. Proin scelerisque, ligula vitae venenatis auctor, metus metus ultrices ipsum, at vulputate arcu tortor et neque. Nunc sit amet sem posuere, suscipit nibh sit amet, pretium libero. Suspendisse vel egestas tellus, ac consequat metus. Integer ac elit eget lacus elementum sagittis at id sapien. Sed vitae neque non massa laoreet auctor at sed lacus. Ut rutrum facilisis augue, ac condimentum tellus dictum sit amet. Aliquam non suscipit augue, in bibendum nunc. Sed in pharetra felis. Nullam quis luctus mi. Maecenas fringilla tellus ac sem finibus tincidunt. Suspendisse at sollicitudin dui.
        
        Etiam sed dui nibh. Nunc sed massa at ipsum ultrices tempus. Etiam pellentesque turpis lorem, a varius nibh tincidunt quis. Nunc tincidunt vestibulum ex. Vestibulum vitae viverra sem. Nam facilisis sagittis dolor, vel faucibus turpis elementum ut. Praesent cursus justo in nibh euismod, feugiat placerat nulla tristique. Nunc cursus magna quis ullamcorper pellentesque. Quisque ac fringilla magna. Duis elementum malesuada lorem non euismod. Nulla pretium tristique lacus eu bibendum. Nunc eros tortor, tristique eget consequat nec, consectetur aliquet nisi.
        </p>
      `},
    'article-two':{
      title:  'Article Two | Sujan Rai',
      heading: 'Article Two',
      date: 'Feb 18, 2017',
      content: `
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum in sem sit amet maximus. Proin egestas nisi vitae orci rhoncus porta. Sed nec finibus nisi. Suspendisse in interdum enim. Pellentesque id lacinia neque, nec dictum justo. Praesent quis nisi eget ex feugiat cursus. Aliquam vulputate mi dolor.
    
        Fusce eget sagittis mi. Proin scelerisque, ligula vitae venenatis auctor, metus metus ultrices ipsum, at vulputate arcu tortor et neque. Nunc sit amet sem posuere, suscipit nibh sit amet, pretium libero. Suspendisse vel egestas tellus, ac consequat metus. Integer ac elit eget lacus elementum sagittis at id sapien. Sed vitae neque non massa laoreet auctor at sed lacus. Ut rutrum facilisis augue, ac condimentum tellus dictum sit amet. Aliquam non suscipit augue, in bibendum nunc. Sed in pharetra felis. Nullam quis luctus mi. Maecenas fringilla tellus ac sem finibus tincidunt. Suspendisse at sollicitudin dui.
        </p>
      `},
    'article-three':{
      title:  'Article Three | Sujan Rai',
      heading: 'Article Three',
      date: 'Feb 19, 2017',
      content: `
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum in sem sit amet maximus. Proin egestas nisi vitae orci rhoncus porta. Sed nec finibus nisi. Suspendisse in interdum enim. Pellentesque id lacinia neque, nec dictum justo. Praesent quis nisi eget ex feugiat cursus. Aliquam vulputate mi dolor.
        </p>
      `}
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content; 
    
    var htmlTemplate=`
        <html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
            <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
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

app.get('/:articleName', function(req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8881; // Use 8080 for local development because you might already have apache running on 80
app.listen(8881, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
