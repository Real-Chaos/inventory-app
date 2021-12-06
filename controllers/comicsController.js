// comic_mainPage, comic_detail
const Comic = require('../models/comics')
const Genre = require('../models/genre')
const async = require('async')

const comic_mainPage = (req, res) => {
    Comic.find()
        .then(result => {
            res.render('./comics/comicsMainPage', {title: "Comics", comics: result})
        })
        .catch(err => console.log(err))
}


const comic_details_page = (req, res) => {
    Comic.findById(req.params.id)
        .then(result => res.render('./comics/comicDetail', {detail: result}))
        .catch(err => console.log(err))
}


const comic_delete = (req, res) => {
    const id = req.params.id

    Comic.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: "/inventory/comics"})
        })
        .catch(err => console.log(err))
}


const comic_create_get = (req, res) => {
    Genre.find()
        .then(result => {
            res.render('./comics/comicsForm', {genres: result})
        })
        .catch(err => console.log(err))
}

const comic_create_post = (req, res) => {
    const comic = new Comic(req.body)
    comic.save()
        .then(result => {
            res.redirect('/inventory/comics')
        })
        .catch(err => console.log(err))
}

const comic_update_get = (req, res) => {

    async.parallel({
        comic: function(callback) {
            Comic.findById(req.params.id).exec(callback)
        },
        genre: function(callback) {
            Genre.find(callback)
        }
    }, function(err, results) {
        res.render('./comics/comicUpdateForm', {data: results.comic, genres: results.genre})
    })
}

const comic_update_post = (req, res) => {
    const comic = new Comic({
        _id: req.params.id,
        name: req.body.name,
        authorName: req.body.authorName,
        chapters: req.body.chapters,
        coverUrl: req.body.coverUrl,
        urlTo: req.body.urlTo,
        mangaType:req.body.mangaType,
        ratings: req.body.ratings,
        summary: req.body.summary,
        genre: req.body.genre
    })
    Comic.findByIdAndUpdate(req.params.id, comic, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.redirect(`/inventory/comics/${req.params.id}`)
        }
    })
}

module.exports = {
    comic_mainPage,
    comic_details_page,
    comic_delete,
    comic_create_get,
    comic_create_post,
    comic_update_get,
    comic_update_post
}


