import { useEffect, useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Sort() {
  const { filterData, dataFunc } = useContext(StarWarsContext);

  const [operator, setOperator] = useState('>');
  const [columSort, setColumSort] = useState('population');
  const [filterSort, setFilterSort] = useState([]);

  useEffect(() => {
    dataFunc(filterSort);
  }, [filterSort]);

  const handleSort = () => {
    const unknowns = filterData.filter((planet) => planet[columSort] === 'unknown');
    const knows = filterData.filter((planet) => planet[columSort] !== 'unknown');

    knows.sort((a, b) => {
      if (operator === '>') {
        return Number(a[columSort]) - Number(b[columSort]);
      }
      return Number(b[columSort]) - Number(a[columSort]);
    });
    const newSort = [...knows, ...unknowns];
    setFilterSort(newSort);
    console.log(newSort);
  };

  return (
    <form>

      <select
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

      <label htmlFor="input-asc">
        Ascendente
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="operator"
          value=">"
          onChange={ ({ target }) => setOperator(target.value) }
        />
      </label>
      <label htmlFor="input-desc">
        Descendente
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="operator"
          value="<"
          onChange={ ({ target }) => setOperator(target.value) }
        />
      </label>

      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ handleSort }
      >
        Ordenar

      </button>

    </form>
  );
}
