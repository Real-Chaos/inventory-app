// manga_mainPage, manga_detail

const Manga = require('../models/manga')
const Genre = require('../models/genre')


const manga_mainPage = (req, res) => {
    Manga.find()
        .then(result => res.render('./manga/mangaMainPage', {title: "Manga" , manga: result}))
        .catch(err => console.log(err))
        
}

const manga_details = (req, res) => {
    const id = req.params.id
    Manga.findById(id)
        .then(results => {
            res.render('./manga/mangaDetails', {details: results})
        })
        .catch(err => console.log(err))
}

const manga_delete = (req, res) => {
    const id = req.params.id
    Manga.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: "/inventory/manga"})
        })
        .catch(err => console.log(err))
}

const manga_create_get = (req, res) => {
    Genre.find()
        .then(result => {
            res.render('./manga/mangaForm', {genres: result})
        })
        .catch(err => console.log(err))
}


const manga_create_post = (req, res) => {
    const manga = new Manga(req.body)

    manga.save()
        .then(result => {
            res.redirect('/inventory/manga')
        })
        .catch(err => console.log(err))
}

module.exports = {
    manga_mainPage,
    manga_details,
    manga_delete,
    manga_create_get,
    manga_create_post
}