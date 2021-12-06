var async = require('async')

var Comic = require('./models/comics')
var Manga = require('./models/manga')
var Genre = require('./models/genre')
var Anime = require('./models/anime')

var userArgs = process.argv.slice(2);
var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


function comicCreate(name, mangaType, summary, chapters, authorName, coverUrl, genre, ratings, urlTo, cb) {
  comicdetail = {name, mangaType, summary, chapters, authorName, coverUrl, genre, ratings, urlTo}
  
  var comic = new Comic(comicdetail);
       
  comic.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Comic: ' + comic);
    cb(null, comic)
  });
}

function mangaCreate(name, mangaka, summary, chapters, genre, ratings, coverUrl, urlTo, cb) {
  mangadetail = {name, mangaka, summary, chapters, genre, ratings, coverUrl, urlTo}

  var manga = new Manga(mangadetail)

  manga.save(err => {
    if(err) {
      cb(err, null)
      return
    }
    console.log('New Manga: ' + manga)
    cb(null, manga)
  })
}

function animeCreate(name, creator, summary, episodes, genre, ratings, coverUrl, urlTo, cb) {
  var anime = new Anime({name, creator, summary, episodes, genre, ratings, coverUrl, urlTo, cb})

  anime.save(err => {
    if(err) {
      cb(err, null)
      return
    }
    console.log('New Anime: ' + anime)
    cb(null, anime)
  })
}

function genreCreate(name, cb) {
    var genre = new Genre({ name: name });
         
    genre.save(function (err) {
      if (err) {
        cb(err, null);
        return;
      }
      console.log('New Genre: ' + genre);
      cb(null, genre);
    });
  }


function createComics(cb) {
  async.series([
      function(callback) {
          comicCreate('Nano Machine', 'Manhwa', 'A very good manhwa', 80, 'Han-Jong', "https://reaperscans.com/wp-content/uploads/2021/07/%C2%B3a%C2%B3e%C2%B8%C2%B6%C2%BDA_%C2%BDA%C2%B8%C2%AEAi_C%C2%A5Ao1000x1500_JPG-683x1024.jpg.webp", ['Action', 'Adventure'], 4.9, "https://reaperscans.com/series/nano-machine/", callback);
      }
    ], cb)
}

function createManga(cb) {
  async.series([
    function(callback) {
      mangaCreate("One piece", "Oda", "A very good manga", 1000, ['Action'], 4.0, "http://www.onepiecepodcast.com/wp-content/uploads/2019/09/94.jpg", "https://myonepiecemanga.com/",callback)
    }
  ], cb)
}

function createAnime(cb) {
  async.series([
    function(callback) {
      animeCreate("Naruto", "Masashi Kishimoto", "a very good anime", 600, ['Adventure'], 4.8, "http://2.bp.blogspot.com/-duOZ7atNbZo/T5nqc4yoZHI/AAAAAAAAANI/Z8sZtNZWq6E/s1600/naruto+cover+art+Volume+41.jpg", "https://www.crunchyroll.com/naruto", callback)
    }
  ], cb)
}

function createGenre(cb) {
  async.parallel([
    function(callback) {
      genreCreate('Action', callback)
    },
    function(callback) {
      genreCreate('Adventure', callback)
    }
  ], cb)
}




async.series([
  createComics,
  createManga,
  createAnime,
  createGenre
]);
