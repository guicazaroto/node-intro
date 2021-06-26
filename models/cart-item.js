const connection = require('../utils/database')
const { DataTypes } = require('sequelize')

const CartItem = connection.define('cart-item', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  }
)

module.exports = CartItem