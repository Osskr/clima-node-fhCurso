const axios = require('axios')

const getClima = async (lat, lon) =>{


    const resp = await axios.get('https://api.openweathermap.org/data/2.5/weather?', {
         params: {
            units: 'metric',
            lat:lat,
            lon:lon,
            appid: '2ea8dee4aab7a5c0145bac0fa4a34df9',
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