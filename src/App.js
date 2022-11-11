import './App.css';
import recipesCountries from './countries.json';
import { useState } from 'react';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';

function App() {
  const [countries, setCountries] = useState(recipesCountries);
  return (
    <div className="App">
      <NavBar />
      <CountriesList countries={ countries } setCountries={ setCountries } />
      <Routes>
        <Route path="/countries/:countryId" element={ <CountryDetails countries={ countries }  /> } />
      </Routes>
    </div>
  );
}

export default App;
