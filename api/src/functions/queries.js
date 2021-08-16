const { Op } = require('sequelize');
const axios = require('axios');
const { Country, Actividad } = require('../db');

const countryall = async () => {
    let countries = await Country.findAll({
        attributes: [ 'ID', 'name', 'image', 'continente', 'capital' , 'poblacion' ]
    });
    if (!countries.length) {
        var allCountry = await axios.get('https://restcountries.eu/rest/v2/all');
        allCountry =  allCountry.data
        allCountry = allCountry.map(country => {
                return {
                ID: country.alpha3Code,
                name: country.name,
                image: country.flag,
                continente: country.region,
                capital: country.capital,
                subregion: country.subregion,
                area: country.area,
                poblacion: country.population
            }
        });
        await Country.bulkCreate(allCountry);
    }   
    countries = await Country.findAll({
        attributes: [ 'ID', 'name', 'image', 'continente', 'capital' , 'poblacion' ],
        include: Actividad
    });
    return countries;
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
    });
    console.log(countryName);
    return countryName;
}

const activityPost = async (body) => {
    let { name, dificultad, duracion, temporada, pais } = body;
// se le pone corchetes por q el   te retorna un modelo y un bool entonces aplicamos destructuring
	let [newActivity] = await Actividad.findOrCreate({
		where: {[Op.and]: [{name: name}, {temporada: temporada}]},
		defaults: {
			name,
			dificultad,
			duracion,
			temporada
		}
	});
    //pais = pais.split(',')
    // el promise.all es para q se resuelvan todas ya q recive un array de promesas(si uno fall fallan todos) si pasan todos te retorna u fullfile si no un rejected
    var aux = await Promise.all(pais.map( c => {
		var country =  Country.findOne({
			where: {name: c}
		});
        //console.log(country);
        return country
	}))
    // console.log(aux);
    var aux2 = await newActivity.addCountries(aux) 
    // console.log(aux2);
    return aux2;
}


const getActivity = async () => {
    let activities = await Actividad.findAll();
    return activities
}


const countryDetail = async (id) => {
    let countryId = await Country.findAll({
        attributes: [ 'ID', 'name', 'image', 'continente', 'capital' , 'poblacion', 'area', 'subregion' ],
        where:{
            ID:{
                [Op.eq]: id
            }
        },
        include: Actividad
    })
    

    //var countryId = await Country.findByPk(id);
    return countryId
}



module.exports = {
    countryall,
    countryDetail,
    countryAllName,
    activityPost,
    getActivity
}