const Products = require('../models/product')
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

exports.getEditProduct = async (req, res) => {
  const { productId } = req.params
  const product = await Product.getProduct(productId)
  return res.render('admin/edit-product', { product })
}

exports.editProduct = async (req, res) => {
  const data = req.body
  const id = req.params.productId
  const product = await Product.updateProduct(id, data)
  return res.redirect(`/admin/edit-product`)
}

exports.deleteProduct = async (req, res) => {
  const data = req.body
  const id = req.params.productId
  const product = await Product.deleteProduct(id, data)
  return res.redirect(`/admin/edit-product`)
}