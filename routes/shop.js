const express = require('express')
const router = express.Router()

const shopController = require('../controllers/shopController')

router.get('/',  shopController.index)
router.get('/product/:productId', shopController.getProductDetail)
router.get('/cart', shopController.getCartProducts)
router.post('/cart/add', shopController.addToCart)
router.post('/cart/remove', shopController.removeFromCart)

module.exports = router