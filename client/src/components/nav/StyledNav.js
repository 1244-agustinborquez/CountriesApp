import styled from 'styled-components';

//-------------------     variables     --------------------------//
const colors = {
    black: '#000',
    white: '#fff'
}

export const Navv = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid ${colors.white};
`
export const Logo = styled.div`
    border-radius: 50%;
    font-size: 0.8rem;
    cursor: pointer;
`

export const Title = styled.h2`
    color: ${colors.white};
    text-decoration: none;
    margin-bottom: 10px;
`
export const LinkForm = styled.button`
    background: none;
    color: ${colors.white};
    padding: 1rem 3rem;
    border: 1px solid ${colors.white};
    font-size: 20px;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    transition: all .4s ease-in-out;
        &:hover{
            background: ${colors.white};
            color: ${colors.black};
        }
`