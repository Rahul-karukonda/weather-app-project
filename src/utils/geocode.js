const request = require('request')

const geocode = (address, callback) => {
    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
    const url='http://api.openweathermap.org/geo/1.0/direct?q='+address+'&appid=cc89a233a6b840a5ed94f34891f0197d'
    request({ url, json: true }, (error, { body }) => {
        console.log(body[1])
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.cod ) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body[0].lat,
                longitude: body[0].lon,
                location:body[0].name
            })
        }
    })
}

module.exports = geocode