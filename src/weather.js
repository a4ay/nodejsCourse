const request  = require('request')

const getWeather = (latitude, longitude, callback)=>{

    const url =`https://api.darksky.net/forecast/fc0b0c2d8fff09cded70f430ff5f4008/${latitude},${longitude}?units=si` 
   
    request({url:url, json:true},(error, response)=>{

        if(error) callback(`Can't reach server at the moment`,undefined)
        else if(response.body.error) callback(response.body.error, undefined)
        else callback(undefined,{ weather : `It is currently ${response.body.currently.temperature} degree celcius. And there is ${response.body.currently.precipProbability}% chance of rain.`})

        
    })

}

// getWeather(26.91667,  75.86667, (error,response)=>{

//     if (error) console.log(error)
//     else console.log(response.body.currently,response.body.timezone)
    
    
// })

module.exports = getWeather