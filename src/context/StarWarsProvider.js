import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import requestApi from '../services/requestAPI';
import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      setData(await requestApi());
    }
    fetch();
  }, []);

  const value = useMemo(() => ({
    data,
  }), [data]);

  return (
    <StarWarsContext.Provider value={ value }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
