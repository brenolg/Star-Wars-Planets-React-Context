import { useContext, useRef, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Selected() {
  const { selectedFilters, setSelectedFilters } = useContext(StarWarsContext);
  const selRef = useRef(0);

  const handleVisiblity = () => {
    if (selRef.current !== 0 && selRef.current !== null) {
      selRef.current.className = 'selectetFilterDiv visible';
    }
  };
  // Permite a visibilidade dos filtros selecionados

  useEffect(() => {
    handleVisiblity();
  }, [selRef.current]);

  const removeAllFillters = () => {
    setSelectedFilters([]);
    filterByNumber();
  };
  // Remove todos os filtros

  const handleDelete = ({ target }) => {
    const newFilters = selectedFilters
      .filter((filterDel) => target.name !== filterDel.colum);
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
        onClick={ removeAllFillters }
      >
        Excluir Filtros
      </button>

      {selectedFilters.map((filters, index) => (
        <div
          ref={ selRef }
          id={ `sel${index}` }
          className="selectetFilterDiv invisible"
          key={ filters.colum }
        >
          <span
            name={ index }
          >
            {`Filtro: ${filters.colum} ${filters.comparison} ${filters.number}`}
          </span>
          <button
            className="delFilterBtn"
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
  );
}
