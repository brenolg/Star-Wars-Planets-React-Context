import { useEffect, useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { data } = useContext(StarWarsContext);
  const [filterData, setFilterData] = useState([]);

  const [searchName, setSearchName] = useState('');
  const [filter, setFilter] = useState({
    number: 0,
    colum: 'population',
    comparison: 'maior que',
  });
  const [selectedFilters, setSelFilters] = useState([]);

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  useEffect(() => {
    let finalData = filterData;
    finalData = finalData.filter((line) => (
      line.name.toLowerCase().includes(searchName.toLowerCase())
    ));

    finalData = finalData.filter((line) => {
      const bools = [];
      selectedFilters.forEach((filterS) => {
        if (filterS.comparison === 'igual a') {
          return (bools.push(Number(line[filterS.colum]) === Number(filterS.number)));
        }
        if (filterS.comparison === 'maior que') {
          return (bools.push(Number(line[filterS.colum]) > Number(filterS.number)));
        }
        if (filterS.comparison === 'menor que') {
          return (bools.push(Number(line[filterS.colum]) < Number(filterS.number)));
        }
      });
      console.log(bools);

      return bools.every((el) => el);
    });
    setFilterData(finalData);
  }, [filter, searchName]);

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
            data-testid="column-filter"
            name="colum-filter"
            value={ filter.colum }
            onChange={ ({ target }) => setFilter((prevFilter) => ({
              ...prevFilter, colum: target.value,
            })) }
          >
            <option>
              rotation_period
            </option>
            <option>
              orbital_period
            </option>
            <option>
              diameter
            </option>
            <option>
              surface_water
            </option>
            <option>
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
            <option>menor que</option>
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
            data-testid="value-filter"
            type="number"
            value={ filter.number }
            onChange={ ({ target }) => setFilter((prevFilter) => ({
              ...prevFilter, number: target.value,
            })) }

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
            // não reseta number no imput e so no state
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

          {filterData

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
                <td>{planet.films}</td>
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
