const app = require('./app')
const db = require('./utils/database')

const User = require('./models/user')
const Product = require('./models/product')
const Cart = require('./models/cart')
const CartItem = require('./models/cartItem')

User.hasOne(Cart)
User.hasMany(Product)

Product.belongsTo(User, { onDelete: 'CASCADE' })
Cart.belongsTo(User)

Cart.belongsToMany(Product, { through: CartItem })
Product.belongsToMany(Cart, { through: CartItem })


db.sync()
.then(() =>
  app.listen(3000, '0.0.0.0')
)
