import React from 'react';
import { observer } from 'mobx-react';

import { Text, Icon } from '../../uikit';
import { store } from '../../stores/store';

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

const Counter = observer((props) => {
    const { bought } = store;
    const { cn } = props;

    return (
        <div className={cn('cart-counter')}>
            <Text className={cn('cart-counter-value')} transform={'uppercase'}>{bought}</Text>
        </div>
    );
});

export default Cart;