import React from 'react';
import { useSelector } from "react-redux";
import {CountryCardLists} from './StyledCarsList';
import Card from '../card/Card';

function CardList() {
    const countries = useSelector(state => state.countriesLoaded);
    return (
        <CountryCardLists>
            {countries.map(country => <Card key={country.id} country={country}/>)}
        </CountryCardLists>
    )
}

export default CardList
