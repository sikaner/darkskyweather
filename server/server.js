const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
require('dotenv').config()

const app = new express() //eslint-disable-line

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.header('Access-Control-Expose-Headers', 'Authorization')
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  next()
})

app.use(bodyParser.json())
app.use('/', routes)

app.listen(8080, err => {
    if (!err) console.log(`Server Running on port ${8080}`) //eslint-disable-line
    else console.log(err) //eslint-disable-line
})
