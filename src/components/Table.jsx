import { number } from 'prop-types';
import { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { data } = useContext(StarWarsContext);

  const [searchName, setSearchName] = useState('');
  const [filter, setFilter] = useState({
    colum: '',
    comparison: 'maior que',
    number: 0,
  });
  const [selectedFilters, setSelFilters] = useState([]);

  return (
    <>

      <h1>Star Wars</h1>

      <form>
        <label htmlFor="name-filter">
          <input
            data-testid="name-filter"
            name="name-filter"
            type="text"
            placeholder="Search by name"
            onChange={ ({ target }) => setSearchName(target.value) }
            value={ searchName }
          />
        </label>
      </form>

      <form>
        <label htmlFor="colum-filter">
          <select
            data-testid="colum-filter"
            name="colum-filter"
            value={ filter.colum }
            onChange={ ({ target }) => setFilter((prevFilter) => ({
              ...prevFilter, colum: target.value,
            })) }
          >
            <option
              value="rotation_Period"
            >
              rotation_period
            </option>
            <option
              value="orbital_period "
            >
              orbital_period
            </option>
            <option
              value=" diameter "
            >
              diameter
            </option>
            <option
              value=" surface_water "
            >
              surface_water
            </option>
            <option
              value=" population "
            >
              population

            </option>
          </select>
        </label>

        <label htmlFor="comparison-filter">
          <select
            data-testid="comparison-filter"
            name="comparison-filter"
            value={ filter.comparison }
            onChange={ ({ target }) => setFilter((prevFilter) => ({
              ...prevFilter, comparison: target.value,
            })) }
          >
            <option>maior que</option>
            <option> menor que</option>
            <option>igual a</option>
          </select>

        </label>

        <label
          htmlFor="number-filter"
          data-testid=""
          name="name-filter"
          type="number"

        >
          <input
            name="number-filter"
            type="number"
            onChange={ ({ target }) => setFilter((prevFilter) => ({
              ...prevFilter, number: target.value,
            })) }
            value={ number.value }
          />
        </label>

        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => {
            setSelFilters((prevFilter) => ([
              ...prevFilter,
              filter,

            ]));
            setFilter({
              colum: '',
              comparison: 'maior que',
              number: 0,
            });
          } }
        >
          FILTRAR

        </button>
      </form>

      {selectedFilters.map((filters, index) => (
        <>
          <p key={ index }>
            {`Filtro: ${filters.colum} ${filters.comparison} ${filters.number}`}
          </p>
          <button
            type="button"
          >
            DEL
          </button>
        </>
      ))}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>

        <tbody>

          {data
            .filter((line) => (
              line.name.toLowerCase().includes(searchName.toLowerCase())
            ))

            .map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>
                  {planet.films.map((film, index) => <p key={ index }>{film}</p>)}
                </td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
