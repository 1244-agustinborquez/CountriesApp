import React from 'react';
import {useSelector} from 'react-redux'
import {Select,SelectDiv,Option,Form,Button} from './StyledHeader';
import {useDispatch} from 'react-redux';
import {orderCountriesByActivity} from '../../Redux-actions/Actions';
function OrderByActivity(props) {
    const activitys = useSelector(state => state.activityLoaded);
    const dispatch = useDispatch();
    function handleOnSubmit(e) {
        e.preventDefault();
        dispatch(orderCountriesByActivity(props.state))
    }
    function handleSelectChange(e) {
        props.setState(e.target.value)
    }
    return (
        <Form onSubmit={handleOnSubmit}>
        <SelectDiv>
            <Select value={props.state} onChange={handleSelectChange}>
                <Option value="all">None</Option>
                {activitys.length ? activitys?.map(activity => <Option key={activity.id} value={activity.name}>{activity.name}</Option>) : 
                <Option value="all">No activity created</Option>}
            </Select>
        </SelectDiv>
        <Button type="submit" value="Submit">Filter</Button>
    </Form>
    )
}

export default OrderByActivity
