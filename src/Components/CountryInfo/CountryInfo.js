import React, { useEffect, useState, useContext } from 'react';
import classes from './CountryInfo.module.css';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import ThemeContext from '../../context/ThemeContext';
import LoadingSpinner from '../isLoading/LoadingSpinner';
import useFetch from '../hooks/useFetch';
export const CountryInfo = (props) => {
  const ctx = useContext(ThemeContext);
  const { isLoading, error, fetchCountries } = useFetch();
  const { darkMode } = ctx;
  const currentTheme = darkMode ? classes.darkMode : classes.lightMode;
  const navigate = useNavigate();
  const { countryName } = useParams();
  const [countryBorders, setCountryBorders] = useState([]);
  const [country, setCountry] = useState([]);
  const getCountryInfo = (data) => {
    let re = data[0];
    setCountry((prev) => re);
    if (re?.borders) {
      findCountryBorders(data[0].borders);
    }
  };
  const findCountryBorders = (borders) => {
    borders.forEach((border) => {
      fetchCountries(
        {
          url: `https://restcountries.com/v2/alpha/${border}`,
        },
        (data) => {
          setCountryBorders((prev) => [...prev, data?.name]);
        }
      );
    });
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
  // const chnageCountrHandler = (e) => {
  //   setSingleCountry((prev) => e.target.value);
  // };
  console.log(isLoading);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={`${classes.container} ${currentTheme}`}>
          <button
            className={classes.backbutton}
            onClick={(e) => {
              loadMainPage(e.target.value);
            }}
          >
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
                    <li>
                      <span>Native Name : </span>
                      {country.nativeName}
                    </li>
                    <li>
                      <span>population : </span>
                      {country.population}
                    </li>
                    <li>
                      {' '}
                      <span>region : </span>
                      {country.region}
                    </li>
                    <li>
                      {' '}
                      <span>sub regiong : </span>
                      {country.subregion}
                    </li>
                    <li>
                      <span>Capital : </span>
                      {country.capital}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span> Area : </span>
                      {country.area} Km <sup>2</sup>
                    </li>
                    <li>
                      {' '}
                      <span>top Level Domain : </span>
                      {country.topLevelDomain}
                    </li>
                    {/* <li>
                      <span>currencies : </span>
                      {country.currencies[0].name}
                    </li> */}
                  </ul>
                </div>
                <ul className={classes.borderMenu}>
                  <h2>Country Borders</h2>:
                  {countryBorders.length ? (
                    countryBorders.map((borderCountry, index) => {
                      return (
                        <div>
                          <Link
                            onClick={window.scroll(0, 0)}
                            key={index}
                            className={classes.borderCountry}
                            to={`/country/${borderCountry}`}
                          >
                            {borderCountry}
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <div>With no borders</div>
                  )}
                </ul>
              </div>
            </div>
            <></>
          </article>
        </div>
      )}
    </>
  );
};

export default CountryInfo;
