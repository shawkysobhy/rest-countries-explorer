
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './borders.module.css';
import { useFetch } from '../../hooks/useFetch';
export const Borders = ({ countryBorders, name, darkMode }) => {
  const [borderOfficalName, setBorderOfficalName] = useState([]);
  const {fetchCountries } = useFetch();
  const findCountryBorders = (countryBorders) => {
    countryBorders.forEach((border) => {
      fetchCountries(
        {
          url: `https://restcountries.com/v2/alpha/${border}`,
        },
        (data) => {
          setBorderOfficalName((prev) => [...prev, data?.name]);
        }
      );
    });
  };
  useEffect(() => {
    findCountryBorders(countryBorders);
  }, [name]);
  return (
    <ul className={classes.borderMenu}>
      <h2>{name} Borders</h2>:
      {borderOfficalName.length ? (
        borderOfficalName.map((borderCountry, index) => {
          return (
            <div
              key={index}
              className={darkMode ? classes.darkButton : classes.whiteButton}>
              <Link
                onClick={window.scroll(0, 0)}
                className={classes.borderCountry}
                to={`/rest-countries-explorer/country/${borderCountry}`}>
                {borderCountry}
              </Link>
            </div>
          );
        })
      ) : (
        <div>With no borders</div>
      )}
    </ul>
  );
};
