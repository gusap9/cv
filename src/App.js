import './css/normalize.css';
import './css/App.css';
import './css/fonts.css';

import React, { useState } from 'react';
import { RUS_STRINGS } from './constants/languages';
import { Header } from './components/Header';
import { FirstColumn } from './components/FirstColumn';
import { SecondColumn } from './components/SecondColumn';

function App() {
  const [strings, setString] = useState(RUS_STRINGS);
  return (
    <div className="body">
      <Header setString={setString} />
      <main className="main">
        <FirstColumn strings={strings} />
        <SecondColumn strings={strings} />
      </main>
      <footer className="footer header">{strings.lastUpdate}</footer>
    </div>
  );
}

export default App;
