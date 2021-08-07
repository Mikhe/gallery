import React from 'react';

import { TextInput } from '../../uikit';
import { store } from '../../stores/store';

const Search = (props) => {
    const { filterByTitle } = store;
    const { cn } = props;
    const handleChange = (value) => {
        filterByTitle(value);
    }

    return (
        <TextInput
            onClick={handleChange}
            className={cn('filter-search')}
            placeholder="Поиск по названию картины"
            subplaceholder="НАЙТИ"
            icon="search"
        />
    );
}

export default Search;