import React from 'react';
import { useDispatch } from 'react-redux';
import {Globals,LeandingMain} from './StyledMain.js';
import Nav from '../../components/nav/Nav.jsx';
import Index from '../../components/header/Index.jsx';
import CardList from '../../components/cardList/CardList.jsx';
import {getCountry,getActivity} from '../../Redux-actions/Actions'
import { useEffect } from "react";
function Main() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountry());
        dispatch(getActivity())
    }, [dispatch])
    return (
        <LeandingMain>
            <Globals/>
            <Nav/>
            <Index/>
            <CardList/>
        </LeandingMain>
    )
}

export default Main
