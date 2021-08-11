import React from 'react';
import {Link} from 'react-router-dom';
import {CountryCard,CountryFlag,CountryName,CountryContinent} from './StyledCard'
function Card({country}) {
    return (
        <Link to={`/country/${country.id}`}>
        <CountryCard>
            <CountryFlag src={country.imgFlag} alt="image Country No Found"/>
            <CountryName>{country.name}</CountryName>
            <CountryContinent>{country.region}</CountryContinent>
        </CountryCard>
        </Link>
    )
}

export default Card
