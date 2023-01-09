import { useEffect, useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './FilterNumber.css';

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

  return (
    <section id="numberSelectedSection">

      <form id="filterNumberForm">
        <label
          htmlFor="colum-filter"
          className="selectsNumber"
        >
          Coluna
          <select
            data-testid="column-filter"
            name="colum-filter"
            value={ filter.colum }
            onChange={ ({ target }) => setFilter((prevFilter) => ({
              ...prevFilter, colum: target.value,
            })) }
          >
            {columOptions.map((option, index) => (
              <option key={ index }>{option}</option>
            ))}
          </select>
        </label>

        <label
          htmlFor="comparison-filter"
          className="selectsNumber"
        >
          Operator
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
          id="inputNumber "
          htmlFor="number-filter"
          name="name-filter"
          type="number"
        >
          <input
            id="inputNumber"
            data-testid="value-filter"
            type="number"
            value={ filter.number }
            onChange={ ({ target }) => setFilter((prevFilter) => ({
              ...prevFilter, number: target.value,
            })) }
          />
        </label>

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
          id="delAllFilters"
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
