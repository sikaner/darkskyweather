import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'
import {getWeatherIconDetails} from '../utils/util'
import PropTypes from 'prop-types'

export const WeatherDisplay = ({address, temperature, iconType}) => {
  const iconMap = getWeatherIconDetails(iconType)
  return (
    <div
      style={{
        display: 'flex',
        marginTop: 40,
        marginLeft: 20,
        padding: 20
      }}
      id='weather-display'
    >
      <div>
        <span>Current temperature in {address} is <h2>{` ${temperature} °F`}</h2></span>
      </div>
      <ReactAnimatedWeather
        {...iconMap}
      />
    </div>
  )
}

WeatherDisplay.propTypes = {
  temperature: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconType: PropTypes.string,
  address: PropTypes.string
}
