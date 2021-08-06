import React from 'react';
import { createCn } from 'bem-react-classname';

import './toolbar.scss';
import FilterByStatus from './filter-by-status';
import Search from './Search';

const Toolbar = () => {
    const cn = createCn('toolbar');

    return (
        <div className={cn()}>
            <FilterByStatus cn={cn} />
            <Search cn={cn}/>
        </div>
    );
}

export default Toolbar;