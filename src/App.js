
import './App.css';
import Search from './components/Search/Search';

function App() {
  
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
    // const [lat, lon] = searchData.value.split(" ");

    // const currentWeatherFetch = fetch(
    //   `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    // );
    // const forecastFetch = fetch(
    //   `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    // );

    // Promise.all([currentWeatherFetch, forecastFetch])
    //   .then(async (response) => {
    //     const weatherResponse = await response[0].json();
    //     const forcastResponse = await response[1].json();

    //     setCurrentWeather({ city: searchData.label, ...weatherResponse });
    //     setForecast({ city: searchData.label, ...forcastResponse });
    //   })
    //   .catch(console.log);
  };


  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
