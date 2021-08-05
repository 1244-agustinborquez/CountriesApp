const { Op } = require('sequelize');
const axios = require('axios');
const { Country, Actividad } = require('../db');

const countryall = async () => {
    //var allCountry = await axios.get('https://restcountries.eu/rest/v2/all');
    //allCountry =  allCountry.data
    // allCountry = allCountry.map(country => {
    //     return {
    //         ID: country.alpha3Code,
    //         name: country.name,
    //         image: country.flag,
    //         continente: country.region,
    //         capital: country.capital,
    //         subregion: country.subregion,
    //         area: country.area,
    //         poblacion: country.population
    //     }
    // });
    // await Country.bulkCreate(allCountry);
    var countries = await Country.findAll();
    return countries;
}


const countryDetail = async (id) => {
    var countryId = await Country.findByPk(id);
    return countryId
}

/**
 * 
 *  {La cláusula SQL LIKE se utiliza para comparar un valor con 
 *  valores similares utilizando operadores comodín. Hay dos comodines 
 *  que se utilizan junto con el operador LIKE. El signo de porcentaje 
 *  representa cero, uno o varios caracteres. El guión bajo representa 
 *  un solo número o carácter.
 *  Operator LIKE
    [Op.startsWith]: 'hat'
    In SQL
    LIKE 'hat%'
 */

const countryAllName = async (name) => {
    name = name[0].toUpperCase() + name.slice(1)
    var countryName = await Country.findAll({
        attributes: [ 'ID', 'name', 'image', 'continente', 'poblacion' ],
        // wherw para filtrar la consulta.
        where: {
            name: {
                [Op.startsWith]: name
            }
        }
    }) 
    return countryName;
}

module.exports = {
    countryall,
    countryDetail,
    countryAllName
}