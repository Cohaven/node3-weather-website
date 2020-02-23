const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/42bc8fd747567a5a4fe92782ead2925c/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'?units=si'

    request({ url, json: true}, (error, {body}) => {
        if(error) {
            callback('unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently "+body.currently.temperature+" degrees out. There is a "+body.currently.precipProbability+"% chance of rain")
        }
    })
}

module.exports = forecast