import styled from "styled-components";
import {Link} from 'react-router-dom';
//-------------------     variables     --------------------------//
const colors = {
    black: '#000',
    white: '#fff'
}


//-------------          Componentes     -------------------------//

export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin: 1%;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    };
`;

export const CountryCard = styled.div`
    border: 1px solid ${colors.white};
    border-radius: 15px;
    background-color: rgba(0, 0, 0, .15);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 300px;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 300px;
    transition: all .4s ease-in-out;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    };
    &:hover{
        height: 400px;
        box-shadow: 0 0 20px 0 ${colors.white};
    }

`
export const CountryFlag = styled.img`
    height: 160px;
    width: 240px;
`
export const CountryName = styled.span`
    color: ${colors.white};
    font-size: 30px;
`
export const CountryContinent = styled.span`
    color: ${colors.white};
    font-size: 25px;
`

