// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
//     const url='https://api.openweathermap.org/data/2.5/weather?lat=17.3&lon=77.9&appid=cc89a233a6b840a5ed94f34891f0197d'

//     request({ url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } 
//         // else if (weather.error) {
//         //     callback('Unable to find location', undefined)
//         // } 
//         else {
//             console.log(response.body.main.temp)
//             console.log(response.body.weather[0].id)
//             console.log(response.body.name)
//             // callback(undefined, weather)
//         }
//     })
// }
// forecast(25,25,(body,weather)=>{
// //     console.log(body)
// // console.log(weather)
// })



const request = require('request')

const geocode = (address, callback) => {
    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
    const url='http://api.openweathermap.org/geo/1.0/direct?q='+address+'&appid=cc89a233a6b840a5ed94f34891f0197d'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } 
        else if (body.cod) {
            console.log(body.cod)
            callback('Unable to find location. Try another search.', undefined)
        }
         else {
            console.log(body[0].name)
            callback(undefined, {
                latitude: body[0].lat,
                longitude: body[0].lon,
                // location: body.features[0].place_name
                location:body[0].name
                // console.log(first)
            })
        }
    })
}

geocode('hyderabad',(error,body)=>{
console.log(body)
})



// module.exports = geocode