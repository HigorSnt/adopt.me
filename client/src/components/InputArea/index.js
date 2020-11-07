import React from 'react';

import PasswordInput from '../PasswordInput';

import './styles.css';

function InputArea({ inputs, passwordInputs, context, children }) {
  return (
    <>
      <div className="input-area">
        {inputs.map((elem, i) => (
          <input key={i.toString()} {...elem} />
        ))}
        {passwordInputs.map((elem, i) => (
          <PasswordInput key={i.toString()} context={context} {...elem} />
        ))}
        <button type="submit">Cadastrar</button>
        {children}
      </div>
    </>
  );
}

export default InputArea;
