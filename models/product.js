const fs = require('fs');
const path = require('path')
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


let products = []

class Products {
  constructor (title) {
    this.title = title
  }

  async save () {
    products.push(this)
    try {
      const filePath = path.join(process.cwd(), 'storage', 'database.json')
      const res = await writeFile(filePath, JSON.stringify(products))
    } catch (err) {
      console.log(err)
    }
  }

  static async fetchAll () {
    try {
      const filePath = path.join(process.cwd(), 'storage', 'database.json')
      const res = await readFile(filePath)
      products = JSON.parse(res)
    } catch (err) {
      console.log(err)
    }
    return products
  }
}

module.exports = Products