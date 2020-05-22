const request = require('request')

const geocode = (address, cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZW1pcm1hcnRpbmV6IiwiYSI6ImNrYTVuN2gwajAyM3EzZXM0Z3N3Y3l6cmwifQ.K4rECyDT3qPGa7hAddYoYQ&limit=1`

  request({url, json:true}, (error, {body}) => {
    if (error) {
      cb('Unable to connect to location services', undefined)
    } else if (body.features.length === 0) {
      cb('Unable to find location. Try another search', undefined)
    } else {
      cb(undefined, {
        lat: body.features[0].center[1],
        long: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode
