const request = require('request')

const forecast = (lat, long, cb) => {
  const url = `http://api.weatherstack.com/current?access_key=d0e07485e8ae8d094d5e84f403ff3bce&query=${lat},${long}&units=f`

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      cb('Unable to connect to location services', undefined)
    } else if (body.error) {
      cb('Unable to find location. Try another search', undefined)
    } else {
      cb(undefined, body.current.weather_descriptions[0] + `. It is currently ${body.current.temperature} degrees out. However, it feels like ${body.current.feelslike} degrees out.`)
    }
  })
}

module.exports = forecast