const express = require('express')
const router = express.Router()
const animeController = require('../controllers/animeController')


router.get('/', animeController.anime_mainPage)
router.get('/create', animeController.anime_create_get)
router.post('/', animeController.anime_create_post)
router.get('/:id', animeController.anime_details)
router.delete('/:id', animeController.anime_delete)

module.exports = router