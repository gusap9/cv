import { useState } from 'react';
import {
  ENG_DICTIONARY,
  GER_DICTIONARY,
  RUS_DICTIONARY,
} from '../../constants/dictionary';

export const Header = ({ setString }) => {
  const [activeLang, setActiveLang] = useState('russian');
  const changeLangOnRus = () => {
    setString(RUS_DICTIONARY);
    setActiveLang('russian');
  };

  const changeLangOnGer = () => {
    setString(GER_DICTIONARY);
    setActiveLang('german');
  };
  const changeLangOnEng = () => {
    setString(ENG_DICTIONARY);
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
