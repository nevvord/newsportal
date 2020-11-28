const bodyParser = require('body-parser')
const app = require('express')()
const db = require('../db/')()
const routes = require('./routes')
const cors = require('cors')

global.db = db

app.use(cors())
app.use(bodyParser.json())
app.use('/', routes.default)


export default app