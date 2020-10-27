const fs = require('fs')
const path = require('path')
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// Helper Functions
const filePath = path.join(process.cwd(), 'storage', 'cart.json')
const readFilePath = async () => {
  return await readFile(filePath)
}

let cart = []

class Cart {
  static async addProduct (id) {
    const res = await readFilePath()
    const data = JSON.parse(res)
    const hasItProduct = data.findIndex(x => x.id === id)

    if (hasItProduct !== -1) {
      cart = data
      cart[hasItProduct].quantity += 1
    } else {
      cart = data
      cart.push({ id, quantity: 1})
    }
    await writeFile(filePath, JSON.stringify(cart))
  }
}

module.exports = Cart