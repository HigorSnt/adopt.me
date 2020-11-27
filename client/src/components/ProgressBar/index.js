import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ bgcolor, completed }) {
  const containerStyles = {
    height: 20,
    width: '15rem',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  bgcolor: PropTypes.string,
  completed: PropTypes.number,
};

export default ProgressBar;
