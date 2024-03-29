import { useState, useEffect } from 'react';
import classes from './countries.module.css';
import { useFetch } from '../../hooks/useFetch';
import {
  LoadingSpinner,
  Search,
  RegtionFilter,
  CountriesList,
} from '../../components';
export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('all');
  const [filterdCountries, setfilterdCountries] = useState([]);
  const [filterFire, setFilterFire] = useState(false);
  const { isLoading, fetchCountries } = useFetch();
  const countryDataHandler = (data) => {
    let countryCardData = data.map((country) => {
      return {
        name: country.name,
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
          setFilterFire={setFilterFire}/>
        <RegtionFilter regionHandler={setRegion}/>
      </div>
      {isLoading ? (
        <LoadingSpinner/>
      ) : (
        <>
          {filterFire ? (
            <CountriesList countries={filterdCountries}/>
          ) : (
            <CountriesList countries={countries}/>
          )}
        </>
      )}
    </>
  );
};
