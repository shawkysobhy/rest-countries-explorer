import React from 'react';
import { useContext} from 'react';
import SearchIcon from '../icons/SearchIcon';
import classes from './Search.module.css';
import ThemeContext from '../../context/ThemeContext';
export const Search = ({ setfilterdCountries, countries, setFilterFire }) => {
  const { darkMode } = useContext(ThemeContext);
  const theme = darkMode ? classes.darkMode : classes.lightMode;

  const SearchHandler = (query) => {
    if (query) {
      const filterdCountries = countries.filter((country) => {
        return [country.common, country.capital]
          .join('')
          .toLowerCase()
          .includes(query.toLowerCase());
      });
      setfilterdCountries(filterdCountries);
      setFilterFire(true);
    }
    if (query === '') setFilterFire(false);
  };
  return (
    <form className={`${classes.form}`} onSubmit={(e) => e.preventDefault()}>
      <label className={`${classes.hidden}`}>Search counrty</label>
      <div className={classes.search}>
        <SearchIcon
          className={classes.searchIcon}
          defautlmode={darkMode}
        ></SearchIcon>
        <input
          type="text"
          className={`${classes.searchBar} ${theme}`}
          placeholder="country by Name,Capital"
          onChange={(e) => {
            SearchHandler(e.target.value);
          }}
        ></input>
      </div>
      <label className={classes.hidden} htmlFor="filterList">
        filter List by region{' '}
      </label>
    </form>
  );
};
export default Search;
