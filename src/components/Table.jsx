import { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { data } = useContext(StarWarsContext);
  const [searchName, setSearchName] = useState('');

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
