import styled,{createGlobalStyle} from 'styled-components';

//-------------------     variables     --------------------------//
const colors = {
    black: '#000',
    white: '#fff'
}


//-------------          Componentes     -------------------------//

export const Globals = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }
`
export const LeandingMain = styled.section`
    background-image: url('/fondo3.jpg'); 
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
`