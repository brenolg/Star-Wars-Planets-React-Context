const requestApi = async () => {
  const endPoint = 'https://swapi.dev/api/planets';
  const response = await fetch(endPoint);
  const data = await response.json();

  delete data.residents;
  return data.results;
};

export default requestApi;
