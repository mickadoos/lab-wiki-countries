import { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';
// import countriesData from './countries.json';
import NavBar from './components/Navbar.jsx';
import CountriesList from './components/CountriesList.jsx';
import CountryDetails from './components/CountryDetails.jsx';
import axios from 'axios';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';
const flagURL = 'https://flagpedia.net/data/flags/icon/72x54'

function App() {
  const [countries, setCountries] = useState([]);

  async function fetchCountries() {
    try {
      const response = await axios.get(apiURL);
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries data:', error);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col">
           <CountriesList countries={countries} flagURLProp={flagURL}/>
          </div>
          <div className="col">
            <Routes>
              <Route
                path={"/:countryId"}
                element={<CountryDetails apiURLProp={apiURL} flagURLProp={flagURL}/>}
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
