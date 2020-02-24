export const getWeatherIconDetails = (type = '') => {
  const camelCaseIconType = type.replace(/-/g, '_')
  return {
    icon: camelCaseIconType,
    color: 'black',
    size: 150,
    animate: true
  }
}
