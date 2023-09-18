import { useState } from 'react';
import './App.css'
import countriesData from './countries.json'
import NavBar from './components/Navbar.jsx'
import CountriesList from './components/CountriesList.jsx'
import CountryDetails from './components/CountryDetails.jsx'

function App() {
  const [countries, setCountries] = useState(countriesData);

  return <>
<NavBar />
<CountriesList countries={countries}/>
<CountryDetails />
  </>;
}

export default App;
