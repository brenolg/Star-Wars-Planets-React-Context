import { useEffect, useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function FiltersNumber() {
  const { filterData, setFilterData } = useContext(StarWarsContext);

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
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filterDelete, setFilterDelete] = useState(1);

  useEffect(() => {
    if (selectedFilters.length > 1) {
      selectedFilters.forEach((selColum) => {
        const newOptions = columOptions.filter((option) => (
          option !== selColum.colum

        ));
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
  }, [selectedFilters, filter]);

  // permite somente uma coluna comparison

  const filterByNumber = () => {
    let finalDataNumber = filterData;

    finalDataNumber = filterData.filter((line) => {
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
  }, [filter, selectedFilters, filterDelete]);

  // filtra numeros

  const handleDelete = ({ target }) => {
    const newFilters = selectedFilters
      .filter((filterDel) => target.name !== filterDel.colum);
    filterByNumber();

    setSelectedFilters(newFilters);
    setFilterDelete((prevDel) => ({
      ...prevDel + filter.number,

    }));
  };

  return (
    <>

      <form>
        <label htmlFor="colum-filter">
          <select
            data-testid="column-filter"
            name="colum-filter"
            value={ columOptions[0] }
            onChange={ ({ target }) => setFilter((prevFilter) => ({
              ...prevFilter, colum: target.value,
            })) }
          >
            {columOptions.map((option, index) => (
              <option key={ index }>{option}</option>
            ))}
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
            setFilter({
              number: filter.number,
              colum: columOptions[0],
              comparison: filter.comparison,
            });
            setSelectedFilters((prevFilter) => ([
              ...prevFilter,
              filter,

            ]));
          } }
        >
          Filtrar

        </button>
      </form>

      {selectedFilters.map((filters, index) => (
        <>
          <p
            key={ index }
            name={ index }
          >
            {`Filtro: ${filters.colum} ${filters.comparison} ${filters.number}`}
          </p>
          <button
            data-testid='data-testid="filter"'
            type="button"
            name={ filters.colum }
            onClick={ handleDelete }

          >
            DEL
          </button>
        </>
      ))}

      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => { setSelectedFilters([]); filterByNumber(); } }
      >
        Excluir Filtros

      </button>

    </>
  );
}
