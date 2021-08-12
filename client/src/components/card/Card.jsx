import React from 'react';
import {CountryCard,CountryFlag,CountryName,CountryContinent,StyledLink} from './StyledCard'
function Card({country}) {
    return (
        <StyledLink to={`/country/${country.ID}`}>
        <CountryCard>
            <CountryFlag src={country.image} alt="image Country No Found"/>
            <CountryName>{country.name}</CountryName>
            <CountryContinent>{country.continente}</CountryContinent>
        </CountryCard>
        </StyledLink>
    )
}

export default Card
