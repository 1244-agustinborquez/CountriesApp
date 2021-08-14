import React from 'react'
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import particleConfig from './ParticleConfig';
import {Globals, NavAbout,AboutIconContent,LinkAbout,LeandingAbout,AboutContent,AboutContentText,AboutText,AboutTitle,NavAboutContent,AboutImageContent} from './StyledAbout.js';
import logo from '../../assets/Avatar.png'
function AboutMe() {
    return (
            <LeandingAbout>
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
                    <Link to='/'><LinkAbout>Go To Home</LinkAbout></Link>
                </NavAbout>
                </NavAboutContent>
                <AboutContent>
                    <AboutImageContent src={logo} />
                    <AboutContentText>
                        <AboutTitle>Hi, My Name Is Guillermo Agustin</AboutTitle>
                        <AboutText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, perspiciatis error? Iure at amet ea nihil? 
                        Incidunt molestiae vero consectetur assumenda repellat quo laudantium, quam ea excepturi illo. Doloribus, incidunt.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, perspiciatis error? Iure at amet ea nihil? 
                        </AboutText>
                    </AboutContentText>
                </AboutContent>
            </LeandingAbout>
    )
}

export default AboutMe
