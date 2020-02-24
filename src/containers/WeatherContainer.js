import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchLatLng, fetchWeather, clearRequest} from '../redux/actions'
import {WeatherInputForm} from '../components/WeatherInputForm'
import {WeatherDisplay} from '../components/WeatherDisplay'
import {ClipLoader} from 'react-spinners'
import {Map} from 'immutable'
import PropTypes from 'prop-types'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const WeatherContainer = ({
  coords, fetchWeather, fetchLatLng, clearRequest, temperature, icon,
  address, loading, lat, lng, locationError, weatherError
}) => {
  const clearRequests = () => {
    clearRequest('CLEAR_REQUEST_LOCATION')
    clearRequest('CLEAR_REQUEST_WEATHER')
  }

  useEffect(() => {
    if (coords) {
      const {latitude, longitude} = coords
      if (latitude && longitude) {
        fetchWeather(latitude, longitude)
      }
    }
  }, [coords, fetchWeather])

  useEffect(() => {
    if (lat && lng) {
      fetchWeather(lat, lng)
    }
  }, [fetchWeather, lat, lng])

  useEffect(() => {
    const error = (err) => toast(
      err,
      {
        className: 'Toastify__toast-error',
        bodyClassName: 'Toastify__body',
        autoClose: false,
        onClose: () => {
          clearRequests()
        },
        onClick: () => {
          clearRequests()
        }
      }
    )

    if (locationError) {
      error(locationError)
    } else if (weatherError) {
      error(weatherError)
    }
  }, [locationError, weatherError])

  return (
    <div style={{display: 'flex', flexDirection: 'column', paddingBottom: 50}}>
      <WeatherInputForm fetchWeather={(value) => fetchLatLng('address', value)} />
      <div style={{marginLeft: 30, marginBottom: 30}} id='loader'>
        <ClipLoader
          size={100}
          color='#123abc'
          loading={loading}
        />
      </div>
      {(!loading && temperature) &&
        <WeatherDisplay temperature={temperature} iconType={icon} address={address} />}
    </div>
  )
}

WeatherContainer.propTypes = {
  clearRequest: PropTypes.func,
  fetchWeather: PropTypes.func,
  fetchLatLng: PropTypes.func,
  loading: PropTypes.bool,
  coords: PropTypes.object,
  temperature: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lng: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string,
  weatherError: PropTypes.string,
  locationError: PropTypes.string,
  address: PropTypes.string,
  locationDetails: PropTypes.instanceOf(Map),
  weatherDetails: PropTypes.instanceOf(Map)
}

export function mapStateToProps (state, props) {
  const loading = state.getIn(['location', 'loading'], false)
  const locationError = state.getIn(['location', 'error'], '')
  const weatherError = state.getIn(['weather', 'error'], '')
  const locationDetails = state.getIn(['location', 'data'], Map())
  const address = locationDetails.getIn(['address'], '')
  const lat = locationDetails.getIn(['location', 'lat'], '')
  const lng = locationDetails.getIn(['location', 'lng'], '')
  const weatherDetails = state.getIn(['weather', 'data', 'data', 'currently'], Map())
  const temperature = weatherDetails.getIn(['temperature'], '')
  const icon = weatherDetails.getIn(['icon'], '').toUpperCase()
  return {
    loading,
    locationDetails,
    weatherDetails,
    temperature,
    icon,
    lat,
    lng,
    address,
    locationError,
    weatherError
  }
}

export default connect(mapStateToProps, {fetchLatLng, fetchWeather, clearRequest})(WeatherContainer)
