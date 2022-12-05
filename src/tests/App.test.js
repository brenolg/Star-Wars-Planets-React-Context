import React from 'react';
import { render , screen} from '@testing-library/react';
import App from '../App';
import StarWarsProvider from '../context/StarWarsProvider';
import mockPlanets from '../helpers/mockPlanets'


describe('Teste App', () => {
  test('Testa se a API esta sendo chamada', () => {
    global.fetch = jest.fn(async () => ({
      json: async () => mockPlanets
    }));
    
  render(
  <StarWarsProvider> 
    <App />
  </StarWarsProvider> );


  expect(global.fetch).toHaveBeenCalled();
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch).toBeCalledWith('https://swapi.py4e.com/api/planets')
})
});
