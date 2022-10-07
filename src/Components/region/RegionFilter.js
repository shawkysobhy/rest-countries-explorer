// // @flow
import classes from './RegionFilter.module.css';
import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

// const RegtionFilter = ({ setRegion, darkMode }) => {
//   const theme = darkMode ? classes.darkMode : classes.lightMode;
//   let regions = [
//     {
//       label: 'All',
//       value: 'all',
//     },
//     {
//       label: 'Africa',
//       value: 'africa',
//     },
//     {
//       label: 'Europe',
//       value: 'europe',
//     },
//     {
//       label: 'Americas',
//       value: 'Americas',
//     },
//     {
//       label: 'Asia',
//       value: 'asia',
//     },
//     {
//       label: 'Oceania',
//       value: 'oceania',
//     },
//   ];
//   return (
//     <select
//       onChange={(e) => {
//         setRegion((prev) => e.target.value);
//       }}
//       className={`${theme}`}
//     >
//       {regions.map((region) => {
//         return (
//           <option key={region.label} value={region.value}>
//             {region.label}
//           </option>
//         );
//       })}
//     </select>
//   );
// };
// export default RegtionFilter;
// @flow
const RegtionFilter = ({ regionHandler }) => {
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
export default RegtionFilter;
