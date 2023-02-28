import { useEffect, /* useRef, */ /* useState */ } from 'react';
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';
import './ButonDarkMode.css';
import useLocalStorage from '../../utils/useLocalStorage';
import systemThemeMode from '../../utils/systemThemeMode';

const ButtonDarkMode = () => {

  // const [themeMode, setThemeMode] = useState('light');
  // console.log(systemThemeMode())
  const [themeMode, setThemeMode] = useLocalStorage('theme-mode', systemThemeMode());
  // const buttonRef = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const toggleTheme = () => {
    setThemeMode((mode) => {
      return mode === 'light' ? 'dark' : 'light';
    });
  };

  useEffect(() => {
    if (themeMode === 'dark') {
      document.body.classList.add('dark');
      // buttonRef.current.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      // buttonRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [themeMode]);

  useEffect(()=> {
    window.matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', (e) => {
            const colorScheme = e.matches ? 'dark' : 'light';
            setThemeMode(colorScheme);
          });
  }, [setThemeMode]);

  const buttonDarkMode = 'dark-mode-btn';
  const buttonDarkModeActive = 'dark-mode-btn dark-mode-btn--active';

  return (
    <button className={themeMode === 'dark' ? buttonDarkModeActive : buttonDarkMode} onClick={toggleTheme} /* ref={buttonRef} */ >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}

export default ButtonDarkMode;