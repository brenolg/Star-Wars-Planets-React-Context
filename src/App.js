import React from 'react';
import './App.css';
import Table from './components/Table';
import AllFilters from './components/AllFilters';
import Header from './components/Header';
import galaxy from './images/galaxy.jpg';
import Footer from './components/Footer';

function App() {
  return (
    <html lang="pt">
      <head>
        <title>Star Wars Planets </title>
        <link href="https://fonts.googleapis.com/css2?family=Epilogue&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Breno Lavalle Garrido" />
      </head>

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
        <Footer />
      </body>
    </html>

  );
}

export default App;
