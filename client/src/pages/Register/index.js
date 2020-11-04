import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

import Input from '../../components/Input';

import logo from '../../assets/images/adopte.me.svg';
import pet from '../../assets/images/pet.jpg';

import './styles.css';

function Register() {
  const [inputType, setInputType] = useState('password');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleInputType() {
    setInputType(inputType === 'password' ? 'text' : 'password');
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
            name="cnpj"
            id="cnpj"
            placeholder="Digite o cnpj da sua ONG"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Digite o e-mail utilizado no cadastro..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Digite o nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="Digite o endereço da ONG, ex: Rua X, Nº Y, Cidade Z, UF XX"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            type="text"
            name="whatsapp"
            id="whatsapp"
            placeholder="Digite o whatsapp para facilitar o contato..."
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="Digite o telefone para facilitar o contato..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="input-password">
            <Input
              type={inputType}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <div className="input-password">
            <Input
              type={inputType}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirme sua senha"
            />
            {inputType === 'password' ? (
              <FaEyeSlash size={20} onClick={handleInputType} />
            ) : (
              <FaEye size={20} onClick={handleInputType} />
            )}
          </div>
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
