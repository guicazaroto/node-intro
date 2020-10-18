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
  constructor (title, img, price) {
    this.title = title
    this.img = img
    this.price = price
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
}

module.exports = Products