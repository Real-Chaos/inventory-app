const express = require('express')
const router = express.Router();
const comicsController = require('../controllers/comicsController')



router.get('/', comicsController.comic_mainPage)
router.get('/create', comicsController.comic_create_get)
router.post('/', comicsController.comic_create_post)
router.get('/:id', comicsController.comic_details_page)
router.post('/:id', comicsController.comic_update_post)
router.delete('/:id', comicsController.comic_delete)
router.get('/:id/update', comicsController.comic_update_get)

module.exports = router