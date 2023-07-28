import './AllFilters.css';
import FilterName from './FilterName';
import FiltersNumber from './FiltersNumber';
import Sort from './Sort';

export default function AllFilters() {
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
