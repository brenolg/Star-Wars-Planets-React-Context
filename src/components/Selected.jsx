import propTypes from 'prop-types';
import { useContext, useEffect, useRef } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './Selected.css';

export default function Selected({ filterByNumber }) {
  const { selectedFilters, setSelectedFilters } = useContext(StarWarsContext);
  const selRef = useRef(0);

  const handleVisibility = () => {
    if (selRef.current !== 0 && selRef.current !== null) {
      selRef.current.className = 'selectedFilterDiv visible';
    }
  };
  // Permite a visibilidade dos filtros selecionados

  useEffect(() => {
    handleVisibility();
  }, [selRef.current]);

  const removeAllFilters = () => {
    setSelectedFilters([]);
    filterByNumber();
  };
  // Remove todos os filtros

  const handleDelete = ({ target }) => {
    const newFilters = selectedFilters
      .filter((filterDel) => target.name !== filterDel.column);
    setSelectedFilters(newFilters);
    filterByNumber();
  };
  // remove o filtro selecionado

  return (
    <section id="selectedFiltersSection">

      <button
        className={ selectedFilters.length >= 1 ? 'delAllFilters visible'
          : 'delAllFilters invisible' }
        type="button"
        onClick={ removeAllFilters }
      >
        Excluir Filtros
      </button>

      {selectedFilters.map((filters, index) => (
        <div
          ref={ selRef }
          id={ `sel${index}` }
          className="selectedFilterDiv invisible"
          key={ filters.column }
        >
          <span
            name={ index }
          >
            {`Filtro: ${filters.column} ${filters.comparison} ${filters.number}`}
          </span>
          <button
            className="delFilterBtn"
            type="button"
            name={ filters.column }
            onClick={ handleDelete }
          >
            Excluir
          </button>
          <div />
        </div>
      ))}

    </section>
  );
}

Selected.propTypes = {
  filterByNumber: propTypes.func.isRequired,
};
