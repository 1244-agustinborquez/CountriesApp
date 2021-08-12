import React from 'react'
import {useDispatch} from 'react-redux';
import {Select,SelectDiv,Option,Form,Button} from './StyledHeader';
import {orderCountriesByPopulation} from '../../Redux-actions/Actions'
function OrderPopulation(props) {
    const dispatch = useDispatch();
    function handleOnSubmit(e) {
        e.preventDefault();
        dispatch(orderCountriesByPopulation(props.state))
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
        <Button type="submit" value="Submit">Population</Button>
        </Form> 
    )
}

export default OrderPopulation
