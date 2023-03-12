import classes from './CountriesList.module.css';
import CountryCard from '../../Components';

import NotFound from '../NotFound/NotFound';
export const CountriesList = ({ countries }) => {
  return (
    <>
      {!countries.length ? (
        <NotFound></NotFound>
      ) : (
        <ul className={`${classes.countrieslist}`}>
          {countries.map((country) => {
            return (
              <CountryCard
                key={country.name}
                country={country}
              ></CountryCard>
            );
          })}
        </ul>
      )}
    </>
  );
};


