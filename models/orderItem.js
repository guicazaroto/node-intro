const connection = require('../utils/database')
const { DataTypes } = require('sequelize')

const OrderItem = connection.define('orderItem', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    quantity: DataTypes.INTEGER
  }
)

module.exports = OrderItem