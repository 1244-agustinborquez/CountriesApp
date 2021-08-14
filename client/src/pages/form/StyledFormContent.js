import styled from 'styled-components';

//-------------------     variables     --------------------------//
const colors = {
    black: '#000',
    white: '#fff'
}

export const Content = styled.section`
    display: flex;
    height: 80vh;
    justify-content: space-around;
    text-align: center;
    margin: auto;
    margin-top: 40px;
`
export const ContentForm = styled.div`

`
export const ContentCountriess = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
`

export const CountriesDiv = styled.div`
    
`

export const StyledUList = styled.ul`
    background: none;
    height: 40vh;
    width: 40vw;
    list-style: none;
    overflow: hidden;
    overflow-y: scroll;
    margin-right: 150px;
`
export const StyledLItem = styled.li`
    margin: 5px;
    color: ${colors.white};
`
export const ButtonChoose = styled.button`
    margin-left: 5px;
    background: none;
    color: ${colors.white};
    padding: 1rem 3rem;
    border: 1px solid ${colors.white};
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    transition: all .4s ease-in-out;
        &:hover{
            background: ${colors.white};
            color: ${colors.black};
        }
`