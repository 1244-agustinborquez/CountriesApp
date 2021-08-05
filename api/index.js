//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Country} = require('./src/db.js')
const axios = require('axios');

// Syncing all the models at once.
// force: true ahce un drop en las tablas

conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    /*
      hago la carga de la tabla de country primero por que si no me tiraba error de dulicado de keyPrimary
     */
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
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
