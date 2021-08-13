import React from 'react';
import {Select,SelectDiv,Option,Form,Button} from './StyledHeader';
import {useDispatch} from 'react-redux';
import {orderCountriesByContinent} from '../../Redux-actions/Actions'
function OrderByContinent(props) {
    const dispatch = useDispatch();
    function handleOnSubmit(e) {
        e.preventDefault();
        dispatch(orderCountriesByContinent(props.state))
    }
    function handleSelectChange(e) {
        props.setState(e.target.value)
    }
    return (
    <Form onSubmit={handleOnSubmit}>
        <SelectDiv>
            <Select value={props.state} onChange={handleSelectChange}>
                <Option value="all">All</Option>
                <Option value="Africa">Africa</Option>
                <Option value="Americas">Americas</Option>
                <Option value="Asia">Asia</Option>
                <Option value="Europe">Europe</Option>
                <Option value="Oceania">Oceania</Option>
                <Option value="Polar">Polar</Option>
            </Select>
        </SelectDiv>
        <Button type="submit" value="Submit">Filter</Button>
    </Form>
    )
}



export default OrderByContinent
