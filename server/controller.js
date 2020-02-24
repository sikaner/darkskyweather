var axios = require('axios')
const {darkSkyBaseUrl, googleGeoBaseUrl} = require('./config')

const fetchLatLng = (req, res) => {
  const {type, value} = req.query
  axios.get(`${googleGeoBaseUrl}&${type}=${value}`)
    .then((result) => {
      if (result && result.data && result.data.results && result.data.results.length > 0) {
        const firstResult = result.data.results[0] && result.data.results[0].geometry &&
              result.data.results[0]
        // eslint-disable-next-line camelcase
        const {geometry, formatted_address} = firstResult
        res.status(200).send({location: geometry.location, address: formatted_address, message: 'Result found'})
      } else {
        res.status(502).send({message: 'Result found'})
      }
    })
    .catch((ex) => {
      res.status(500).send({message: 'An error occured', error: ex.toString()})
    })
}

const fetchWeather = (req, res) => {
  const {lat, lng} = req.query
  axios.get(`${darkSkyBaseUrl}/${lat},${lng}`)
    .then((result) => {
      if (result && result.data) {
        res.status(200).send({data: result.data, message: 'Result found'})
      } else {
        res.status(502).send({message: 'Result found'})
      }
    })
    .catch((ex) => {
      res.status(500).send({message: 'An error occured', error: ex.toString()})
    })
}

module.exports = {fetchLatLng, fetchWeather}
