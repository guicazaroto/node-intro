const path = require('path')
const rootDir = require('../util/path')

const products = []

exports.index = (req, res) => {
  return res.render('add-product')
}

exports.addProduct = (req, res) => {
  products.push({ title: req.body.product })
  res.redirect('/')
}

exports.products = products

