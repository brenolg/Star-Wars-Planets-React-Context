import { useEffect, useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './FilterName.css';

export default function FilterName() {
  const { setFilterData, data } = useContext(StarWarsContext);

  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const finalDataName = data.filter((line) => (
      line.name.toLowerCase().includes(searchName.toLowerCase())

    ));
    setFilterData(finalDataName);
  }, [searchName, data, setFilterData]);

  // filtra nome

  return (
    <form id="nameForm">
      <label htmlFor="name-filter">
        <input
          id="nameFilter"
          data-testid="name-filter"
          name="name-filter"
          type="text"
          placeholder="Search planet"
          onChange={ ({ target }) => setSearchName(target.value) }
          value={ searchName }
        />

      </label>
    </form>
  );
}
