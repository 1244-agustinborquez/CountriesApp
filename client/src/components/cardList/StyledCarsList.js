import styled from "styled-components";
//-------------------     variables     --------------------------//
const colors = {
    black: '#000',
    white: '#fff'
}


//-------------          Componentes     -------------------------//
export const CountryCardLists = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 15px;
`