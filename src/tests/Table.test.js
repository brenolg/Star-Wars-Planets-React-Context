import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import StarWarsProvider from '../context/StarWarsProvider';
import mockPlanets from '../helpers/mockPlanets'

describe('Teste de Filtros', () => {
  test('Testa se é renderizado 9 planetas', () => {
    global.fetch = jest.fn(async () => ({
        json: async () => mockPlanets
      }));

  render(
  <StarWarsProvider> 
    <App />
  </StarWarsProvider>
 );
 screen.logTestingPlaygroundURL();
 const tableRows = screen.getAllByRole('row');
 waitFor(() => expect(tableRows).toHaveLength(9));
})
});