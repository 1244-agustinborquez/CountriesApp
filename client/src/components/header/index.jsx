import React,{useState} from 'react';
import {Content,SearchContent,FiltersContent} from './StyledHeader';
import SearchBar from './SearchBar';
import OrderByContinent from './OrderByContinent';
import OrderByName from './OrderByName';
import OrderPopulation from './OrderPopulation';
import OrderByActivity from './OrderByActivity';
function Index() {
    const [search, setSearch] = useState();
    const [region, setRegion] = useState('all');
    const [sortByName, setSortByName] = useState('ASC');
    const [sortByPopulation, setSortByPopulation] = useState("ASC");
    const [activity, setActivity] = useState("all");
    return (
        <Content>
            <SearchContent>
                <SearchBar state={search} setState={setSearch}/>
            </SearchContent>
            <FiltersContent>
                <OrderByContinent state={region} setState={setRegion}/>
                <OrderByName state={sortByName} setState={setSortByName}/>
                <OrderPopulation state={sortByPopulation} setState={setSortByPopulation}/>
                <OrderByActivity state={activity} setState={setActivity}/>
            </FiltersContent>
        </Content>
    )
}

export default Index
