import React from 'react';
import './App.css';
import Table from './components/Table';
import AllFilters from './components/AllFilters';
import Header from './components/Header';
import galaxy from './images/galaxy.jpg';

function App() {
  return (

    <body>
      <img
        id="background"
        src={ galaxy }
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
