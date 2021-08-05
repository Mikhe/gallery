import React from 'react';

import CartIcon from '../../assets/cart.svg';
import { Text } from '../../uikit';

export const Cart = (props) => {
    const { cn } = props;

    return (
        <div className={cn('cart')}>
            <img width={22} height={22} src={CartIcon} className={cn('cart-logo')}/>

            <Text className={cn('cart-text')} transform={'uppercase'}>
                Корзина
            </Text>

            <Counter cn={cn} />
        </div>
    );
};

const Counter = (props) => {
    const { cn } = props;

    return (
        <div className={cn('cart-counter')}>
            <Text className={cn('cart-counter-value')} transform={'uppercase'} fs="14px">5</Text>
        </div>
    );
};
