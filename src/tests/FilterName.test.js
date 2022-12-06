import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import mockPlanets from '../helpers/mockPlanets';
import StarWarsProvider from '../context/StarWarsProvider';
import userEvent from '@testing-library/user-event';

describe('Teste FilterName', () => {
  test('Testa se ao escrever Kamino é renderizado somente o planeta Kamino', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => mockPlanets
    }));
    
  render(
  <StarWarsProvider> 
    <App />
  </StarWarsProvider> );

  const inputName = screen.getByTestId('name-filter');
  expect(inputName).toBeInTheDocument();

  const searchKamino = 'Kamino'
  userEvent.type(inputName, searchKamino)

  await waitFor(() =>
  expect(screen.getByText('Kamino')).toBeInTheDocument());

})
});