import FilterName from './FilterName';
import FiltersNumber from './FiltersNumber';
import Sort from './Sort';
import './AllFilters.css';

export default function AllFillters() {
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
