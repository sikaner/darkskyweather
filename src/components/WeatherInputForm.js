import React, {useState} from 'react'
import {Button, FormControl, Input, InputLabel} from '@material-ui/core'
import PropTypes from 'prop-types'

export const WeatherInputForm = ({fetchWeather}) => {
  const [value, setValue] = useState('')
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: 500}}>
      <FormControl>
        <div style={{display: 'flex', marginLeft: 30, marginTop: 30}}>
          <InputLabel
            style={{marginLeft: 30, marginTop: 30}}
          >Search for a city/zipcode
          </InputLabel>
          <Input id='zipcode-address' type='text' value={value} onChange={(e) => setValue(e.target.value)} fullWidth />
          <div style={{marginLeft: 30}}>
            <Button
              id='search-weather'
              style={{marginTop: 20}} color='default'
              variant='outlined' onClick={() => fetchWeather(value)}
            >Search
            </Button>
          </div>
        </div>
      </FormControl>
    </div>)
}

WeatherInputForm.propTypes = {
  fetchWeather: PropTypes.func
}
