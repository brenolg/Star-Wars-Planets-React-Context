import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import showTextButton from '../services/showSpanBtn';
import './FilterNumber.css';
import Selected from './Selected';

export default function FiltersNumber() {
  const {
    data,
    filterData,
    setFilterData,
    selectedFilters,
    setSelectedFilters } = useContext(StarWarsContext);
  const [disabledButton, setDisableButton] = useState(true);
  const [columnOptions, setColumOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'surface_water',
    'rotation_period',
  ]);
  const [filter, setFilter] = useState({
    number: 0,
    column: columnOptions[0],
    comparison: 'maior que',
  });

  useEffect(() => {
    if (selectedFilters.length) {
      selectedFilters.forEach((selColum) => {
        const newOptions = columnOptions.filter((option) => (
          option !== selColum.column
        ));
        setFilter({
          number: 0,
          column: newOptions[0],
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
    if (filter.column === undefined) {
      setFilter({
        number: 0,
        column: columnOptions[0],
        comparison: 'maior que',
      });
    }
  }, [selectedFilters, columnOptions.length]); // Permite somente uma coluna comparison

  const filterByNumber = () => {
    let finalDataNumber = filterData;
    finalDataNumber = data.filter((line) => {
      const bools = [];
      selectedFilters.forEach((filterS) => {
        if (filterS.comparison === 'maior que') {
          return (bools.push(Number(line[filterS.column]) > Number(filterS.number)));
        }
        if (filterS.comparison === 'menor que') {
          return (bools.push(Number(line[filterS.column]) < Number(filterS.number)));
        }
        if (filterS.comparison === 'igual a') {
          return (bools.push(Number(line[filterS.column]) === Number(filterS.number)));
        }
      });
      return bools.every((el) => el);
    });
    setFilterData(finalDataNumber);
  }; // Filtra por numero

  const handleEnabled = () => {
    if (filter.column === undefined) {
      setDisableButton(true);
    }
    if (filter.column !== undefined) {
      setDisableButton(false);
    }
  }; // Desabilita btn

  const handleClassBtn = ({ target }) => {
    if (target === disabled) {
      target.className = 'disableBtn';
    } else {
      target.className = 'enableBtn';
    }
  }; // Troca classe do botão a ser desabilitado

  useEffect(() => {
    filterByNumber();
    handleEnabled();
  }, [selectedFilters, filter.column]); // Filtra números e desabilita btn

  const handleFilter = () => {
    setSelectedFilters((prevFilter) => ([
      ...prevFilter,
      filter,
    ]));
  }; // Cria filtros selecionados

  const handleOperator = ({ target }) => {
    setFilter((prevFilter) => ({
      ...prevFilter, comparison: target.value,
    }));
  }; // Gerencia o estado comparison

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
  }; // Gerenciamento do estado do input number

  const noFilter = 'Sem opções';
  return (

    <section id="numberSelectedSection">
      <form id="filterNumberForm">

        <div className="dropdown">
          <span className="label-select"> Coluna</span>
          <div
            className="dropdown-select"
            name="column-filter"
          >
            { filter.column !== undefined
              ? filter.column
              : noFilter }
          </div>
          <div
            className="dropdown-list"
          >
            {columnOptions.map((option, index) => (
              <button
                className="dropdown-item"
                type="button"
                key={ index }
                value={ option }
                onClick={ ({ target }) => setFilter((prevFilter) => ({
                  ...prevFilter, column: target.value,
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
          >
            { filter.comparison }
          </div>
          <div
            className="dropdown-list"
            value={ filter.comparison }
          >
            <button
              className="dropdown-item"
              type="button"
              value="maior que"
              onClick={ handleOperator }
            >
              maior que
            </button>
            <button
              className="dropdown-item"
              type="button"
              value="menor que"
              onClick={ handleOperator }
            >
              menor que
            </button>
            <button
              className="dropdown-item"
              type="button"
              value="igual a"
              onClick={ handleOperator }
            >
              igual a
            </button>
          </div>
        </div>

        <div className="custom-num">
          <button
            id="arrowBtnTop"
            className="arrowBtn"
            type="button"
            value={ filter.number }
            onClick={ sumNumber }
          >
            <FontAwesomeIcon
              icon={ faChevronUp }
              id="arrowUp"
            />
          </button>
          <input
            id="inputNumber"
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
            <FontAwesomeIcon icon={ faChevronDown } id="arrowDown" />
          </button>
        </div>

        <button
          className={ disabledButton ? 'btnFilter disable'
            : 'btnFilter enabled' }
          type="button"
          onChange={ handleClassBtn }
          onClick={ handleFilter }
          disabled={ disabledButton }
        >
          {showTextButton(disabledButton)}
        </button>
      </form>
      <Selected filterByNumber={ filterByNumber } />
    </section>
  );
}
