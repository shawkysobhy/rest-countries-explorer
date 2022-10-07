import classes from './App.module.css';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import NotFound from './Components/NotFound/NotFound';
import CountryInfo from './Components/CountryInfo/CountryInfo';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Countries from './Components/Countries/Countries';
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
            path="/rest-countries-explorer"
            element={<Countries />}
          ></Route>
          <Route
            path="/rest-countries-explorer/country/:countryName"
            element={<CountryInfo />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
