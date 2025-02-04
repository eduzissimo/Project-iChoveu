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
export const getWeatherByCity = async (cityURL) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const data = await response.json();
  return {
    name: data.location.name,
    country: data.location.country,
    url: cityURL,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  };
};

export const getForecastByCity = async (cityURL) => {
  const weekDays = 7;
  const URL_API = `http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${cityURL}&days=${weekDays}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data.forecast.forecastday;
};
