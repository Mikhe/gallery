import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto-cyrillic';

import App from './app';

document.fonts.load("12px Roboto").then(() => {
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById('root')
    )
});
