import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import atat from '../images/atat.png';
import t47 from '../images/t47.png';
import walker from '../images/walker.png';
import './Sort.css';

export default function Sort() {
  const { data, dataFunc } = useContext(StarWarsContext);

  const [operator, setOperator] = useState('>');
  const [columnSort, setColumSort] = useState('population');
  const [filterSort, setFilterSort] = useState([]);

  useEffect(() => {
    dataFunc(filterSort);
  }, [filterSort]);

  const handleColum = ({ target }) => {
    setColumSort(target.value);
  };

  const handleSort = () => {
    const unknowns = data.filter((planet) => planet[columnSort] === 'unknown');
    const knows = data.filter((planet) => planet[columnSort] !== 'unknown');

    knows.sort((a, b) => {
      if (operator === '>') {
        return Number(a[columnSort]) - Number(b[columnSort]);
      }
      return Number(b[columnSort]) - Number(a[columnSort]);
    });
    const newSort = [...knows, ...unknowns];
    setFilterSort(newSort);
  };

  return (
    <section id="sort-section">
      <form id="sortForm">

        <div
          className="dropdown"
        >
          <span className="label-select">Ordenar</span>
          <div
            className="dropdown-select  "
          >
            { columnSort }
            <FontAwesomeIcon
              icon={ faChevronDown }
              className="arrow-select"
            />

          </div>
          <div className="dropdown-list">
            <button
              className="dropdown-item"
              type="button"
              value="population"
              onClick={ handleColum }
            >
              population
            </button>
            <button
              className="dropdown-item"
              type="button"
              value="orbital_period"
              onClick={ handleColum }
            >
              orbital_period
            </button>
            <button
              className="dropdown-item"
              type="button"
              value="diameter"
              onClick={ handleColum }
            >
              diameter
            </button>
            <button
              className="dropdown-item"
              type="button"
              value="surface_water"
              onClick={ handleColum }
            >
              surface_water
            </button>
            <button
              className="dropdown-item"
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
          type="button"
          onClick={ handleSort }
        >
          Ordenar
        </button>
      </form>

      <section className="img-section">
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
          src={ t47 }
          alt="t-47"
        />
      </section>
    </section>

  );
}
