import React from 'react';

import './text-input.scss';
import { uikitCn } from '../index';
import { Icon } from '../index';

const TextInput = (props) => {
    const { className, placeholder, icon, subplaceholder, value, onChange, onClick } = props;
    const ref = React.useRef(null);
    const handleChange = (e) => {
        onChange && onChange(ref.current.value);
    };
    const handleClick = (e) => {
        onClick && onClick(ref.current.value);
    };

    return (
        <div className={
            `${uikitCn('text-input', {
                icon: !!icon,
                subplaceholder: !!subplaceholder,
            })} ${className}`
        }>
            <input
                ref={ref}
                value={value}
                onChange={handleChange}
                type="text"
                placeholder={placeholder}
            />

            {subplaceholder && (
                <span className={uikitCn('text-input-subplaceholder')} onClick={handleClick}>
                    {subplaceholder}
                </span>
            )}

            {icon && (
                <Icon
                    onClick={handleClick}
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
