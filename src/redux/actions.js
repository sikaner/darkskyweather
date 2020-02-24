import axios from 'axios'
const axiosClient = axios.create({baseURL: 'http://localhost:3001'})

export const fetchLatLng = (type = 'address', value) => {
  return dispatch => {
    dispatch({type: 'FETCH_LAT_LNG'})
    return axiosClient.get('/latng', {params: {type, value}})
      .then(res => {
        if (res && res.data) {
          return dispatch({type: 'FETCH_LAT_LNG_SUCCESS', data: res.data})
        } else {
          return dispatch({type: 'FETCH_LAT_LNG_FAILURE', error: 'No results found'})
        }
      })
      .catch(err => {
        return dispatch({type: 'FETCH_LAT_LNG_FAILURE', error: err.toString()})
      })
  }
}

export const fetchWeather = (lat, lng) => {
  return dispatch => {
    dispatch({type: 'FETCH_WEATHER'})
    return axiosClient.get('/weather', {params: {lat, lng}})
      .then(res => {
        if (res && res.data) {
          return dispatch({type: 'FETCH_WEATHER_SUCCESS', data: res.data})
        } else {
          return dispatch({type: 'FETCH_WEATHER_FAILURE', error: 'No results found'})
        }
      })
      .catch(err => {
        return dispatch({type: 'FETCH_WEATHER_FAILURE', error: err.toString()})
      })
  }
}

export const clearRequest = (type) => {
  return dispatch => {
    dispatch({type})
  }
}
