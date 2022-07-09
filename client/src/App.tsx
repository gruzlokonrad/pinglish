import React from 'react';
import './App.scss';

import { MdSettingsSuggest } from 'react-icons/md'
import logo from './img/logo.webp';



function App() {
  return (
    <div className="App ">
      <div className="logo center">
        <img src={logo} className="logo__icon" alt="logo" />
      </div>
      <div className="container center">
        <main className="">
          <div className="icon center">
            <MdSettingsSuggest />
          </div>
          <div className="content center">
            Tu powstaje strona Pinglish.pl
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
