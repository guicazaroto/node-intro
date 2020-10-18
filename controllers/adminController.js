const Product = require('../models/product')

exports.index = (req, res) => {
  return res.render('admin/add-product')
}

exports.addProduct = (req, res) => {
  const { title, img, price } = req.body
  const item = new Product(title, img, price)
  item.save()
  res.redirect('/')
}

exports.editProduct = (req, res) => {
  res.render('admin/edit-product')
}
