import styled,{createGlobalStyle} from 'styled-components';

//-------------------     variables     --------------------------//
const colors = {
    black: '#000',
    white: '#fff',
    azulado: '#1D1C46'
}


//-------------          Componentes     -------------------------//

export const Globals = createGlobalStyle`
    body{
        background: ${colors.azulado};
        margin: 0;
        padding: 0;
    }
`

export const Section = styled.section`
    background-image: url('/fondo3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 750px;
`
export const Nav = styled.nav`
    display: flex;
    justify-content: start;
`

export const Logo = styled.div`
    border-radius: 50%;
    font-size: 0.8rem;
    cursor: pointer;
    margin-left: 20px;
`
export const CountryDetailContent = styled.div`
    margin-top: 10rem;
    margin-left: 10rem;
    width: 50%;
    height: 50%;
    border-radius: 15px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 15px;
`
export const ActivityByCountryDetailContent = styled.div`

    border-radius: 15px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 15px;
`

export const CountryCardDetail = styled.div`
    border: 1px solid ${colors.white};
    border-radius: 15px;
    background-color: rgba(0, 0, 0, .15);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
    height: 400px;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 300px;
    transition: all .4s ease-in-out;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    };
    &:hover{
        height: 500px;
        box-shadow: 0 0 20px 0 ${colors.white};
    }
`


//---------------------------//

export const CountryDetailFlag = styled.img`
    height: 160px;
    width: 240px;
`

export const CountryDetailName = styled.span`
    margin: 0;
    color: ${colors.white};
    font-size: 30px;
`
export const CountryDetailContinent = styled.span`
    margin: 0;
    color: ${colors.white};
    font-size: 25px;
`
export const CountryDetailCapital= styled.span`
    margin: 0;
    color: ${colors.white};
`
export const CountryDetailSubregion= styled.span`
    margin: 0;
    color: ${colors.white};
`
export const CountryDetailPoblacion= styled.span`
    margin: 0;
    color: ${colors.white};
`
export const CountryDetailArea = styled.span`
    margin: 0;
    color: ${colors.white};
    font-size: 25px;
`
//------------------------------//

export const ActivityByCountryTitle = styled.h2`
    margin: 0;
    color: ${colors.white};
    font-size: 35px;
`
export const ActivityByCountryName = styled.span`
    margin: 0;
    color: ${colors.white};
    font-size: 30px;
`
export const ActivityByCountryDificultad = styled.span`
    margin: 0;
    color: ${colors.white};
    font-size: 25px;
`
export const ActivityByCountryDuracion = styled.span`
    margin: 0;
    color: ${colors.white};
    font-size: 25px;
`
export const ActivityByCountryTemporada = styled.span`
    margin: 0;
    color: ${colors.white};
    font-size: 25px;
`

export const ActivityNoFound = styled.p`
    margin: 0;
    color: ${colors.white};
    font-size: 25px;
    text-align: center;
`

