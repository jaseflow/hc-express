var express = require('express'),
    jade = require('jade'),
    nib = require('nib'),
    stylus = require('stylus');

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

function compile(str, path) {
return stylus(str)
  .set('filename', path)
  .use(nib())
}

app.get('/', function(req, res){
  res.render('landing.jade');
});

app.get('/list', function(req, res){
  res.render('list.jade');
});

app.get('/u/username', function(req, res){
  res.render('charts.jade');
});

app.get('/u/username/chart', function(req, res){
  res.render('chart.jade');
});

app.get('/register', function(req, res){
  res.render('register.jade');
});

app.get('/login', function(req, res){
  res.render('login.jade');
});

app.get('/build', function(req, res){
  res.render('builder-options.jade');
});

app.get('/build/chart', function(req, res){
  res.render('builder-tool.jade');
});

app.get('/u/username/settings', function(req, res){
  res.render('settings.jade');
});


app.listen(8000);
console.log('Express app started on port %d', 8000);