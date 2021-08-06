import React from 'react';

import { TextInput } from '../../uikit';

const Search = (props) => {
    const { cn } = props;

    return (
        <TextInput
            className={cn('filter-search')}
            placeholder="Поиск по названию картины"
            subplaceholder="НАЙТИ"
            icon="search"
        />
    );
}

export default Search;