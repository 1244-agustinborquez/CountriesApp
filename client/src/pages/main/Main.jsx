import React from 'react';
import {Globals,LeandingMain} from './StyledMain.js';
import Nav from '../../components/nav/Nav.jsx';
import Index from '../../components/header/Index.jsx';
import CardList from '../../components/cardList/CardList.jsx';
function Main() {
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
