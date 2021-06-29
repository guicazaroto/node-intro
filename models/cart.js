const connection = require('../utils/database')
const { DataTypes } = require('sequelize')

const Cart = connection.define('cart', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  }
)

module.exports = Cart