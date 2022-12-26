import React from 'react';
import './App.css';
import Table from './components/Table';
import AllFilters from './components/AllFilters';
import Header from './components/Header';
import background from './images/background.svg';

function App() {
  return (

    <body>
      <img
        id="background"
        src={ background }
        alt="tiltle"
      />
      <Header />
      <main>
        <AllFilters />
        <Table />
      </main>
    </body>

  );
}

export default App;
