var mongoose = require('mongoose');
var Schema = mongoose.Schema

const MangaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mangaka: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    chapters: {
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

const Manga = mongoose.model('Manga', MangaSchema)
module.exports = Manga;