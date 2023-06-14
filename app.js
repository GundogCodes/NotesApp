const jsxEngine = require('jsx-view-engine')
const morgan = require('morgan')
const express = require('express')
const notesRoutes = require('./routes/notesRoutes')
const app = express()


app.set('view engine','jsx')
app.engine('jsx',jsxEngine())

app.use(express.json())
app.use(morgan('combined'))
app.use('/', notesRoutes)
module.exports = app