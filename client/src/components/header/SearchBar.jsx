import React from 'react';
import {SearchInput,SearchButtom} from './StyledHeader';
import {useDispatch} from 'react-redux';
import {getCountriesByName} from '../../Redux-actions/Actions'
function SearchBar(props) {
    const dispatch = useDispatch();
    function handleInputChange(e){
        props.setState(e.target.value)
    }
    function handleOnSubmit(e) {
        e.preventDefault();
        dispatch(getCountriesByName(props.state))
    }
    return (
        <React.Fragment>
            <form onSubmit={handleOnSubmit}>
            <SearchInput placeholder='Search a Country....' onChange={handleInputChange} />
            <SearchButtom type='submit'>Search...</SearchButtom>
            </form>
        </React.Fragment>
    )
}

export default SearchBar
