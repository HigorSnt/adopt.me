import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as Actions from '../../constants';
import InputArea from '../../components/InputArea';
import { login } from '../../services/api';
import AuthContext from '../../contexts/AuthContext';

import logo from '../../assets/images/adopte.me.svg';
import pet from '../../assets/images/pet.jpg';

import './styles.css';

function Login() {
  const { state, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const inputs = [
    {
      type: 'text',
      name: 'email',
      id: 'email',
      placeholder: 'Digite o e-mail utilizado no cadastro',
      value: state.email,
      onChange: (e) => dispatch({ type: Actions.CHANGE_EMAIL, payload: e.target.value }),
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
  ];

  async function handleLogin() {
    let response = await login({ email: state.email, password: state.password });
    dispatch({ type: Actions.CHANGE_PASSWORD, payload: '' });
    dispatch({ type: Actions.SET_LOGGED_USER, payload: response.data });
    history.push('/');
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
        <InputArea
          inputs={inputs}
          passwordInputs={passwordInputs}
          context={AuthContext}
          onClick={handleLogin}
          buttonLabel="Entrar"
        >
          <Link to="/register">
            <p id="register-link">Não tenho cadastro ainda!</p>
          </Link>
        </InputArea>
      </div>
    </div>
  );
}

export default Login;
