import React from 'react';
import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Filters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
