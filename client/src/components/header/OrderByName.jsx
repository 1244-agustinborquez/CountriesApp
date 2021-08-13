import React from 'react'
import {useDispatch} from 'react-redux';
import {Select,SelectDiv,Option,Form,Button} from './StyledHeader';
import {orderCountriesByName} from '../../Redux-actions/Actions'
function OrderByName(props) {
    const dispatch = useDispatch();
    function handleOnSubmit(e) {
        e.preventDefault();
        dispatch(orderCountriesByName(props.state))
    }
    function handleSelectChange(e) {
        props.setState(e.target.value)
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <SelectDiv>
            <Select value={props.state} onChange={handleSelectChange}>
                <Option value="ASC">ASC</Option>
                <Option value="DESC">DESC</Option>
            </Select>
            </SelectDiv>
        <Button type="submit" value="Submit">Name</Button>
        </Form> 
    )
}

export default OrderByName
