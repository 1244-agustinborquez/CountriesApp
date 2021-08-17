const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

const country = {
  area: 2780400,
  capital: "Buenos Aires",
  ID: "ARG",
  image: "https://restcountries.eu/data/arg.svg",
  name:"Argentina",
  poblacion: 43590400,
  continente: "Americas",
  subregion: "South America",
  actividads: []
};

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });

    });
  });
});
