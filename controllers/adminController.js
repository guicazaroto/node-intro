const Product = require('../models/product')

exports.index = (req, res) => {
  return res.render('admin/add-product')
}

exports.addProduct = (req, res) => {
  const { title, img, price, description } = req.body
  const item = new Product(title, img, price, description)
  item.save()
  res.redirect('/')
}

exports.getProductList = async (req, res) => {
  const list = await Product.fetchAll()
  res.render('admin/product-list', { list })
}

exports.editProduct = async (req, res) => {
  const { productId } = req.params
  const product = await Product.getProduct(productId)
  console.log(product)
  return res.render('admin/edit-product', { product })
}
