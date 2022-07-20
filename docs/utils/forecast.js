const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url='https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=cc89a233a6b840a5ed94f34891f0197d'

    request({ url, json: true }, (error,{body}) => {
        // console.log(body)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.cod===401) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body)
            callback(undefined, 'body.daily.data[0].summary' + ' It is currently ' +body.main.temp + ' degress out. There is a ' + 'body.currently.precipProbability' + '% chance of rain.')
        }
    })
}

module.exports = forecast