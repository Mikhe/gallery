import React from 'react';
import { createCn } from 'bem-react-classname';

import './header.scss';
import LogoIcon from '../../assets/logo.svg';
import { Cart } from './cart';
import { Text } from '../../uikit/text/text';

export const Header = () => {
    const cn = createCn('header');

    return (
        <header className={cn()}>
            <div className={cn('container')}>
                <div className={cn('logo-container')}>
                    <img src={LogoIcon} width={48} height={48} className={cn('logo-container-logo')}/>
                    <Text className={cn('logo-container-text')} transform={'uppercase'}>
                        прекрасная Работа, достойная каждого
                    </Text>
                </div>

                <Cart cn={cn} />
            </div>
        </header>
    );
};
