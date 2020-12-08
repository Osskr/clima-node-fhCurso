const axios = require('axios')

const getClima = async (lat, lon) =>{


    const resp = await axios.get('https://api.openweathermap.org/data/2.5/weather?', {
         params: {
            units: 'metric',
            lat:lat,
            lon:lon,
            appid: '{apiKey}',
         }
      }).catch(e=>{
          //console.log(e.data)
      })

      if(!resp) return

     
      return(resp.data.main.temp)

     
}



module.exports = {
    getClima
}