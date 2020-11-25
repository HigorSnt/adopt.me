import React, { useReducer } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import AdoptableAnimals from './pages/AdoptableAnimals';
import Login from './pages/Login';
import PetDetails from './pages/PetDetails';
import Register from './pages/Register';
import AuthContext from './contexts/AuthContext';
import { authReducer } from './reducers/AuthReducer';

const initialState = {
  email: '',
  password: '',
  ong: null,
  token: null,
};

function Routes() {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Route path="/" exact component={AdoptableAnimals} />
        <Route
          path="/pet"
          render={(props) => (props.location.state ? <PetDetails /> : <Redirect to="/" />)}
        />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default Routes;
