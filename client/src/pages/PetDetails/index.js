import React from 'react';
import { useLocation } from 'react-router-dom';

function PetDetails() {
  const { pet } = useLocation();

  return <div>{pet.name}</div>;
}

export default PetDetails;
