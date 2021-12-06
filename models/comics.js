var mongoose = require('mongoose');
const Schema = mongoose.Schema


var ComicSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    chapters: {
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
    },
    mangaType: {
        type: String,
        enum: ["Manhwa", "Manhua"],
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
}, {timestamps: true})


var Comic = mongoose.model('Comic', ComicSchema);
module.exports = Comic;