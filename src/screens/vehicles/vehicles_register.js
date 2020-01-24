import React from 'react';
import Form from './form';
import {VehicleWrapper} from './vehicles.styles';

const VehiclesRegister = () => {

  return(
    <>
      <VehicleWrapper>
        <Form />
      </VehicleWrapper>
    </>
  )
}

export default React.memo(VehiclesRegister);
