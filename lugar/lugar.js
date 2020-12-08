const axios = require('axios')

//axios trabaja en base a promesas
// Optionally the request above could also be done as

const getLugarLatLng = async ( direccion ) => {

    const response = await axios.get('https://api.mymappi.com/v1/geocoding/direct', {

         params: {
          q:direccion,
          apikey: '{apiKey}',
         
        }
      })

      if (response.data.data.length === 0){
          throw new Error (`There's no results for ${direccion}`)
      }

      const lugar = response.data.data[0]
      
      const lugar_nombre = lugar.display_name
      const lat = lugar.lat
      const lon = lugar.lon
     
    
    return {
        lugar_nombre,
        lat,
        lon
    }
}




module.exports = {
    getLugarLatLng
}