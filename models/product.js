// Packages
const fs = require('fs');
const path = require('path')
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// Helper Functions
const filePath = path.join(process.cwd(), 'storage', 'database.json')
const readFilePath = async () => {
  return await readFile(filePath)
}

let products = []

class Products {
  constructor (title, img, price, description) {
    this.id = Math.floor(Math.random() * 100)
    this.title = title
    this.img = img
    this.price = price
    this.description = description
  }

  async save () {
    try {
      await this.addProduct()
      await writeFile(filePath, JSON.stringify(products))
    } catch (err) {
      console.log(err)
    }
  }

  async addProduct () {
    const res = await readFilePath()
    products = JSON.parse(res)
    products.push(this)
  }

  static async fetchAll () {
    try {
      const res = await readFilePath()
      products = JSON.parse(res)
    } catch (err) {
      console.log(err)
    }
    return products
  }

  static async getProduct (id) {
    const list = await this.fetchAll()
    const product = list.find(x => x.id === Number(id))
    return product
  }
}

module.exports = Products