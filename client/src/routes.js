import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import AdoptableAnimals from './pages/AdoptableAnimals';
import PetDetails from './pages/PetDetails';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={AdoptableAnimals} />
      <Route
        path="/pet"
        render={(props) => (props.location.state.pet ? <PetDetails /> : <Redirect to="/" />)}
      />
    </BrowserRouter>
  );
}

export default Routes;
