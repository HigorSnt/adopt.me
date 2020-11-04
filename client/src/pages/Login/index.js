import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import logo from '../../assets/images/adopte.me.svg';
import pet from '../../assets/images/pet.jpg';

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
      <div className="box-title">
        <p>Vamos juntos ajudar animais a encontrar lares!</p>
        <img
          src={pet}
          id="img-cat"
          alt="Referência: https://www.vectorstock.com/royalty-free-vector/pet-shop-pets-vector-17932236"
        />
      </div>
      <div className="box-input-area">
        <img src={logo} alt="logo" id="img-logo" />
        <div className="input-area">
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Digite o e-mail utilizado no cadastro..."
            value={email}
            onChange={handleEmail}
          />
          <div className="input-password">
            <Input
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
          <button type="submit">Login</button>
          <Link to="/register">
            <p id="register-link">Não tenho cadastro ainda!</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
