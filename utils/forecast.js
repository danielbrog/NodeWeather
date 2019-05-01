const request = require('request')
const forecast = (latitude,longitude, callback) => {
	const url = 'https://api.darksky.net/forecast/f9bcb9e1bb17547524e8c25af03f1d4f/' + latitude + ',' + longitude + '?units=si&'
	request({url:url, json: true}, (err, res) => {
		if(err){
			callback('Unable to connect to forecast services',undefined)
		}else if(res.body.error){
			callback('Unable to find location',undefined)
		}else{
			callback(undefined, {
				temperature: res.body.currently.temperature,
				precipChance: res.body.currently.precipProbability
			})
		}
	})
}

module.exports = forecast

