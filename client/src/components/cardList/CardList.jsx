import React, {useState} from 'react';
import { useSelector,useDispatch } from "react-redux";
import {CountryCardLists,PaginationButtonsDiv} from './StyledCarsList';
import Card from '../card/Card';
import { useEffect } from "react";
import { getCountry } from '../../Redux-actions/Actions';
import Prev from '../paginado/Prev';
import Next from '../paginado/Next';
function CardList() {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countriesLoaded);
    const [indexStart, setIndexStart] = useState(0);
    const [indexEnd, setIndexEnd] = useState(9);
    useEffect(() => {
        dispatch(getCountry());
    }, [dispatch])
    return (
        <>
        <PaginationButtonsDiv>
            <Prev stateStart={indexStart} stateEnd={indexEnd} setStateStart={setIndexStart} setStateEnd={setIndexEnd}/>
            <Next stateStart={indexStart} stateEnd={indexEnd} setStateStart={setIndexStart} setStateEnd={setIndexEnd}/>
        </PaginationButtonsDiv>
        <CountryCardLists>
            { countries?.slice(indexStart,indexEnd).map(country => <Card key={country.id} country={country}/>)}
        </CountryCardLists>
        </>
    )
}

export default CardList
