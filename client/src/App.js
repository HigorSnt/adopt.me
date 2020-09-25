import React from 'react';
import Scrollbars from 'react-custom-scrollbars';

import './assets/styles/global.css';

import AdoptableAnimals from './pages/AdoptableAnimals';

function App() {
  function renderThumb({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: 'var(--color-purple)',
      borderRadius: 10,
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  }

  return (
    <Scrollbars renderThumbVertical={renderThumb}>
      <AdoptableAnimals />
    </Scrollbars>
  );
}

export default App;
