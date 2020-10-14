const Product = require('../models/product')

exports.index = (req, res) => {
  return res.render('add-product')
}

exports.addProduct = (req, res) => {
  const item = new Product(req.body.product)
  item.save()
  res.redirect('/')
}
