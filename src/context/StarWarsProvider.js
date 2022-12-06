import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import requestApi from '../services/requestAPI';
import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    async function fetch() {
      setData(await requestApi());
    }
    fetch();
  }, []);

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  const dataFunc = (newData) => {
    setFilterData(newData);
  };

  const value = useMemo(() => ({
    data,
    filterData,
    setFilterData,
    dataFunc,
  }), [data, filterData, setFilterData]);

  return (
    <StarWarsContext.Provider value={ value }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
