const db = require('../utils/database')
class Products {
  constructor (title, img, price, description) {
    this.title = title
    this.img = img
    this.price = price
    this.description = description
  }

  static async fetchAll () {
    const [res, tableInfo ] = await db.execute('SELECT * FROM products')
    return res
  }

  async save () {

  }

  async addProduct () {

  }

  static async getProduct (id) {

  }

  static async updateProduct (id, data) {

  }

  static async deleteProduct (id) {

  }

  static async getProductIndex (id) {

  }
}

module.exports = Products