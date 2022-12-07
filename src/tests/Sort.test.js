import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import mockPlanets from '../helpers/mockPlanets';
import StarWarsProvider from '../context/StarWarsProvider';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Teste FilterName', () => {
    test('Testa se sort de planetas com dados unknown ', async () => {
     global.fetch = jest.fn(async () => ({
     json: async () => mockPlanets}));
        
    act(() => {
      render(
       <StarWarsProvider> 
        <App />
      </StarWarsProvider> )
    });

  await screen.findByText('Alderaan')
  expect(screen.getByRole('button', {name: /ordenar/i})).toBeInTheDocument();
  expect(screen.getByText(/ascendente/i)).toBeInTheDocument();
  expect(screen.getByText(/descendente/i)).toBeInTheDocument();

  const btnSort = screen.getByRole('button', {name: /ordenar/i})
  userEvent.click(btnSort)
 
  const tableRows = screen.getAllByRole('row');
  expect(tableRows[9]).toHaveTextContent('Hoth');
})
});