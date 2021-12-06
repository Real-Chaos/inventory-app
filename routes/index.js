const express = require('express')
const router = express.Router();
const inventory_page = require('../controllers/inventoryController')

router.get('/', (req, res) => {
    res.redirect('/inventory')
})

router.get('/inventory', inventory_page)


module.exports = router