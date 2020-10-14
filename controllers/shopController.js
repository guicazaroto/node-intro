const Product = require('../models/product')

exports.index = async (req, res) => {
  const list = await Product.fetchAll()
  return res.render('shop', { products: list })
}