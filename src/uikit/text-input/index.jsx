import React from 'react';

import './text-input.scss';
import { uikitCn } from '../index';
import { Icon } from '../index';

const TextInput = (props) => {
    const { className, placeholder, placeholderAlign, icon, subplaceholder } = props;
    const placeholderAlignRight = placeholderAlign === 'right';

    return (
        <div className={
            `${uikitCn('text-input', {
                icon: !!icon,
                subplaceholder: !!subplaceholder,
                placeholderAlignRight
            })} ${className}`
        }>
            <input
                type="text"
                placeholder={placeholder}
            />

            {subplaceholder && (
                <span className={uikitCn('text-input-subplaceholder')}>{subplaceholder}</span>
            )}

            {icon && (
                <Icon
                    className={uikitCn('text-input-icon')}
                    name="search"
                    width={14}
                    height={14}
                    color="lightgray"
                />
            )}
        </div>
    );
};

export default TextInput;
