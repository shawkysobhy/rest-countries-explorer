
import { useContext } from 'react';
import classes from './App.module.css';
import ThemeContext from './context/ThemeContext';
import {  Header } from './components';
import { Countries, CountryInfo, NotFound } from './screens';
import { Route, Routes } from 'react-router-dom';
function App() {
  const { darkMode } = useContext(ThemeContext);
  document.body.style.backgroundColor = darkMode ? ' #202c37' : '#fafafa';
  let currentTheme = darkMode ? classes.darkMode : classes.lightMode;
  return (
    <>
      <Header></Header>
      <main className={currentTheme}>
        <Routes>
          <Route
            path='/rest-countries-explorer'
            element={<Countries />}></Route>
          <Route
            path='/rest-countries-explorer/country/:countryName'
            element={<CountryInfo />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
