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
export const LeandingHome = styled.section`
    background-image: url('/earthneonblackbackgroundworldmap.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 625px;
`
export const Navhome = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const LogoHome = styled.h2`
    color: ${colors.white};
    cursor: pointer;
    text-decoration: none;
`
export const LinkAbout = styled.button`
    background: none;
    color: ${colors.white};
    padding: 1rem 3rem;
    border: 1px solid ${colors.white};
    font-size: 20px;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    transition: all .4s ease-in-out;
        &:hover{
            background: ${colors.white};
            color: ${colors.black};
        }
`
export const HomeContent = styled.div`
    margin: 0 auto;
    margin-top: 10rem;
    width: 50%;
    height: 50%;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, .8); 
    border-radius: 15px;
    background-color: rgba(0, 0, 0, .15);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const HomeContentTitle = styled.h1`
    color: ${colors.white};
    text-align: center;
    font-size: 2rem;
`
export const HomeContentText = styled.p`
    color: ${colors.white};
    text-align: center;
    line-height: 20px;
    font-size: 20px;
` 