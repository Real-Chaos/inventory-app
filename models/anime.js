var mongoose = require('mongoose');
var Schema = mongoose.Schema

const AnimeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    episodes: {
        type: Number,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    coverUrl: {
        type: String,
        required: true
    },
    urlTo: {
        type: String,
        required: true
    }
}, {timestamps: true})


const Anime = mongoose.model('Anime', AnimeSchema)
module.exports = Anime;