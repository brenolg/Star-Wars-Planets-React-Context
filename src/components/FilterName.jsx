import { useEffect, useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function FilterName() {
  const { setFilterData, data } = useContext(StarWarsContext);

  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const finalDataName = data.filter((line) => (
      line.name.toLowerCase().includes(searchName.toLowerCase())

    ));
    setFilterData(finalDataName);
  }, [searchName]);

  // filtra nome

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

    </>
  );
}
