import {Map, fromJS} from 'immutable'

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case 'FETCH_LAT_LNG':
      return state.setIn(['location', 'loading'], true)
    case 'FETCH_LAT_LNG_SUCCESS':
      return state.setIn(['location', 'data'], fromJS(action.data))
        .setIn(['location', 'loading'], false)
    case 'FETCH_LAT_LNG_FAILURE':
      return state.setIn(['location', 'error'], action.error)
        .setIn(['location', 'loading'], false)
    case 'FETCH_WEATHER':
      return state.setIn(['weather', 'loading'], true)
    case 'FETCH_WEATHER_SUCCESS':
      return state.setIn(['weather', 'data'], fromJS(action.data))
        .setIn(['weather', 'loading'], false)
    case 'FETCH_WEATHER_FAILURE':
      return state.setIn(['weather', 'error'], action.error)
        .setIn(['weather', 'loading'], false)
    case 'CLEAR_REQUEST_LOCATION':
      state = state.delete('location')
      return state
    case 'CLEAR_REQUEST_WEATHER':
      state = state.delete('weather')
      return state
    default:
      return state
  }
}

export default reducer
