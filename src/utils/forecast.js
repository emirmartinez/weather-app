const request = require('request')

const forecast = (lat, long, cb) => {
  const url = `http://api.weatherstack.com/current?access_key=d0e07485e8ae8d094d5e84f403ff3bce&query=${lat},${long}&units=f`

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      cb('Unable to connect to location services', undefined)
    } else if (body.error) {
      cb('Unable to find location. Try another search', undefined)
    } else {
      cb(undefined, `Today it's ${body.current.weather_descriptions[0].toLowerCase()} and currently ${body.current.temperature} degrees out. The estimated humidity is ${body.current.humidity} degrees.`)
    }
  })
}

module.exports = forecast