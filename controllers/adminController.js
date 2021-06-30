const Product = require('../models/product')
const User = require('../models/user')

exports.index = (req, res) => {
  return res.render('admin/add-product')
}

exports.addProduct = async (req, res) => {
  const { title, img, price, description } = req.body
  const { user } = req

  try {
    await user.createProduct({ // this method just exists by association
      title,
      price,
      description,
      imageUrl: img
    })
    
    res.redirect('/')
  } catch(e) {
    console.log(e)
  }
}

exports.getProductList = async (req, res) => {

  try {
    const list = await Product.findAll()
    res.render('admin/product-list', { list })
  } catch (err) {
    console.log(err)
  }
}

exports.getEditProduct = async (req, res) => {
  const { productId } = req.params

  try {
    const product = await Product.findOne({ id: productId })
    return res.render('admin/edit-product', { product })
  } catch(err) {
    console.log(err)
  }
}

exports.editProduct = async (req, res) => {
  const data = req.body
  const id = req.params.productId
  console.log(data)
  try {
    const product = await Product.update(data, {
      where: {
        id
      }
    })

    return res.redirect(`/admin/edit-product`)
  } catch(err) {
    console.log(err)
  }
}

exports.deleteProduct = async (req, res) => {
  const id = req.params.productId

  try {
    const product = await Product.destroy({ where: { id } })
    return res.redirect(`/admin/edit-product`)
  } catch(err) {
    console.log(err)
  }
}