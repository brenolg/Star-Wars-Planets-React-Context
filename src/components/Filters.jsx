import { useEffect, useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { filterData, setFilterData } = useContext(StarWarsContext);

  const [columOptions, setColumOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'surface_water',
    'rotation_period',
  ]);

  const [searchName, setSearchName] = useState('');
  const [filter, setFilter] = useState({
    number: 0,
    colum: 'population',
    comparison: 'maior que',
  });
  const [selectedFilters, setSelectedFilters] = useState([]);

  // const handleFilterName = ({ target: { value } }) => {
  //   setSearchName(value);

  //   let finalData = filterData;
  //   finalData = finalData.filter((line) => (
  //     line.name.toLowerCase().includes(searchName.toLowerCase())
  //   ));
  //   setFilterData(finalData);
  // };

  // filtro name so é chamado ao inserir caracteres no input

  // comparison some pos clicar ... corrigir initial state pos clicar
  useEffect(() => {
    let finalDataName = filterData;
    finalDataName = filterData.filter((line) => (
      line.name.toLowerCase().includes(searchName.toLowerCase())

    ));
    setFilterData(finalDataName);
  }, [searchName]);

  // filtra nome

  useEffect(() => {
    if (selectedFilters.length) {
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
  }, [selectedFilters]);

  // permite somente uma coluna comparison

  useEffect(() => {
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
  }, [filter]);

  // filtra numeros

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
            setSelectedFilters((prevFilter) => ([
              ...prevFilter,
              filter,

            ]));
            setFilter({
              number: 0,
              colum: 'population',
              comparison: 'maior que',
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

      <button
        type="button"
        onClick={ () => { setSelectedFilters([]); } }
      >
        Excluir Filtros

      </button>

    </>
  );
}
