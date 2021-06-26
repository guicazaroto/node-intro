const app = require('./app')
const db = require('./utils/database')

const User = require('./models/user')
const Product = require('./models/product')
const Cart = require('./models/cart')
const CartItem = require('./models/cart-item')


Product.belongsTo(User, { onDelete: 'CASCADE' })
User.hasMany(Product)
User.hasOne(Cart)
Cart.belongsTo(User)
Cart.belongsToMany(Product, { through: CartItem })
Product.belongsToMany(Cart, { through: CartItem })


db.sync()
.then(() =>
  app.listen(3000, '0.0.0.0')
)
