const express = require('express')
const router = express.Router()
const mangaController = require('../controllers/mangaController')


router.get('/', mangaController.manga_mainPage)
router.get('/create', mangaController.manga_create_get)
router.post('/', mangaController.manga_create_post)
router.get('/:id', mangaController.manga_details)
router.delete('/:id', mangaController.manga_delete)

module.exports = router