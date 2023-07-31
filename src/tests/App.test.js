import { render } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import StarWarsProvider from '../context/StarWarsProvider';
import mockPlanets from '../helpers/mockPlanets';

describe('Teste App', () => {
  test('Testa se a API esta sendo chamada', () => {
    global.fetch = jest.fn(async () => ({
      json: async () => mockPlanets
    }));

    act(() => {
      render(
      <StarWarsProvider>
        <App />
      </StarWarsProvider> )
    });


  expect(global.fetch).toHaveBeenCalled();
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch).toBeCalledWith('https://swapi.py4e.com/api/planets')
  // screen.logTestingPlaygroundURL();
})
});
