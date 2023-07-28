import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './Global.css';
import { StarWarsProvider } from './context/StarWarsProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StarWarsProvider>
      <App />
    </StarWarsProvider>
  </React.StrictMode>,
);
