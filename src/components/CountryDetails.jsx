import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = ({ apiURLProp, flagURLProp }) => {
  const [foundCountry, setFoundCountry] = useState(null);

  const { countryId } = useParams();

  async function getCountry() {
    try {
      const response = await axios.get(apiURLProp + `/${countryId}`);
      setFoundCountry(response.data);
    } catch (error) {
      console.log('Error fetching country data:', error);
    }
  }
  useEffect(() => {
    getCountry();
  }, [countryId]);

  return (
    <div>
      <h2>Country Details</h2>

      {foundCountry && (
        <div>
          <img
            src={flagURLProp + `/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt=""
          />
          <p>{foundCountry.name.common}</p>
          <p>{foundCountry.capital}</p>
          <p>{foundCountry.area}</p>
          {foundCountry.borders.map((border, k) => {
            return <p key={k}>{border}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
