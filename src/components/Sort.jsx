import { useEffect, useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './Sort.css';
import atat from '../images/atat.png';
import walker from '../images/walker.png';
import ship from '../images/ship.png';

export default function Sort() {
  const { data, dataFunc } = useContext(StarWarsContext);

  const [operator, setOperator] = useState('>');
  const [columSort, setColumSort] = useState('population');
  const [filterSort, setFilterSort] = useState([]);

  useEffect(() => {
    dataFunc(filterSort);
  }, [filterSort]);

  const handleColum = ({ target }) => {
    setColumSort(target.value);
  };

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
    <>
      <form id="sortForm">

        <div
          className="dropdown"
        >
          <span className="label-select">Ordenar</span>
          <div
            className="dropdown-select  "
            data-testid="column-sort"
          >
            { columSort }

          </div>
          <div className="dropdown-list">
            <button
              className="dropddown-item"
              type="button"
              value="population"
              onClick={ handleColum }
            >
              population
            </button>
            <button
              className="dropddown-item"
              type="button"
              value="orbital_period"
              onClick={ handleColum }
            >
              orbital_period
            </button>
            <button
              className="dropddown-item"
              type="button"
              value="diameter"
              onClick={ handleColum }
            >
              diameter
            </button>
            <button
              className="dropddown-item"
              type="button"
              value="surface_water"
              onClick={ handleColum }
            >
              surface_water
            </button>
            <button
              className="dropddown-item"
              type="button"
              value="rotation_period"
              onClick={ handleColum }
            >
              rotation_period
            </button>
          </div>

        </div>

        <div className="operatorSort">
          <label className="labelSort" htmlFor="input-asc">
            <input
              className="radioSort"
              id="input-asc"
              data-testid="column-sort-input-asc"
              type="radio"
              name="operator"
              value=">"
              onChange={ ({ target }) => setOperator(target.value) }
            />
            Ascendente
          </label>

          <label className="labelSort" htmlFor="input-desc">
            <input
              className="radioSort"
              id="input-desc"
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
          id="sortBtn"
          data-testid="column-sort-button"
          type="button"
          onClick={ handleSort }
        >
          Ordenar
        </button>
      </form>

      <img
        id="atat"
        src={ atat }
        alt="atat"
      />

      <img
        id="walker"
        src={ walker }
        alt="walker"
      />

      <img
        id="ship"
        src={ ship }
        alt="ship"
      />
    </>

  );
}
