import React from 'react';

import './icon.scss';
import { uikitCn } from '../index';

function Icon(props) {
    const { name, width, height, color, className, onClick } = props;
    const handleClick = () => {
        onClick && onClick();
    };

    return (
        <div
            className={`${uikitCn('icon', { clickable: !!onClick })} ${className}`}
            onClick={handleClick}
        >
            <div
                style={{ width: width, height: height }}
                className={uikitCn('icon-image', { icon: name, color })}
            />
        </div>
    );
}

export default Icon;