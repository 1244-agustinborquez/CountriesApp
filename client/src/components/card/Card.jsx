import React from 'react';
import {Link} from 'react-router-dom';
import {CountryCard,CountryFlag,CountryName,CountryContinent} from './StyledCard'
function Card({country}) {
    return (
        <Link to={`/country/${country.ID}`}>
        <CountryCard>
            <CountryFlag src={country.image} alt="image Country No Found"/>
            <CountryName>{country.name}</CountryName>
            <CountryContinent>{country.continente}</CountryContinent>
        </CountryCard>
        </Link>
    )
}

export default Card
