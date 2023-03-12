import classes from './RegionFilter.module.css';
import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
export const RegtionFilter = ({ regionHandler }) => {
  const { darkMode } = useContext(ThemeContext);
  const theme = darkMode ? classes.darkMode : classes.lightMode;
  return (
    <>
      <label htmlFor="region" className={classes.hidden}>region</label>
      <select
        id="region;"
        onChange={(e) => {
          regionHandler(e.target.value);
        }}
        className={`${theme}`}
      >
        <option defaultValue value={'all'}>
          All
        </option>
        <option value={'africa'}>Africa</option>
        <option value={'americas'}>Americas</option>
        <option value={'asia'}>Asia</option>
        <option value={'oceania'}>Oceania</option>
        <option value={'europe'}>Europe</option>
      </select>
    </>
  );
};
