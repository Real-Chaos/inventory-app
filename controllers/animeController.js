// anime_mainPage, anime_detail

const Anime = require('../models/anime')
const Genre = require('../models/genre')

const anime_mainPage = (req, res) => {
    Anime.find()
        .then(result => res.render('./anime/animeMainPage', {title: "Anime", anime: result}))
        .catch(err => console.log(err))
}   


const anime_details = (req, res) => {
    const id = req.params.id
    Anime.findById(id)
        .then(results => {
            res.render('./anime/animeDetails', {details: results})
        })
        .catch(err => console.log(err))
}

const anime_delete = (req, res) => {
    const id = req.params.id
    Anime.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: "/inventory/anime" })
        })
        .catch(err => console.log9err)
}


const anime_create_get = (req, res) => {
    Genre.find()
        .then(result => {
            res.render('./anime/animeForm', {genres: result})
        })
        .catch(err => console.log(err))
}

const anime_create_post = (req, res) => {
    const anime = new Anime(req.body)

    anime.save()
        .then(result => {
            res.redirect('/inventory/anime')
        })
        .catch(err => console.log(err))
}

module.exports = {
    anime_mainPage,
    anime_details,
    anime_delete,
    anime_create_get,
    anime_create_post
}