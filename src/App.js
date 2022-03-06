import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';

import Header from './components/Header';
import Field from './components/Grid';
import NewGameButton from './components/ButtonNewGame';
import NewWordButton from './components/ButtonAddWord';
import Info from './components/Card';

function App() {

  React.useEffect(() => {
    document.title = "Boogle Game";  
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='main'>
        <Field />
        <div className='btn-block'>
          <NewGameButton />
          <NewWordButton />
        </div>
        <Info />
      </main>
    </div>
  );
}

export default App;
