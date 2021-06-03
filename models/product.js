const db = require('../utils/database')
class Products {
  constructor (title, img, price, description) {
    this.title = title
    this.img = img
    this.price = price
    this.description = description
  }

  static fetchAll () {
    return db.execute('SELECT * FROM products')
  }

  save () {
    return db.execute(
      'INSERT INTO products (title, description, price, img_url) VALUES (?, ?, ?, ?)',
      [this.title, this.description, this.price, this.img]
    )
  }

  async addProduct () {

  }

  static getProduct (id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id])
  }

  static async updateProduct (id, data) {

  }

  static async deleteProduct (id) {

  }

  static async getProductIndex (id) {

  }
}

module.exports = Products