import React from 'react'
import {Button} from './StyledPaginado'


function Next(props) {
    function handleButtonClick(){
        if(props.stateStart < 243) {
            props.setStateStart(prevState => prevState + 9)
            props.setStateEnd(prevState => prevState + 9)
        }
    }
    return (
        <Button onClick={handleButtonClick}>Next Page</Button>
    )
}

export default Next


