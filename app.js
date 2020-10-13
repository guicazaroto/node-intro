const express = require('express')
const app = express()
const path = require('path')

const productsRoutes = require('./routes/shop')
const adminData = require('./routes/admin')

// Parser configs
// app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Express routes
app.use(productsRoutes)
app.use('/admin', adminData.routes)

// Express Middlewares
// 404 page
app.use((req, res) => {
  res.status(404)
    .sendFile(path.join(__dirname, 'view', '404.html'))
})

module.exports = app