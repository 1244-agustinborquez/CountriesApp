import styled from 'styled-components';

//-------------------     variables     --------------------------//
const colors = {
    black: '#000',
    white: '#fff'
}

export const FormContent = styled.form`
    width: 65%;
    height: 75%;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, .15);
    backdrop-filter: blur(5px);
    padding: 30px;
    border-radius: 5px;
    color: ${colors.white};
    box-shadow: 7px 13px 37px ${colors.black};
`

export const TitleForm = styled.h3`
    font-size: 22px;
    margin-bottom: 20px;
`

export const InputForm = styled.input`
    width: 100%;
    background: none;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    border: 1px solid ${colors.white};
    font-size: 18px;
    color: ${colors.white};
`
export const ErrorP = styled.p`
    &.danger{
        color: red;
        font-size: 25px;
    }
`
export const SelectForm = styled.select`
    width: 100%;
    background: none;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    border: 1px solid ${colors.white};
    font-size: 18px;
    color: ${colors.white};
`
export const OptionForm = styled.option`
    color: black;
`

export const ButtomForm = styled.button`
    border: 1px solid ${colors.white};
    color: ${colors.white};
    background: none;
    border-radius: 15px;
    width: 100%;
    padding: 10px;
    margin: 15px 0;
    font-size: 16px;
    cursor: pointer;
    transition: all .4s ease-in-out;
        &:hover{
            background: ${colors.white};
            color: ${colors.black};
        }
`