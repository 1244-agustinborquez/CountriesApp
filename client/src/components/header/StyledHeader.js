import styled from 'styled-components';

//-------------------     variables     --------------------------//
const colors = {
    black: '#000',
    white: '#fff',
    moradoOscuro: '#150C2B'
}

//-------------------     ContenedoresPrincipales     --------------------------//
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 10vh;
`
export const SearchContent = styled.div`
    margin-top: 10px;
`
export const FiltersContent = styled.div`

`

//-------------------     Search     --------------------------//

export const SearchInput = styled.input`
    background: ${colors.white};
    border-radius: 25px 0 0 25px;
    border: 1px solid ${colors.moradoOscuro};
    color: ${colors.moradoOscuro};
    font-size: 30px;
    transition: all .3s ease-in-out;
    &:focus,&:active{
        outline: none;
    }
    &::placeholder{color: ${colors.moradoOscuro};}
`

export const SearchButtom = styled.button`
    background: ${colors.moradoOscuro};
    border-radius: 0 25px 25px 0;
    border: 1px solid ${colors.white};
    color: ${colors.white};
    font-size: 30px;
    cursor: pointer;
    &:focus,&:active{
        outline: none;
    }
`

//-------------------     filters     --------------------------//