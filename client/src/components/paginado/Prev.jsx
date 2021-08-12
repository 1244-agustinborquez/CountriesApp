import React from 'react'
import {Button} from './StyledPaginado'
function Prev(props) {
    function handleButtonClick(){
        if (props.stateStart <= 9 && props.stateEnd <= 18){
            props.setStateStart(0)
            return props.setStateEnd(9)
        }
        props.setStateStart(prevState => prevState - 9)
        props.setStateEnd(prevState => prevState - 9)
    }

    return (
        <Button onClick={handleButtonClick}>Prev Page</Button>
    )
}

export default Prev
