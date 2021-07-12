const connection = require('../utils/database')
const { DataTypes } = require('sequelize')

const Order = connection.define('order', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  }
)

module.exports = Order