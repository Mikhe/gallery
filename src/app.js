import React from 'react';
import { createCn } from 'bem-react-classname';

import './styles/app.scss';
import Header from './components/header';
import Title from './components/title';
import Toolbar from './components/toolbar';
import Gallery from './components/gallery';
import Footer from './components/footer';

function App() {
    const cn = createCn('app');

    return (
        <div className={cn()}>
            <Header />
            <Title />
            <main className={cn('main')}>
                <Toolbar />
                <Gallery />
            </main>
            <Footer />
        </div>
  );
}

export default App;
