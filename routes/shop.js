const express = require('express')
const router = express.Router()

const shopController = require('../controllers/shopController')

router.get('/',  shopController.index)
router.get('/product/:productId', shopController.getProductDetail)
router.get('/cart', shopController.getCarts)
router.post('/add-to-cart', shopController.addToCart)

module.exports = router