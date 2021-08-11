import React from 'react';
import {Link} from 'react-router-dom';
import {Navv,Logo,Title,LinkForm} from './StyledNav'
function Nav() {
    return (
        <Navv>
            <Link to='/'>
            <Logo>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            </Logo>
            </Link>
            <Title>Country App</Title>
            <Link to='/newActivity'><LinkForm>New Activity</LinkForm></Link>
        </Navv>
    )
}
export default Nav
