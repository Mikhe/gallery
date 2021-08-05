import React from 'react';
import { createCn } from 'bem-react-classname';

import './title.scss';
import { Text } from '../../uikit';

const Title = () => {
    const cn = createCn('title');

    return (
        <div className={cn()}>
            <Text className={cn('text')} transform="uppercase" fs="86px">
                Картины эпохи
                <br />
                Возрождения
            </Text>
        </div>
    );
};

export default Title;
