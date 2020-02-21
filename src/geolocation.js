const request = require('request')


const getLocation = (address, callback)=>{

    url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURI(address)+".json?access_token=pk.eyJ1IjoiYXpheSIsImEiOiJjazZmYmdhNmQwYTUyM21sbTI2bTRnb2k2In0.nRmNo2-Y_MnCTkfagcPDtg"

    request({url:url, json:true},(error, response)=>{
        if(error) callback('Could not connect to the server.', undefined)
        else if(response.body.features[0] === undefined) callback('Invalid Address', undefined)
        else callback(undefined, response.body.features[0].center)
    })



}

// getLocation('Indore', (error,response)=>{
//     if (error) console.log(error)
//     else console.log(response)
    
    
// })

module.exports = getLocation
