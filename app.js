const express = require('express')
const app = express()
const path = require('path')

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Express routes
app.use(shopRoutes)
app.use('/admin', adminRoutes)

// Express Middlewares
// 404 page
app.use((req, res) => {
  res.status(404)
    .render('404')
})

module.exports = app