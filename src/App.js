import { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import countriesData from './countries.json';
import NavBar from './components/Navbar.jsx';
import CountriesList from './components/CountriesList.jsx';
import CountryDetails from './components/CountryDetails.jsx';

function App() {
  const [countries, setCountries] = useState(countriesData);


  // const { countryId } = useParams();
  // useEffect(() => {
  //   console.log("Country ID: ", countryId);

  // }, [countryId])
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col">
            <CountriesList countries={countries} />
          </div>
          <div className="col">
            <Routes>
              <Route path={`/:countryId`} element={<CountryDetails countries={countries}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
