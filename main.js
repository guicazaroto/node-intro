const app = require('./app')
const db = require('./utils/database')

db.sync().then(() =>
  app.listen(3000, '0.0.0.0')
)
