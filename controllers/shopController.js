const Product = require('../models/product')
const Cart = require('../models/cart')
const User = require('../models/user')

exports.index = async (req, res) => {  
  try {
    const products = await Product.findAll()
    return res.render('shop/product-list', { products })
  } catch(err) {
    console.log(err)
  }
}

exports.getCartProducts = async (req, res) => {
  const user = await User.findByPk(1)
  const cart = await user.getCart()
  const products = await cart.getProducts()
  console.log(products[0].cartItem)
  return res.render('shop/cart', { products })
}


exports.getProductDetail = async (req, res) => {
  const { productId } = req.params

  try {
    const product = await Product.findOne({ where: { id: productId } })
    return res.render('shop/product-detail', { product })
  } catch (err) {
    console.log(err)
  }
}

exports.addToCart = async (req, res) => {
  const { productId } = req.body
  const user = await User.findByPk(1)
  const product = await Product.findByPk(productId)
  const userCart = await user.getCart()

  await userCart.addProduct(product, { through: { quantity: 1 } } )
  // return res.redirect(302, '/cart')
}