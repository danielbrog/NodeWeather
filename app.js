const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


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
