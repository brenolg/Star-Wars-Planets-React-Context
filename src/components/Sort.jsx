import { useEffect, useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './Sort.css';

export default function Sort() {
  const { data, dataFunc } = useContext(StarWarsContext);

  const [operator, setOperator] = useState('>');
  const [columSort, setColumSort] = useState('population');
  const [filterSort, setFilterSort] = useState([]);

  useEffect(() => {
    dataFunc(filterSort);
  }, [filterSort]);

  const handleSort = () => {
    const unknowns = data.filter((planet) => planet[columSort] === 'unknown');
    const knows = data.filter((planet) => planet[columSort] !== 'unknown');

    knows.sort((a, b) => {
      if (operator === '>') {
        return Number(a[columSort]) - Number(b[columSort]);
      }
      return Number(b[columSort]) - Number(a[columSort]);
    });
    const newSort = [...knows, ...unknowns];
    setFilterSort(newSort);
  };

  return (

    <form id="sortForm">

      <label
        htmlFor="column-sort"
        className="selectsSort"
      >
        Ordenar
        <select
          name="column-sort"
          data-testid="column-sort"
          value={ columSort }
          onChange={ ({ target }) => setColumSort(target.value) }

        >

          <option>population  </option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>surface_water</option>
          <option>rotation_period</option>
        </select>
      </label>

      <div className="selectsSort">
        <label htmlFor="input-asc">
          <input
            data-testid="column-sort-input-asc"
            type="radio"
            name="operator"
            value=">"
            onChange={ ({ target }) => setOperator(target.value) }
          />
          Ascendente
        </label>
        <label htmlFor="input-desc">
          <input
            data-testid="column-sort-input-desc"
            type="radio"
            name="operator"
            value="<"
            onChange={ ({ target }) => setOperator(target.value) }
          />
          Descendente
        </label>
      </div>

      <button
        className="btnFilter"
        data-testid="column-sort-button"
        type="button"
        onClick={ handleSort }
      >
        Ordenar

      </button>

    </form>

  );
}
