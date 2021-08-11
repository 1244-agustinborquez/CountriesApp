import React from 'react'
import {SearchInput,SearchButtom} from './StyledHeader'
function SearchBar() {
    return (
        <React.Fragment>
            <SearchInput placeholder='Search a Country....' />
            <SearchButtom type='submit'>Search...</SearchButtom>
        </React.Fragment>
    )
}

export default SearchBar
