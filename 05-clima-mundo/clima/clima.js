
const axios = require('axios');

const getClima = async(lat, lng) =>{

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=16b05773e2882ccdc3296db5e356d71d`);

    if( resp.cod === '400'){
        throw new Error('Ingresar lat y lng validos')
    }

    return resp.data.main.temp
}

module.exports = {
    getClima
}