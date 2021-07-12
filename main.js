const app = require('./app')
const db = require('./utils/database')

const User = require('./models/user')
const Product = require('./models/product')
const Cart = require('./models/cart')
const CartItem = require('./models/cartItem')
const Order = require('./models/order')
const OrderItem = require('./models/orderItem')

User.hasOne(Cart)
User.hasMany(Product)
User.hasMany(Order)

Product.belongsTo(User, { onDelete: 'CASCADE' })
Cart.belongsTo(User)
Order.belongsTo(User)

Cart.belongsToMany(Product, { through: CartItem })
Product.belongsToMany(Cart, { through: CartItem })
Order.belongsToMany(Product, { through: OrderItem })

db.sync()
.then(() =>
  app.listen(3000, '0.0.0.0')
)
