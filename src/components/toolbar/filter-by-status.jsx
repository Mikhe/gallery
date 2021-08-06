import React from 'react';

import { Text } from '../../uikit';

const filterOptions = [
    { text: 'Все', value: 1 },
    { text: 'Проданные на аукционе', value: 2 },
]

const FilterByStatus = (props) => {
    const { cn } = props;

    return (
        <div className={cn('filter-by-status')}>
            {filterOptions.map(filter => (
                <Filter cn={cn} option={filter} idx={filter.value} />
            ))}
        </div>
    );
}

const Filter = (props) => {
    const { cn, option } = props;

    return (
        <div className={cn('filter-by-status-option')}>
            <Text fs="16px" className={cn('filter-by-status-option-text')}>{option.text}</Text>
        </div>
    )
}

export default FilterByStatus;