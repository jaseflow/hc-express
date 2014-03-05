var express = require('express'),
    jade = require('jade');

var app = express();

app.configure(function() {
  app.set('port',process.env.PORT || 8000);
  app.set('views',__dirname + '/views');
  app.set('view engine', 'jade');
});

app.use(app.router);
app.use(express.static('public'));
app.use(express.errorHandler());
app.use(express.favicon("public/images/favicon.ico"));

app.get('/', function(req, res){
  res.render('index.jade');
});

app.get('/list', function(req, res){
  res.render('list.jade');
});

app.get('/user', function(req, res){
  res.render('user.jade');
});

app.listen(8000);
console.log('Express app started on port %d', 8000);