const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const url = 'https://api.darksky.net/forecast/f9bcb9e1bb17547524e8c25af03f1d4f/37.8267,-122.4233?units=si&'
const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/toronto.json?access_token=pk.eyJ1IjoiZGFuaWVsYnJvZyIsImEiOiJjanY0OGI0ZnIwMnh0NDRvMmZsaDFqdHEwIn0.1GTaYHBF871_MeoOtRcr5Q&limit=1'

const loc = process.argv[2]
if(!loc){
console.log('Please provide an address')
}else{
geocode(loc, (err, {latitude, longitude, location}) => {
	if(err){
	return console.log(err)
	}
	console.log('Weather located at: ' + location)
	forecast(latitude,longitude, (err, res) => {
		if(err){
			return console.log('Error: ', err)
		}
		const {temperature, precipChance}=res
		console.log('The temperatude is: '+ temperature + ' Celsius and the chance of rain is: ' + precipChance + '%')
	})
})
}
