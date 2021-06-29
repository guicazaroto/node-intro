const connection = require('../utils/database')
const { DataTypes } = require('sequelize')

const CartItem = connection.define('cartItem', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    quantity: DataTypes.INTEGER
  }
)

module.exports = CartItem