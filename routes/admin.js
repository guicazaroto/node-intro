const express = require('express')
const router = express.Router()

const adminController = require('../controllers/adminController')


router.get('/add-product', adminController.index)
router.post('/add-product', adminController.addProduct)
router.get('/edit-product', adminController.getProductList)
router.get('/edit-product/:productId', adminController.getEditProduct)
router.post('/edit-product/:productId', adminController.editProduct)
router.post('/remove-product/:productId', adminController.deleteProduct)

module.exports = router