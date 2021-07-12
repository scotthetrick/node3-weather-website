const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fb68ad5f523fe50141ed7f971db677c9&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        }
        else if (body.error) {
            callback('Unable to find location')
        }
        else {
            const data = body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' +  body.current.feelslike + ' degrees out.'
            callback(undefined, data)
        }
    })
}

module.exports = forecast