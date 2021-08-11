import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import {CountryCardLists} from './StyledCarsList';
import Card from '../card/Card';
import { useEffect } from "react";
import { getCountry } from '../../Redux-actions/Actions'
function CardList() {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countriesLoaded);
    
    useEffect(() => {
        dispatch(getCountry());
    }, [dispatch])

    return (
        <CountryCardLists>
            { countries? countries.map(country => <Card key={country.id} country={country}/>) : <p>No</p>}
        </CountryCardLists>
    )
}

export default CardList
