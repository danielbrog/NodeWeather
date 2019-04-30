const request = require('request')

const url = 'https://api.darksky.net/forecast/f9bcb9e1bb17547524e8c25af03f1d4f/37.8267,-122.4233?units=si&'
const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/toronto.json?access_token=pk.eyJ1IjoiZGFuaWVsYnJvZyIsImEiOiJjanY0OGI0ZnIwMnh0NDRvMmZsaDFqdHEwIn0.1GTaYHBF871_MeoOtRcr5Q&limit=1'

request({url: url, json: true }, (err, res) => {
	if(err){
		console.log('Unable to connect to weather service!')
	}else if(res.body.error) {
	console.log('Unable to find location')
	}else{
	console.log('It is currently ' + res.body.currently.temperature + ' degrees out. There is a ' + res.body.currently.precipProbability + '% chance of rain.')
	}
})


//geocaching

request({url: geoURL, json:true}, (err, res) => {
	//console.log(res.body.features[0].geometry.coordinates)

	if(err){
		console.log('Unable to connect to geocaching sevice!')
		
	}else if(!res.body.features[0]){
	console.log('Unable to find location')
	}else{
	const latitude = res.body.features[0].center[1]
	const longitude = res.body.features[0].center[0]
	console.log(latitude + ' ' + longitude)
	}
})
