
import React, { useEffect, useState, useContext } from 'react';
import classes from './CountryInfo.module.css';
import { useParams ,useNavigate } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import { LoadingSpinner, Borders } from '../../components';
import { useFetch } from '../../hooks/useFetch';
export const CountryInfo = () => {
  const navigate = useNavigate();
  const { countryName } = useParams();
  const ctx = useContext(ThemeContext);
  const { isLoading, error, fetchCountries } = useFetch();
  const { darkMode } = ctx;
  const currentTheme = darkMode ? classes.darkMode : classes.lightMode;
  const [countryBorders, setCountryBorders] = useState([]);
  const [country, setCountry] = useState([]);
  const getCountryInfo = (data) => {
    setCountry((prev) => data[0]);
    if (data[0]?.borders) {
      setCountryBorders(prev=>data[0].borders);
    }
  };
  useEffect(() => {
    fetchCountries(
      {
        url: `https://restcountries.com/v2/name/${countryName}`,
      },
      getCountryInfo
    );
    window.scroll(0, 0);
    setCountryBorders([]);
  }, [countryName]);
  const loadMainPage = () => {
    navigate(-1);
  };
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={`${classes.container} ${currentTheme}`}>
          <button
            className={`${classes.backbutton}  ${
              darkMode ? classes.darkButton : classes.whiteButton
            }`}
            onClick={(e) => {
              loadMainPage(e.target.value);
            }}>
            <span>&#8592; </span>Back
          </button>
          <article>
            <img
              src={country.flags.svg}
              alt={`${countryName} flag`}
              className={classes.countryInfoFlag}
            />
            <div className={classes.countryInfo}>
              <div className={classes.containerList}>
                <h1 className={classes.official}>{country.name}</h1>
                <div className={classes.lists}>
                  <ul>
                    <li key={country.nativeName}>
                      <span>Native Name : </span>
                      {country.nativeName}
                    </li>
                    <li key={country.population}>
                      <span>population : </span>
                      {country.population.toLocaleString()}
                    </li>
                    <li key={country.region}>
                      {' '}
                      <span>region : </span>
                      {country.region}
                    </li>
                    <li key={country.subregion}>
                      {' '}
                      <span>sub regiong : </span>
                      {country.subregion}
                    </li>
                    <li key={country.capital}>
                      <span>Capital : </span>
                      {country.capital}
                    </li>
                  </ul>
                  <ul>
                    <li key={country.area}>
                      <span> Area : </span>
                      {country.area.toLocaleString()} Km <sup>2</sup>
                    </li>
                    <li key={country.topLevelDomain}>
                      {' '}
                      <span>top Level Domain : </span>
                      {country.topLevelDomain}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Borders
              countryBorders={countryBorders}
              darkMode={darkMode}
              name={country.name}
            />
          </article>
        </div>
      )}
    </>
  );
};
