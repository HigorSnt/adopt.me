import React from 'react';
import { useLocation } from 'react-router-dom';

function PetDetails() {
  const location = useLocation();
  const { pet } = location.state;

  return <div>{pet.name}</div>;
}

export default PetDetails;
