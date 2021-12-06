const Comic = require('../models/comics')
const Anime = require('../models/anime')
const Manga = require('../models/manga')
const async = require('async')

const inventory_page = (req, res) => {
    async.parallel({
        findComic: function(callback) {
            Comic.find({}, callback)
        },
        findManga: function(callback) {
            Manga.find({}, callback)
        },
        findAnime: function(callback) {
            Anime.find({}, callback)
        }
     } ,
        function(err, result) {
            res.render('inventory', {title: "Home", result})
        }
    )
}


module.exports = inventory_page