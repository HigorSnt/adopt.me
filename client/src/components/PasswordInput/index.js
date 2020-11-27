import React, { useContext, useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import PropTypes from 'prop-types';

import RegisterContext from '../../contexts/RegisterContext';

import './styles.css';

function PasswordInput({ param, action, context, ...props }) {
  const { state, dispatch } = useContext(context ?? RegisterContext);

  const [inputType, setInputType] = useState('password');

  function handleInputType() {
    setInputType(inputType === 'password' ? 'text' : 'password');
  }

  return (
    <div className="input-password">
      <input
        type={inputType}
        value={state[param]}
        onChange={(e) => dispatch({ type: action, payload: e.target.value })}
        {...props}
      />
      {inputType === 'password' ? (
        <FaEyeSlash size={20} onClick={handleInputType} />
      ) : (
        <FaEye size={20} onClick={handleInputType} />
      )}
    </div>
  );
}

PasswordInput.propTypes = {
  param: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  context: PropTypes.any,
};

export default PasswordInput;
