import { useState } from 'react';
import {
  ENG_STRINGS,
  GER_STRINGS,
  RUS_STRINGS,
} from '../../constants/languages';

export const Header = ({ setString }) => {
  const [activeLang, setActiveLang] = useState('russian');
  const changeLangOnRus = () => {
    setString(RUS_STRINGS);
    setActiveLang('russian');
  };

  const changeLangOnGer = () => {
    setString(GER_STRINGS);
    setActiveLang('german');
  };
  const changeLangOnEng = () => {
    setString(ENG_STRINGS);
    setActiveLang("english")
  };
  return (
    <header className="header">
      <div className="header__title">CV Front-End Developer</div>
      <div className="header__languages">
        <div
          className={
            activeLang === 'english' ? 'languages-active' : 'languages-item'
          }
          onClick={changeLangOnEng}
        >
          eng
        </div>
        &nbsp;|&nbsp;
        <div
          className={
            activeLang === 'russian' ? 'languages-active' : 'languages-item'
          }
          onClick={changeLangOnRus}
        >
          rus
        </div>
        &nbsp;|&nbsp;
        <div
          className={
            activeLang === 'german' ? 'languages-active' : 'languages-item'
          }
          onClick={changeLangOnGer}
        >
          ger
        </div>
      </div>
    </header>
  );
};
