import styled,{createGlobalStyle,keyframes} from 'styled-components';

//-------------------     variables     --------------------------//
const colors = {
    primary: '#000021',
    second: '#000032',
    black: '#000',
    white: '#fff'
}


//-------------          Componentes     -------------------------//

export const Globals = createGlobalStyle`
    body{
        background: linear-gradient(90deg, ${colors.primary} 0% , ${colors.second} 100%);
        margin: 0;
        padding: 0;
    }
`
export const NavAboutContent = styled.nav`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    right: 0;
`

export const NavAbout = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

export const AboutIconContent = styled.div`
    border-radius: 50%;
    animation: ${rotate} 10s linear infinite;
    font-size: 1.2rem;
    cursor: pointer;
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
export const LeandingAbout = styled.section`
    position: relative;
    background: linear-gradient(90deg, ${colors.primary} 0% , ${colors.second} 100%);
    height: 100vh;
    width: 100vw;
`

export const AboutContent = styled.div`
    position: absolute;
    top: 25%;
    left: 25%;
    right: 25%;
    width: 50%;
    height: 60%;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, .8); 
    border-radius: 15px;
    background-color: rgba(0, 0, 0, .15);
    backdrop-filter: blur(5px);
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: center;
    align-items: center;
    gap: 10px;
`



export const AboutImageContent = styled.img`
    src: url(${props => props.src});
    max-width: 100%;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
`

export const AboutContentText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AboutTitle = styled.h1`
    color: ${colors.white};
    text-align: center;
    font-size: 2rem;
    margin: 0;
`
export const AboutText = styled.p`
    color: ${colors.white};
    text-align: center;
    line-height: 20px;
    font-size: 20px;
    margin: 0;
    margin-top: 15px;
` 
