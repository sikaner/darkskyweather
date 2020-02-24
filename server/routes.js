const express = require('express')
const router = express.Router()
const {fetchLatLng, fetchWeather} = require('./controller')

router.get('/latng', (req, res) => {
  fetchLatLng(req, res)
})

router.get('/weather', (req, res) => {
  fetchWeather(req, res)
})

module.exports = router
