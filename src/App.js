import React from 'react';
import './App.css';
import Table from './components/Table';
import FiltersNumber from './components/FiltersNumber';
import FilterName from './components/FilterName';

function App() {
  return (
    <>
      <FilterName />
      <FiltersNumber />
      <Table />
    </>
  );
}

export default App;
