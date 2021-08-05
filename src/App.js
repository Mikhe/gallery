import React from 'react';

import './styles/App.scss';
import { Header } from './components/header/header';
import { Title } from './components/title/title';

function App() {
    return (
        <div className="App">
            <Header />
            <Title />
        </div>
  );
}

export default App;
