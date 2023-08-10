const TOKEN = import.meta.env.VITE_TOKEN;
const BASE_URL = 'http://api.weatherapi.com/v1/search.json?lang=pt&key=';

export const searchCities = async (term) => {
  const response = await fetch(`${BASE_URL}${TOKEN}&q=${term}`);
  const data = await response.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
  }
  return data;
};

export const getWeatherByCity = (/* cityURL */) => {
  //   seu código aqui
};
