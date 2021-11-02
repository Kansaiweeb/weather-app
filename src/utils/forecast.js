const request = require('request')



const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + process.env.FORECAST_API_KEY + '&query=' + latitude + ',' + longitude
    
    request({url: url, json:true}, (error, {body}) =>{
        if(error) {
            callback('Unable to connect to the server', undefined)
        } else if (body.error) {
            callback('Unable to find the location, try something else', undefined)    
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' +  body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The wind direction is ' + body.current.wind_dir)
        }
    })
}

module.exports = forecast