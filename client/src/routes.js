import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import AdoptableAnimals from './pages/AdoptableAnimals';
import Login from './pages/Login';
import PetDetails from './pages/PetDetails';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={AdoptableAnimals} />
      <Route
        path="/pet"
        render={(props) => (props.location.state.pet ? <PetDetails /> : <Redirect to="/" />)}
      />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default Routes;
