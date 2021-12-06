var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRoutes = require('./routes/index')
var comicRoutes = require('./routes/comicRoutes')
var mangaRoutes = require('./routes/mangaRoutes')
var animeRoutes = require('./routes/animeRoutes')

var app = express();


// connect to db

let mongoose = require('mongoose')
const dbURI = 'mongodb+srv://inventory:inventory123456@inventory.wbfsg.mongodb.net/inventory?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => console.log('Connected to db'))
    .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes)
app.use('/inventory/comics', comicRoutes)
app.use('/inventory/manga', mangaRoutes)
app.use('/inventory/anime', animeRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
