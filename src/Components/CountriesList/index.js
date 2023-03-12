
import classes from './CountriesList.module.css';
import { CountryCard} from '../../components';
import { NotFound } from '../../screens';
export const CountriesList = ({ countries }) => {
  return (
    <>
      {!countries.length ? (
        <NotFound></NotFound>
      ) : (
        <ul className={`${classes.countrieslist}`}>
          {countries.map((country) => {
            return (
              <CountryCard key={country.name} country={country}></CountryCard>
            );
          })}
        </ul>
      )}
    </>
  );
};
