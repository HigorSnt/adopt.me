import React, { useContext } from 'react';
import { Range, getTrackBackground } from 'react-range';

import * as Actions from '../../constants';
import AdoptableAnimalsContext from '../../contexts/AdoptableAnimalsContext';

function AgeRange() {
  const { state, dispatch } = useContext(AdoptableAnimalsContext);
  const { ageValue } = state;

  function handleInputRange(values) {
    dispatch({ type: Actions.CHANGE_AGE, payload: values });
  }

  function renderTrack({ props, children }) {
    return (
      <div
        {...props}
        style={{
          // eslint-disable-next-line react/prop-types
          ...props.style,
          width: '100%',
          height: '1rem',
          borderRadius: '1rem',
          background: getTrackBackground({
            values: ageValue,
            colors: ['var(--color-gainsboro)', 'var(--color-light-gray)'],
            min: 0,
            max: 50,
          }),
        }}
      >
        {children}
      </div>
    );
  }

  function renderThumb({ props }) {
    return (
      <div
        {...props}
        style={{
          // eslint-disable-next-line react/prop-types
          ...props.style,
          height: '2.5rem',
          width: '2.5rem',
          borderRadius: '1.25rem',
          backgroundColor: 'var(--color-purple)',
          outline: 'none',
        }}
      />
    );
  }

  return (
    <div id="age">
      <Range
        step={1}
        values={ageValue}
        onChange={handleInputRange}
        min={0}
        max={50}
        renderTrack={renderTrack}
        renderThumb={renderThumb}
      />
    </div>
  );
}

export default AgeRange;
