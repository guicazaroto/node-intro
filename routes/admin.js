const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../util/path')

const products = []

router.get('/add-product', (req, res) => {
  res.sendFile(path.join(rootDir,'view', 'add-product.html'))
})

router.post('/add-product', (req, res) => {
  products.push({ product: req.body.product })
  res.redirect('/')
})

exports.routes = router
exports.products = products