const express = require('express')
const router = express.Router()

const adminController = require('../controllers/adminController')


router.get('/add-product', adminController.index)

router.post('/add-product', adminController.addProduct)

module.exports = router