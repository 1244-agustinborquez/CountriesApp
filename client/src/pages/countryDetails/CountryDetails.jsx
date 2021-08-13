import React, { useEffect } from 'react';
import {useParams,Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {getCountriesDetails} from '../../Redux-actions/Actions'
import {
    Section,
    Globals,
    Nav,
    Logo,
    ActivityByCountryDetailContent,
    CountryDetailContent,
    CountryCardDetail,
    CountryDetailFlag,
    CountryDetailName,
    CountryDetailContinent,
    CountryDetailCapital,
    CountryDetailSubregion,
    CountryDetailPoblacion,
    CountryDetailArea,
    ActivityByCountryTitle,
    ActivityByCountryName,
    ActivityByCountryDificultad,
    ActivityByCountryDuracion,
    ActivityByCountryTemporada,
    ActivityNoFound} from './StyledCountryDetails'
function CountryDetails() {
    
    const {id} = useParams()
    const countriesDetails = useSelector(state => state.countryDetails)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountriesDetails(id))
    }, [])

    return (
        <Section>
            <Globals/>
            <Nav>
                <Link to='/countries'>
                <Logo>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
                </Logo>
                </Link>
            </Nav>
                <CountryDetailContent>
                    <CountryCardDetail>
                        <CountryDetailFlag src={countriesDetails[0].image}/>
                        <CountryDetailName>{countriesDetails[0].name}</CountryDetailName>
                        <CountryDetailContinent>{countriesDetails[0].continente}</CountryDetailContinent>
                        <CountryDetailCapital>{countriesDetails[0].capital}</CountryDetailCapital>
                        <CountryDetailSubregion>{countriesDetails[0].subregion}</CountryDetailSubregion>
                        <CountryDetailArea>{countriesDetails[0].area}</CountryDetailArea>
                        <CountryDetailPoblacion>{countriesDetails[0].poblacion}</CountryDetailPoblacion>
                    </CountryCardDetail>
                    <ActivityByCountryDetailContent>
                    {
                        countriesDetails[0]?.actividads?.length ?
                        countriesDetails[0]?.actividads.map(activity => <CountryCardDetail>
                            <ActivityByCountryTitle>Activity</ActivityByCountryTitle>
                            <ActivityByCountryName>{activity.name}</ActivityByCountryName>
                            <ActivityByCountryDificultad>Difficulty: {activity.dificultad}</ActivityByCountryDificultad>
                            <ActivityByCountryDuracion>Duration: {activity.duracion}</ActivityByCountryDuracion>
                            <ActivityByCountryTemporada>Season: {activity.temporada}</ActivityByCountryTemporada>
                        </CountryCardDetail>) :
                        <ActivityNoFound>This Country dosn't have any activities</ActivityNoFound>}
                    </ActivityByCountryDetailContent>
                </CountryDetailContent>
        </Section>
    )
}

export default CountryDetails
