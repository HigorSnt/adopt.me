import React, { useContext } from 'react';

import * as Actions from '../../constants';
import AdoptableAnimalsContext from '../../contexts/AdoptableAnimalsContext';
import CustomRange from './CustomRange';

function AgeRange() {
  const { state, dispatch } = useContext(AdoptableAnimalsContext);
  const { ageValue } = state;

  function handleInputRange(values) {
    dispatch({ type: Actions.CHANGE_AGE, payload: values });
  }

  return <CustomRange value={ageValue} onChange={handleInputRange} />
}

export default AgeRange;
