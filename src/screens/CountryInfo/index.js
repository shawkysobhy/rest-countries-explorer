
import React, { useEffect, useState, useContext } from 'react';
import classes from './CountryInfo.module.css';
import { useParams ,useNavigate } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import { LoadingSpinner, Borders ,CountryProp } from '../../components';
import { useFetch } from '../../hooks/useFetch';
export const CountryInfo = () => {
  const navigate = useNavigate();
  const { countryName } = useParams();
  const ctx = useContext(ThemeContext);
  const { isLoading, fetchCountries } = useFetch();
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
                    <CountryProp
                      label='Native Name : '
                      info={country.nativeName}
                    />
                    <CountryProp
                      label='population:'
                      info={country.population.toLocaleString()}
                    />
                    <CountryProp label='region:' info={country.region} />
                    <CountryProp
                      label='sub regiong:'
                      info={country.subregion}
                    />
                    <CountryProp label='Capital:' info={country.capital} />
                  </ul>
                  <ul>
                    <CountryProp
                      label='Area:'
                      info={`${country.area.toLocaleString()} Km`}
                    />
                    <CountryProp
                      label='top Level Domain:'
                      info={country.topLevelDomain}
                    />
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
