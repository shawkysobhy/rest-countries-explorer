import { useState, useEffect } from 'react';
import { CountriesList } from '../../Components';
import classes from './countries.module.css';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../isLoading/LoadingSpinner';
import Search from '../search/Search';
import RegtionFilter from '../region/RegionFilter';
export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('all');
  const [filterdCountries, setfilterdCountries] = useState([]);
  const [filterFire, setFilterFire] = useState(false);
  const { isLoading, error, fetchCountries } = useFetch();
  const countryDataHandler = (data) => {
    let countryCardData = data.map((country) => {
      return {
        name:country.name,
        capital: country.capital,
        population: country.population,
        flag: country.flags.svg,
        region: country.region,
      };
    });
    
    setCountries(countryCardData);
  };
  useEffect(() => {
    fetchCountries(
      {
        url: `https://restcountries.com/v2/${
          region === 'all' ? 'all' : `/region/${region}`
        }`,
      },
      countryDataHandler
    );
    setFilterFire(false);
  }, [region]);
  return (
    <>
      <div className={classes.form}>
        <Search
          setfilterdCountries={setfilterdCountries}
          countries={countries}
          setFilterFire={setFilterFire}
        ></Search>
        <RegtionFilter regionHandler={setRegion}></RegtionFilter>
      </div>
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          {filterFire ? (
            <CountriesList countries={filterdCountries}></CountriesList>
          ) : (
            <CountriesList countries={countries}></CountriesList>
          )}
        </>
      )}
    </>
  );
};

