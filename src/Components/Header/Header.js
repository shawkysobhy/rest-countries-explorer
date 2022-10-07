import { useContext } from 'react';
import MoonIcon from '../icons/MoonIcon';
import SunIcon from '../icons/SunIcon';
import ThemeContext from '../../context/ThemeContext';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import App from '../../App';

const Header = () => {
  const ctx = useContext(ThemeContext);
  let darkMode = ctx.darkMode;

  return (
    <header
      className={darkMode ? classes.headerDarkMode : classes.headerLightMode}
    >
      <nav>
        <div className={classes.container}>
          <Link
            to="/rest-countries-explorer"
            element={<App />}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <h1 className={classes.logo}>Where in the world ?</h1>
          </Link>

          <div className={classes.modeHandler} onClick={ctx.themeHandler}>
            {!darkMode && <SunIcon mode={darkMode}></SunIcon>}
            {darkMode && <MoonIcon mode={darkMode}></MoonIcon>}
            {darkMode ? (
              <span className={classes.currentTheme}>Dark Mode</span>
            ) : (
              <span className={classes.currentTheme}>Light Mode</span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
