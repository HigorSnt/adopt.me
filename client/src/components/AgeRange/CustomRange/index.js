import React from 'react';
import { Range, getTrackBackground } from 'react-range';

function CustomRange({ value, onChange, step, showLabel }) {
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
            values: value,
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
      >
        {showLabel && <div
          style={{
            position: 'absolute',
            top: '-28px',
            color: '#fff',
            fontWeight: 'bold',
            padding: '4px',
            borderRadius: '4px',
            backgroundColor: '#7B68EE	',
          }}
        >
          {value[0].toFixed(1)}
        </div>}
      </div>
    );
  }

  return (
    <div id="age">
      <Range
        step={step ?? 1}
        values={value}
        onChange={onChange}
        min={0}
        max={50}
        renderTrack={renderTrack}
        renderThumb={renderThumb}
      />
    </div>
  );
}

export default CustomRange;
