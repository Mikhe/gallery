import React from 'react';

import { Text, Icon } from '../../uikit';

const Cart = (props) => {
    const { cn } = props;

    return (
        <div className={cn('cart')}>
            <Icon width={20} height={23} name="cart" color="lightgray" className={cn('cart-logo')}/>

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
            <Text className={cn('cart-counter-value')} transform={'uppercase'}>5</Text>
        </div>
    );
};

export default Cart;