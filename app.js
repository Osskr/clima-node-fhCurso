const {getLugarLatLng} = require('./lugar/lugar.js')
const {getClima} = require ('./clima/clima')
const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).argv


const  getInfo = async ( direccion) => {
    
    try {
        const lugar = await getLugarLatLng(direccion)
        const temperatura = await getClima(lugar.lat,lugar.lon)
        return (`la Temperatura en ${lugar.lugar_nombre} es de  ${temperatura}°C. `)
    
    } catch (error) {
        return(`No se pudo determinar la Temperatura en ${direccion}`)
    }
 
    
}


getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log)



