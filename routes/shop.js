const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../util/path')

const adminData = require('./admin')

router.get('/', (req, res) => {
  console.log(adminData.products)
  res.sendFile(path.join(rootDir,'view', 'shop.html'))
})

module.exports = router