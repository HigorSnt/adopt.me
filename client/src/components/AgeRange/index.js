import React from 'react';
import { Range, getTrackBackground } from 'react-range';

function AgeRange({ age, onChange }) {
  function renderTrack({ props, children }) {
    return (
      <div
        {...props}
        style={{
          ...props.style,
          width: '100%',
          height: '1rem',
          borderRadius: '1rem',
          background: getTrackBackground({
            values: age,
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
        values={age}
        onChange={onChange}
        min={0}
        max={50}
        renderTrack={renderTrack}
        renderThumb={renderThumb}
      />
    </div>
  );
}

export default AgeRange;
