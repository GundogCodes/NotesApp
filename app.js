const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const morgan = require('morgan')
const express = require('express')
const notesRoutes = require('./routes/notesRoutes')
const app = express()


app.set('view engine','jsx')
app.engine('jsx',jsxEngine())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('combined'))
app.use(methodOverride('_method'))
app.use('/', notesRoutes)
module.exports = app