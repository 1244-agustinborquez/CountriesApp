/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
// const { INET } = require('sequelize/types');
// const { DESCRIBE } = require('sequelize/types/lib/query-types');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);

const country = {
  actividads: [],
  area: 2780400,
  capital: "Buenos Aires",
  ID: "ARG",
  image: "https://restcountries.eu/data/arg.svg",
  name:"Argentina",
  poblacion: 43590400,
  continente: "Americas",
  subregion: "South America",
};

// const countryRes = {
//   "ID": "ARG",
//   "name": "Argentina",
//   "image": "https://restcountries.eu/data/arg.svg",
//   "continente": "Americas",
//   "capital": "Buenos Aires",
//   "poblacion": 43590400,
//   "area": 2780400,
//   "subregion": "South America",
//   "actividads": []
// };

const countryResByName = {
  "ID": "ARG",
  "name": "Argentina",
  "image": "https://restcountries.eu/data/arg.svg",
  "continente": "Americas",
  "poblacion": 43590400
}

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it("Should res with the country who match the name pass by query", () =>
      agent.get("/countries?name=argentina").expect((res) => {
        expect(res.body).to.deep.equal([countryResByName])
      })
    );
    it('should get 200', () => 
      agent.get("/countries/ARG").expect(200)
    );
  });
});

  // const country = {
//   name: 'Argentina',
// };

// describe('Country routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Country.sync({ force: true })
//     .then(() => Country.create(pokemon)));
//   describe('GET /countries', () => {
//     it('should get 200', () =>
//       agent.get('/countries').expect(200)
//     );
//   });
// });

