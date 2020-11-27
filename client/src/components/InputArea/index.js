import React from 'react';
import PropTypes from 'prop-types';

import PasswordInput from '../PasswordInput';

import './styles.css';

function InputArea({ inputs, passwordInputs, context, children, onClick, buttonLabel }) {
  return (
    <>
      <div className="input-area">
        {inputs.map((elem, i) => (
          <input key={i.toString()} {...elem} />
        ))}
        {passwordInputs.map((elem, i) => (
          <PasswordInput key={i.toString()} context={context} {...elem} />
        ))}
        <button type="submit" onClick={onClick}>{buttonLabel}</button>
        {children}
      </div>
    </>
  );
}

InputArea.propTypes = {
  inputs: PropTypes.array,
  passwordInputs: PropTypes.array,
  context: PropTypes.any,
  children: PropTypes.node,
  onClick: PropTypes.func,
  buttonLabel: PropTypes.string,
};

export default InputArea;
