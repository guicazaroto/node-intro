const adminData = require('../controllers/adminController')

exports.index = (req, res) => {
  return res.render('shop', { products: adminData.products })
}