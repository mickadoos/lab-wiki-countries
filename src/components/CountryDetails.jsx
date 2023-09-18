import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const [foundCountry, setFoundCountry] = useState(null);

  const { countryId } = useParams();
  console.log('Country ID from Details: ', countryId);
  useEffect(() => {
    const country = countries.find((country) => {
      return countryId === country.alpha3Code;
    });

    if (country) {
      setFoundCountry(country);
    }
  }, [countryId]);

  return (
    <div>
      <h2>Country Details</h2>

      {foundCountry && (
        <div>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="" />
          <p>{foundCountry.name.common}</p>
          <p>{foundCountry.capital}</p>
          <p>{foundCountry.area}</p>
          {foundCountry.borders.map((border, k )=> {
            return (<p key={k}>{border}</p>)
          })}
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
