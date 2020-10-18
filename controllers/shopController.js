const Product = require('../models/product')

exports.index = async (req, res) => {
  const list = await Product.fetchAll()
  return res.render('shop/product-list', { products: list })
}

exports.getCarts = (req, res) => {
  return res.render('shop/cart')
}

exports.getProductDetail = (req, res) => {
  return res.render('shop/product-detail')
}