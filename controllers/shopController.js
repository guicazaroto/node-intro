const Product = require('../models/product')
const Cart = require('../models/cart')

exports.index = async (req, res) => {
  const list = await Product.fetchAll()
  return res.render('shop/product-list', { products: list })
}

exports.getCarts = (req, res) => {
  return res.render('shop/cart')
}

exports.getProductDetail = async (req, res) => {
  const { productId } = req.params
  const product = await Product.getProduct(productId)
  return res.render('shop/product-detail', { product })
}

exports.addToCart = (req, res) => {
  const { productId } = req.body
  Cart.addProduct(productId)
  return res.redirect(302, '/cart')
}