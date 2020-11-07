import React, { useReducer } from 'react';

import * as Actions from '../../constants';
import InputArea from '../../components/InputArea';
import RegisterContext from '../../contexts/RegisterContext';
import { registerReducer } from '../../reducers/RegisterReducer';

import logo from '../../assets/images/adopte.me.svg';
import pet from '../../assets/images/pet.jpg';

import './styles.css';

const initialState = {
  cnpj: '',
  name: '',
  email: '',
  address: '',
  whatsapp: '',
  phone: '',
  password: '',
  confirmPassword: '',
};

function Register() {
  const [state, dispatch] = useReducer(registerReducer, initialState);

  const inputs = [
    {
      type: 'text',
      name: 'cnpj',
      id: 'cnpj',
      placeholder: 'Digite o CNPJ da sua ONG',
      value: state.cnpj,
      onChange: (e) => dispatch({ type: Actions.CHANGE_CNPJ, payload: e.target.value }),
    },
    {
      type: 'text',
      name: 'email',
      id: 'email',
      placeholder: 'Digite o e-mail da ONG',
      value: state.email,
      onChange: (e) => dispatch({ type: Actions.CHANGE_EMAIL, payload: e.target.value }),
    },
    {
      type: 'text',
      name: 'nome',
      id: 'nome',
      placeholder: 'Digite o nome da ONG',
      value: state.name,
      onChange: (e) => dispatch({ type: Actions.CHANGE_NAME, payload: e.target.value }),
    },
    {
      type: 'text',
      name: 'address',
      id: 'address',
      placeholder: 'Digite o endereço da ONG, ex: Rua X, Nº Y, Cidade Z, PB',
      value: state.address,
      onChange: (e) => dispatch({ type: Actions.CHANGE_ADDRESS, payload: e.target.value }),
    },
    {
      type: 'text',
      name: 'whatsapp',
      id: 'whatsapp',
      placeholder: 'Digite o whatsapp para facilitar o contato',
      value: state.whatsapp,
      onChange: (e) => dispatch({ type: Actions.CHANGE_WHATSAPP, payload: e.target.value }),
    },
    {
      type: 'text',
      name: 'phone',
      id: 'phone',
      placeholder: 'Digite o telefone para facilitar o contato',
      value: state.phone,
      onChange: (e) => dispatch({ type: Actions.CHANGE_PHONE, payload: e.target.value }),
    },
  ];

  const passwordInputs = [
    {
      param: 'password',
      action: Actions.CHANGE_PASSWORD,
      name: 'password',
      id: 'password',
      placeholder: 'Digite sua senha',
    },
    {
      param: 'confirmPassword',
      action: Actions.CHANGE_CONFIRM_PASSWORD,
      name: 'confim-password',
      id: 'confirm-password',
      placeholder: 'Confirme sua senha',
    },
  ];

  return (
    <RegisterContext.Provider value={{ state, dispatch }}>
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
          <InputArea inputs={inputs} passwordInputs={passwordInputs} />
        </div>
      </div>
    </RegisterContext.Provider>
  );
}

export default Register;
