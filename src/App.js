import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';

// import Complete from './components/Complete';
import Header from './components/Header';
import Field from './components/Grid';
import NewGameButton from './components/ButtonNewGame';
// import Info from './components/Card';

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
        <NewGameButton />
      </main>
    </div>
  );
}

export default App;
