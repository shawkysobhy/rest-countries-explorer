// @flow
import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import classes from './CountryCard.module.css';
import { Link } from 'react-router-dom';
export const  CountryCard = ({ country }) => {
  const { darkMode } = useContext(ThemeContext);
  let currentTheme = darkMode ? classes.darkMode : classes.lightMode;
  return (
    <li>
      <Link
        className={classes.Link}
        to={`/rest-countries-explorer/country/${country.name.replace(
          /\s/g,
          '%20'
        )}`}
      >
        <div className={`${classes.countryCard} ${currentTheme}`}>
          <div className={classes.imagecontainer}>
            <img className={classes.flagImage} src={country.flag} alt="flag" />
          </div>

          <ul className={`${classes.countryCard_info}`}>
            <li>
              {' '}
              <h2 className={`${classes.countryCard_name}`}>{country.name}</h2>
            </li>
            <li className={classes.infoProperty}>
              <span>Population:</span>
              {country.population.toLocaleString()}
            </li>
            <li className={classes.infoProperty}>
              <span>Region:</span>
              {country.region}
            </li>
            <li className={classes.infoProperty}>
              <span>Capital:</span>
              {country.capital}
            </li>
          </ul>
        </div>
      </Link>
    </li>
  );
};

