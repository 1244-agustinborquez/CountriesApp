import styled from "styled-components";
//-------------------     variables     --------------------------//
const colors = {
    black: '#000',
    white: '#fff'
}


//-------------          Componentes     -------------------------//
export const CountryCard = styled.div`
    border: 1px solid ${colors.white};
    border-radius: 15px;
    background-color: rgba(0, 0, 0, .15);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 400px;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 300px;
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
    font-size: 20px;
`

