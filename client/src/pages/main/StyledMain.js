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
export const LeandingMain = styled.section`
    background-image: url('/fondo3.jpg'); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 1208px;
`