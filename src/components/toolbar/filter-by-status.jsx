import React from 'react';
import { observer } from 'mobx-react';

import { Text } from '../../uikit';
import { store } from '../../stores/store';

const filterOptions = [
    { text: 'Все', value: 1 },
    { text: 'Проданные на аукционе', value: 2 },
]

const FilterByStatus = (props) => {
    const { cn } = props;

    return (
        <div className={cn('filter-by-status')}>
            {filterOptions.map(filter => (
                <Filter cn={cn} option={filter} key={filter.value} />
            ))}
        </div>
    );
};

const Filter = observer((props) => {
    const { status, filterByStatus } = store;
    const { cn, option } = props;
    const isActive = status === option.value;
    const handleClick = () => {
        filterByStatus(option.value)
    };

    return (
        <div className={cn('filter-by-status-option', { active: isActive })} onClick={handleClick}>
            <Text fs="16px" className={cn('filter-by-status-option-text')}>{option.text}</Text>
        </div>
    )
});

export default FilterByStatus;