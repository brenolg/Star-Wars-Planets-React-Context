import FilterName from './FilterName';
import FiltersNumber from './FiltersNumber';
import Sort from './Sort';
import './AllFilters.css';

export default function removeAllFillters() {
  return (
    <>
      <section id="nameSection">
        <FilterName />
      </section>
      <section id="numberSortSection">
        <FiltersNumber />
        <Sort />
      </section>

    </>
  );
}
