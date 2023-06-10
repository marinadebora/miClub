const express = require('express')
const morgan = require('morgan')// para mostrar en consola GET / 304 7.575 ms - - 
const cors = require('cors')
const bodyParser = require('body-parser')
const index = require('./routes/index')
require('./database')


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(morgan('dev'))

app.use('/', index)

module.exports = app
