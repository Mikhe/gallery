import React from 'react';

import './styles/app.scss';
import Header from './components/header';
import Title from './components/title';
import Toolbar from './components/toolbar';
import { createCn } from 'bem-react-classname';

function App() {
    const cn = createCn('app');

    return (
        <div className={cn()}>
            <Header />
            <Title />
            <main className={cn('main')}>
                <Toolbar />
            </main>
        </div>
  );
}

export default App;
