import React from 'react';
import {Content,SearchContent,FiltersContent} from './StyledHeader';
import SearchBar from './SearchBar';
function Index() {
    return (
        <Content>
            <SearchContent>
                <SearchBar/>
            </SearchContent>
            <FiltersContent>
            </FiltersContent>
        </Content>
    )
}

export default Index
