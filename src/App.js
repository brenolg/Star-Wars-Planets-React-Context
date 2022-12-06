import React from 'react';
import './App.css';
import Table from './components/Table';
import FiltersNumber from './components/FiltersNumber';
import FilterName from './components/FilterName';
import Sort from './components/Sort';

function App() {
  return (
    <>
      <FilterName />
      <FiltersNumber />
      <Sort />
      <Table />
    </>
  );
}

export default App;
