import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

import './styles.css';

function Login() {
  const [inputType, setInputType] = useState('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleInputType() {
    setInputType(inputType === 'password' ? 'text' : 'password');
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="box">
      <div className="box-content">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Digite o e-mail utilizado no cadastro..."
          value={email}
          onChange={handleEmail}
        />
        <div className="input-password">
          <input
            type={inputType}
            value={password}
            onChange={handlePassword}
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
          {inputType === 'password' ? (
            <FaEyeSlash size={20} onClick={handleInputType} />
          ) : (
            <FaEye size={20} onClick={handleInputType} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
