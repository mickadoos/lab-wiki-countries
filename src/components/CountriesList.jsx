import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CountryDetails from './CountryDetails';

const CountriesList = ({ countries }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="text-center">Countries List</h2>

          <ul className="list-group">
            {countries.map((country, k) => {
              return (
                <li className="list-group-item text-center" key={k}>
                  <NavLink
                    to={`/${country.alpha3Code}`}
                    className={({ isActive }) => (isActive ? 'selected' : '')}
                  >
                    <p>{country.name.common}</p>
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                      alt={`${country.name.common}`}
                    />
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <ul></ul>
        </div>
        <div className="col">
          <CountryDetails />
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
