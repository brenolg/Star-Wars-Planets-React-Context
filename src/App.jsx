import React from 'react';
import './Global.css';
import AllFilters from './components/AllFilters';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';

function App() {

  return (
    <>
      <Header />
      <main>
        <AllFilters />
        <Table />
      </main>
      <Footer />
    </>
  )
}

export default App
