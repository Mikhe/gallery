import React from 'react';

import './text.scss';
import { uikitCn } from '../index';

export const Text = (props) => {
    const { children, transform, className, fs, color } = props;

    return <p className={`
        ${uikitCn('text', { fs: fs, color: color, transform: transform })} ${className}
    `}>
        {children}
    </p>
}