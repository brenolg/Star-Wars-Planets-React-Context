import { useEffect, useState, useContext } from 'react';
import './FilterNumber.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import StarWarsContext from '../context/StarWarsContext';
import Selected from './Selected';

export default function FiltersNumber() {
  const {
    data,
    filterData,
    setFilterData,
    selectedFilters,
    setSelectedFilters } = useContext(StarWarsContext);
  const [disabledButton, setDisableButton] = useState(true);
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
    if (filter.colum === undefined) {
      setFilter({
        number: 0,
        colum: columOptions[0],
        comparison: 'maior que',
      });
    }
  }, [selectedFilters, columOptions.length]);
  // Permite somente uma coluna comparison

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
  // Filtra por numero

  const hadleEnabled = () => {
    if (filter.colum === undefined) {
      setDisableButton(true);
    }
    if (filter.colum !== undefined) {
      setDisableButton(false);
    }
  };
  // Desabilita btn

  const handleClasBtn = ({ target }) => {
    if (target === disabled) {
      target.className = 'disableBtn';
    } else {
      target.className = 'enableBtn';
    }
  };
  // Troca classe do botao a ser desabilitado

  useEffect(() => {
    filterByNumber();
    hadleEnabled();
  }, [selectedFilters, filter.colum]);
  // Filtra numeros e desabilita btn

  const handleFilter = () => {
    setSelectedFilters((prevFilter) => ([
      ...prevFilter,
      filter,
    ]));
  };
  // Cria filtros selecionados

  const handleOperator = ({ target }) => {
    setFilter((prevFilter) => ({
      ...prevFilter, comparison: target.value,
    }));
  };
  // Gerencia o estado comparison

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
  // Gerenciamento do estado do input number

  const noFilter = 'Sem opções';
  return (

    <section id="numberSelectedSection">
      <form id="filterNumberForm">

        <div className="dropdown">
          <span className="label-select"> Coluna</span>
          <div
            className="dropdown-select  "
            name="colum-filter"
          >
            { filter.colum !== undefined
              ? filter.colum
              : noFilter }
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
              id="arowUp"
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
            <FontAwesomeIcon icon={ faChevronDown } id="arowDown" />
          </button>
        </div>

        <button
          className={ disabledButton ? 'btnFilter disable'
            : 'btnFilter enabled' }
          type="button"
          onChange={ handleClasBtn }
          onClick={ handleFilter }
          disabled={ disabledButton }
        >
          {disabledButton
            ? (
              <>
                <span className="visible">Sem Filtros</span>
                <span className="invisible">Filtrar</span>
              </>)
            : (
              <>
                <span className="invisible">Sem Filtros</span>
                <span className="visible">Filtrar</span>
              </>
            )}
        </button>
      </form>
      <Selected />
    </section>
  );
}
