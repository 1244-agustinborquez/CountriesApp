import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Particles from 'react-particles-js';
import particleConfig from '../aboutMe/ParticleConfig';
import Form from '../../components/form/Form';
import SearchBar from '../../components/header/SearchBar';
import {Globals, NavAbout,AboutIconContent,LinkAbout,NavAboutContent} from '../aboutMe/StyledAbout';
import {Content,ContentForm,ContentCountriess,CountriesDiv,StyledUList,StyledLItem,ButtonChoose} from './StyledFormContent';
function FormContent() {
    const countries = useSelector(state => state.countriesLoaded)
    const [search, setSearch] = useState();
    const [errors, setErrors] = React.useState({});
    const [newActivity, setNewActivity] = useState({
        name: '',
        dificultad: '',
        duracion: '',
        temporada: '',
        pais: []
    })
    function handleChangeButton(name) {
        // console.log(id);
        setNewActivity({
            ...newActivity,
            pais: [...newActivity.pais, name]
        })
        console.log(newActivity.temporada);
    }
    return (
        <>
            <Globals/>
            <Particles params={particleConfig}/>
            <NavAboutContent>
                <NavAbout>
                    <AboutIconContent>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="9" />
                        <line x1="3.6" y1="9" x2="20.4" y2="9" />
                        <line x1="3.6" y1="15" x2="20.4" y2="15" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                        </svg>
                    </AboutIconContent>
                    <Link to='/countries'><LinkAbout>Go To Home</LinkAbout></Link>
                </NavAbout>
                <Content>
                    <ContentForm>
                    <Form state={newActivity} setState={setNewActivity} newErrors={errors} setNewErrors={setErrors}/>
                    </ContentForm>
                    <ContentCountriess>
                        <SearchBar state={search} setState={setSearch}/>
                        <CountriesDiv>
                            <StyledUList>
                            {countries?.length ? 
                            countries?.map(country => <StyledLItem key={country.ID}>{country.name} <ButtonChoose onClick={() => handleChangeButton(country.name)}>Choose</ButtonChoose></StyledLItem>) : 
                            <li>Country not found</li>}
                            </StyledUList>
                        </CountriesDiv>
                    </ContentCountriess>
                </Content>
            </NavAboutContent>
        </>
    )
}

export default FormContent
