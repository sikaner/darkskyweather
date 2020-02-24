require('dotenv').config()
const darkSkyBaseUrl = `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}`
const googleGeoBaseUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.GOOGLE_MAPS_KEY}`
module.exports = {darkSkyBaseUrl, googleGeoBaseUrl}
