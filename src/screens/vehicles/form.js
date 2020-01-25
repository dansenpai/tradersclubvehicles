import React, {useEffect, useState} from 'react';
import {
  Input, 
  ActionsWrapper, 
  ActionsLeft, 
  Row, 
  Column,
  Snack,
} from './vehicles.styles';
import Button from '../../components/button/button';
import SelectInput from '../../components/select_input/select_input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../../components/list/list';
import {
  setNewVehicle, 
  clearNewVehicle, 
  getBrands, 
  createNewVehicle,
} from '../../services/actions/vehicles';

const Form = props => {
  useEffect(() => {
    async function init() {
      props.actions.clearNewVehicle();
      await props.actions.getBrands();
    }

    init();
  }, []);

  const [message, setMessage] = useState(null);
  const {searching, filteredVehicles, actions, brands, newVehicle} = props;

  const renderField = (field, handleValue) => {
    if(field.type === 'select') {
      return (
        <SelectInput
          placeholder={field.placeholder}
          name={field.name}
          onChange={handleValue}
          options={field.options}
          value={newVehicle[field.name]}
        />
      )
    }
  
    return(
      <Input
        name={field.name}
        onChange={handleValue}
        placeholder={field.placeholder}
        type={field.type}
        value={newVehicle[field.name]}
      />
    )
  }

  const handleValue = (e) => {
    actions.setNewVehicle(e.target.name, e.target.value);
  }

  const handleSubmit = async () => {
    // TODO validate field types;
    await actions.createNewVehicle(newVehicle);

    // TODO validate errors;
    setMessage('Veículo cadastrado com sucesso!');

    setTimeout(() => {
      setMessage(null);
    }, 3000)
  }

  const formFields = [
    {name: 'title', size: 100, placeholder: 'Nome'},
    {name: 'model', size: 45, placeholder: 'Modelo'},
    {name: 'year', size: 45, placeholder: 'Ano', type: 'number'},
    {
      name: 'brand',
      size: 100,
      placeholder: 'Montadora',
      type: 'select',
      options: brands
    },
    {name: 'color', size: 45, placeholder: 'Cor'},
    {name: 'km', size: 45, placeholder: 'Kilometragem', type: 'number'},
    {name: 'price', size: 45, placeholder: 'Preço', type: 'number'},
  ];

  return(
      filteredVehicles.length < 1 && !searching ? (
        <>
          {message && <Snack>{message}</Snack>}
          <Row>
            {formFields.map((field, index) => (
              <Column key={index} size={field.size}>
                {renderField(field, handleValue)}
              </Column>
            ))}
          </Row>

          <ActionsWrapper>
            <ActionsLeft>
              <Button type="TRANSPARENT">Remover</Button>
              <Button type="TRANSPARENT">Cancelar</Button>
            </ActionsLeft>
            <Button onClick={handleSubmit}>Salvar</Button>
          </ActionsWrapper>
        </>
        ) : (
          <List
            searching={searching}
            options={filteredVehicles}
          />
      )
  )
}

const actionCreators = {
  setNewVehicle,
  clearNewVehicle,
  getBrands,
  createNewVehicle,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

function mapStateToProps(state) {
  const { VehicleReducer } = state;
  
  return {
    searching: VehicleReducer.searching,
    filteredVehicles: VehicleReducer.filteredVehicles,
    newVehicle: VehicleReducer.newVehicle,
    brands: VehicleReducer.brands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Form));

