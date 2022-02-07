import React, { useState } from 'react';
import { Button } from '../../Button';
import './SignUp.scss'

import Axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = () => {
    Axios.post('http://localhost:3001/createAccount',
    { email: email, password: password, }).then(() => {
        // console.log("tu?");
        console.log("Success!");
      });
  }

  return (
    <div className="sign-up">
      <div className="sign-up__form">
        <h1 className="header">
          Rejestracja
        </h1>
        <div className="inputs">
          <div>
            <label htmlFor="email">E-mail:</label><br />
            <input
              type="email"
              name="email"
              placeholder="adres e-mail"
              onChange={(event) => { setEmail(event.target.value) }}
              autoComplete="off"
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="password">Hasło:</label><br />
            <input
              type="password"
              name="password"
              placeholder="hasło"
              onChange={(event) => { setPassword(event.target.value) }}
            />
          </div>
          <Button onClick={createAccount}>Zarejestruj się</Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
