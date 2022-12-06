import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import mockPlanets from '../helpers/mockPlanets';
import StarWarsProvider from '../context/StarWarsProvider';
import userEvent from '@testing-library/user-event';

describe('Teste FiltersNumber', () => {
  test('Testa filtro númerico igual e rotation period', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => mockPlanets
    }));
    
  render(
  <StarWarsProvider> 
    <App />
  </StarWarsProvider> );

  const numberFilter = screen.getByTestId('value-filter');
  const dropDownFilter = screen.getAllByRole('combobox')
  const filterBtn = screen.getByRole('button', {name: 'Filtrar'});

  userEvent.selectOptions(dropDownFilter[0], ['rotation_period'])
  userEvent.selectOptions(dropDownFilter[1], ['igual a'])
  userEvent.type(numberFilter, '23')
  userEvent.click(filterBtn)

const tableRows = screen.getAllByRole('row');
waitFor(() => expect(tableRows).toHaveLength(3));

})
test('Testa os filtros surface water e diameter combinados', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => mockPlanets
    }));
    
  render(
  <StarWarsProvider> 
    <App />
  </StarWarsProvider> );

  const numberFilter = screen.getByTestId('value-filter');
  const dropDownFilter = screen.getAllByRole('combobox')
  const filterBtn = screen.getByRole('button', {name: 'Filtrar'});

  userEvent.selectOptions(dropDownFilter[0], ['diameter'])
  userEvent.selectOptions(dropDownFilter[1], ['maior que'])
  userEvent.type(numberFilter, '12100')
  userEvent.click(filterBtn)

  userEvent.selectOptions(dropDownFilter[0], ['surface_water'])
  userEvent.selectOptions(dropDownFilter[1], ['maior que'])
  userEvent.type(numberFilter, '15')
  userEvent.click(filterBtn)

const tableRows = screen.getAllByRole('row');
waitFor(() => expect(tableRows).toHaveLength(2));
})

test('Testa os filtros orbital e population combinados', async () => {
  global.fetch = jest.fn(async () => ({
    json: async () => mockPlanets
  }));
  
render(
<StarWarsProvider> 
  <App />
</StarWarsProvider> );

const numberFilter = screen.getByTestId('value-filter');
const dropDownFilter = screen.getAllByRole('combobox')
const filterBtn = screen.getByRole('button', {name: 'Filtrar'});

userEvent.selectOptions(dropDownFilter[0], ['orbital_period'])
userEvent.selectOptions(dropDownFilter[1], ['maior que'])
userEvent.type(numberFilter, '350')
userEvent.click(filterBtn)

userEvent.selectOptions(dropDownFilter[0], ['population'])
userEvent.selectOptions(dropDownFilter[1], ['menor que'])
userEvent.type(numberFilter, '10000')
userEvent.click(filterBtn)

const tableRows = screen.getAllByRole('row');
waitFor(() => expect(tableRows).toHaveLength(1));
})

test('Testa se os filtros selecionados aparecem na tela e são deletados', async () => {
  global.fetch = jest.fn(async () => ({
    json: async () => mockPlanets
  }));
  
render(
<StarWarsProvider> 
  <App />
</StarWarsProvider> );

expect(screen.queryByText('Delete')).not.toBeInTheDocument();
userEvent.click(screen.getByText('Filter'));
expect(screen.queryByText('Delete')).toBeInTheDocument();
userEvent.click(screen.getByText('Delete'));
expect(screen.queryByText('Delete')).not.toBeInTheDocument();

userEvent.click(screen.getByText('Filtrar'));
userEvent.click(screen.getByText('Filtrar'));
userEvent.click(screen.getByText('Filtrar'));
expect(screen.getAllByText('Delete')).toHaveLength(3);
userEvent.click(screen.getByText('Excluir Filtros'));
expect(screen.queryByText('Delete')).not.toBeInTheDocument();
  
})
});