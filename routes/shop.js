const express = require('express')
const router = express.Router()

const shopController = require('../controllers/shopController')

router.get('/',  shopController.index)
router.get('/products', shopController.getProductDetail)
router.get('/cart', shopController.getCarts)

module.exports = router