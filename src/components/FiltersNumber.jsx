import { useEffect, useState, useContext } from 'react';
import './FilterNumber.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import StarWarsContext from '../context/StarWarsContext';

export default function FiltersNumber() {
  const { data, filterData, setFilterData } = useContext(StarWarsContext);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [columOptions, setColumOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'surface_water',
    'rotation_period',
  ]);

  const [filter, setFilter] = useState({
    number: 0,
    colum: columOptions[0],
    comparison: 'maior que',
  });

  useEffect(() => {
    if (selectedFilters.length) {
      selectedFilters.forEach((selColum) => {
        const newOptions = columOptions.filter((option) => (
          option !== selColum.colum
        ));
        setFilter({
          number: 0,
          colum: newOptions[0],
          comparison: 'maior que',
        });
        setColumOptions(newOptions);
      });
    } else {
      setColumOptions([
        'population',
        'orbital_period',
        'diameter',
        'surface_water',
        'rotation_period']);
    }
  }, [selectedFilters]);

  // permite somente uma coluna comparison

  const filterByNumber = () => {
    let finalDataNumber = filterData;
    finalDataNumber = data.filter((line) => {
      const bools = [];
      selectedFilters.forEach((filterS) => {
        if (filterS.comparison === 'maior que') {
          return (bools.push(Number(line[filterS.colum]) > Number(filterS.number)));
        }
        if (filterS.comparison === 'menor que') {
          return (bools.push(Number(line[filterS.colum]) < Number(filterS.number)));
        }
        if (filterS.comparison === 'igual a') {
          return (bools.push(Number(line[filterS.colum]) === Number(filterS.number)));
        }
      });
      return bools.every((el) => el);
    });

    setFilterData(finalDataNumber);
  };

  useEffect(() => {
    filterByNumber();
  }, [selectedFilters]);

  // filtra numeros

  const handleFilter = () => {
    setSelectedFilters((prevFilter) => ([
      ...prevFilter,
      filter,
    ]));
  };

  const handleOperator = ({ target }) => {
    setFilter((prevFilter) => ({
      ...prevFilter, comparison: target.value,
    }));
    console.log(selectedFilters.length);
  };

  const totalSum = (filter.number + 1);
  const totalSub = (filter.number - 1);
  const sumNumber = () => {
    setFilter((prevFilter) => ({
      ...prevFilter, number: totalSum,
    }));
  };
  const subNumber = () => {
    setFilter((prevFilter) => ({
      ...prevFilter, number: totalSub,
    }));
  };

  const handleDelete = ({ target }) => {
    const newFilters = selectedFilters
      .filter((filterDel) => target.name !== filterDel.colum);
    setSelectedFilters(newFilters);
    filterByNumber();
  };
  // remove o filtro selecionado

  const removeAllFillters = () => {
    setSelectedFilters([]);
    filterByNumber();
  };
  // remove todos os filtros

  const noFilter = 'Sem opções';

  return (
    <section id="numberSelectedSection">

      <form id="filterNumberForm">

        <div
          className="dropdown"
        >
          <span className="label-select"> Coluna</span>
          <div
            className="dropdown-select , dropdown-select-colum  "
            data-testid="column-filter"
            name="colum-filter"
          >
            { filter.colum === undefined
              ? noFilter
              : filter.colum}
          </div>

          <div
            className="dropdown-list"
          >
            {columOptions.map((option, index) => (
              <button
                className="dropddown-item"
                type="button"
                key={ index }
                value={ option }
                onClick={ ({ target }) => setFilter((prevFilter) => ({
                  ...prevFilter, colum: target.value,
                })) }
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div
          className="dropdown"
        >
          <span className="label-select"> Operator</span>
          <div
            id="dropdown-select-operator"
            className="dropdown-select   "
            data-testid="column-sort"
          >
            { filter.comparison }
          </div>
          <div
            className="dropdown-list"
            value={ filter.comparison }
          >
            <button
              className="dropddown-item"
              type="button"
              value="maior que"
              onClick={ handleOperator }
            >
              maior que
            </button>
            <button
              className="dropddown-item"
              type="button"
              value="menor que"
              onClick={ handleOperator }
            >
              menor que
            </button>
            <button
              className="dropddown-item"
              type="button"
              value="igual a"
              onClick={ handleOperator }
            >
              igual a
            </button>
          </div>
        </div>

        <div
          className="custom-num"
        >
          <button
            id="arrowBtnTop"
            className="arrowBtn"
            type="button"
            value={ filter.number }
            onClick={ sumNumber }
          >
            <FontAwesomeIcon
              icon={ faChevronUp }
              id="arowUp"
            />

          </button>

          <input
            id="inputNumber"
            data-testid="value-filter"
            type="number"
            value={ filter.number }
            onChange={ ({ target }) => setFilter((prevFilter) => ({
              ...prevFilter, number: target.value,
            })) }
          />
          <button
            id="arrowBtnBot"
            className="arrowBtn"
            type="button"
            value={ filter.number }
            onClick={ subNumber }
          >
            <FontAwesomeIcon icon={ faChevronDown } id="arowDown" />
          </button>
        </div>

        <button
          className="btnFilter"
          data-testid="button-filter"
          type="button"
          onClick={ handleFilter }
        >
          Filtrar
        </button>
      </form>

      <section id="selectedFiltersSection">

        <button
          className={ selectedFilters.length >= 1 ? 'delAllFilters visible'
            : 'delAllFilters invisible' }
          data-testid="button-remove-filters"
          type="button"
          onClick={ removeAllFillters }
        >
          Excluir Filtros
        </button>

        {selectedFilters.map((filters, index) => (
          <div
            className="selectetFilterDiv"
            data-testid="filter"
            key={ filters.colum }
          >
            <p
              name={ index }
            >
              {`Filtro: ${filters.colum} ${filters.comparison} ${filters.number}`}
            </p>
            <button
              className="delSelectedFilter"
              type="button"
              name={ filters.colum }
              onClick={ handleDelete }
            >
              Excluir
            </button>
            <div />
          </div>
        ))}

      </section>
    </section>
  );
}
