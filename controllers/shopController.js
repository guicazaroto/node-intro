const Product = require('../models/product')
const Cart = require('../models/cart')

exports.index = async (req, res) => {
  const list = await Product.fetchAll()
  return res.render('shop/product-list', { products: list })
}

exports.getCarts = async (req, res) => {
  const products = await getProductsInCart()
  return res.render('shop/cart', { products })
}

const getProductsInCart = async () => {
  const products = await Product.fetchAll()
  const cart = await Cart.fetchAll()
  
  return cart.map(item => {
    const {id, title, description} = products
      .find(x => Number(x.id) === Number(item.id))

    return {
      id,
      title,
      description,
      quantity: item.quantity
    }
  })

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