import React from 'react';
import { NavLink } from 'react-router-dom';

const CountriesList = ({ countries, flagURLProp }) => {
  return (
    <>
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
                  src={flagURLProp + `/${country.alpha2Code.toLowerCase()}.png`}
                  alt={`${country.name.common}`}
                />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CountriesList;
