/** @format */

import classes from './countryProp.module.css';
import React from 'react';

export const CountryProp = ({ key, label, info }) => {
  return (
    <li key={info}>
      <span>{label}</span>
      {info}
    </li>
  );
};
