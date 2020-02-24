import React from 'react'
import './App.css'
import PropTypes from 'prop-types'
import WeatherContainer from '../src/containers/WeatherContainer'
import {geolocated} from 'react-geolocated'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function App ({coords}) {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Welcome to DarkSky Weather app</h1>
      </header>
      <WeatherContainer coords={coords} />
    </div>
  )
}

App.propTypes = {
  coords: PropTypes.object
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(App)
