import React from 'react';
import {VehicleWrapper} from './vehicles.styles';
import Form from './form';

const VehicleEdit = () => {

  return(
    <VehicleWrapper>
      Editar veículo
      <Form />
    </VehicleWrapper>
  )
}

export default React.memo(VehicleEdit);
