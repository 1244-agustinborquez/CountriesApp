import React from "react";
import { Link } from "react-router-dom";
import {Globals, LeandingHome,Navhome,LogoHome,LinkAbout,HomeContent,HomeContentTitle,HomeContentText} from './StyleHome'
const Home = () => {
    return(
        <LeandingHome>
            <Globals/>
            <Navhome>
                <LogoHome>Country App</LogoHome>
                <Link to="/about"><LinkAbout>AboutUs</LinkAbout></Link>
            </Navhome>
            <HomeContent>
                <HomeContentTitle>Welcome to the countries app</HomeContentTitle>
                <HomeContentText>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, perspiciatis error? Iure at amet ea nihil? 
                    Incidunt molestiae vero consectetur assumenda repellat quo laudantium, quam ea excepturi illo. Doloribus, incidunt.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, perspiciatis error? Iure at amet ea nihil? 
                    Incidunt molestiae vero consectetur assumenda repellat quo laudantium, quam ea excepturi illo. Doloribus, incidunt.
                </HomeContentText>
                <Link to="/countries"><LinkAbout>Get Countries</LinkAbout></Link>
            </HomeContent>
            </LeandingHome>
    )
}
{/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<circle cx="12" cy="12" r="9" />
<line x1="3.6" y1="9" x2="20.4" y2="9" />
<line x1="3.6" y1="15" x2="20.4" y2="15" />
<path d="M11.5 3a17 17 0 0 0 0 18" />
<path d="M12.5 3a17 17 0 0 1 0 18" />
</svg> */}

export default Home
