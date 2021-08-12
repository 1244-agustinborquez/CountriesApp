import styled from 'styled-components';

//-------------------     variables     --------------------------//
const colors = {
    black: '#000',
    white: '#fff',
    moradoOscuro: '#150C2B'
}

//-------------------     ContenedoresPrincipales     --------------------------//
export const Content = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 10vh;
`
export const SearchContent = styled.div`
    margin-top: 50px;
`
export const FiltersContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 30px;
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

/**order By Continent, Order By Name, Order By Population */
export const Form = styled.form`
    padding: 2%;
    text-align: center;
    width: 80%;
    display: flex;
`

export const Select = styled.select`
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    appearance:none;
    outline:0;
    box-shadow:none;
    border: 1px solid ${colors.white};
    backdrop-filter: blur(5px);
    background: rgba(0,0,0,.8);
    background-image: none;
    flex: 1;
    padding: 0 .5em;
    color:#fff;
    cursor: pointer;
    font-size: 40px;
    border-radius: 25px 0 0 25px;
    &::-ms-expand {
    display: none;
    }
`
export const SelectDiv = styled.div`
    position: relative;
    display: flex;
    width: 20em;
    height: 3em;
    line-height: 3;
    background: black;
    overflow: hidden;
    border-radius: .25em;
    &:after {
        content: '\25BC';
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 1em;
        background: #000;
        cursor: pointer;
        pointer-events:none;
        transition:.25s all ease;
    }
    &:hover::after {
        color: #23b499;
    }
`
export const Option = styled.option`
`
export const Button = styled.button`
    margin-left: 1%;
    border-radius: 0 25px 25px 0;
    font-size: 35px;
    cursor: pointer;
    border: 1px solid ${colors.white};
    background: rgba(0,0,0,.8);
    backdrop-filter: blur(5px);
    color: ${colors.white};
`


