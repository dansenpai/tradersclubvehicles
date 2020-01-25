import React, {useEffect, useState, useCallback} from 'react';
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
import {useParams, Link} from 'react-router-dom';
import List from '../../components/list/list';
import {
  getBrands, 
  createNewVehicle,
  getVehicles,
  removeVehicle
} from '../../services/actions/vehicles';

const emptyVehicle = {
  title: '',
  model: '',
  brand: '',
  year: '',
  color: '',
  km: '',
  price: '',
}

const Form = props => {
  const {id} = useParams();
  const action = id ? 'EDIT' : 'CREATE';
  const [message, setMessage] = useState(null);
  const [editingVehicle, setEditingVehicle] = useState(emptyVehicle);
  const {searching, filteredVehicles, actions, brands} = props;

  useEffect(() => {
    async function init() {
      await props.actions.getBrands();
      const vehicles = await props.actions.getVehicles();
      if(vehicles && action === 'EDIT'){
        const vehicle  = vehicles.filter(car => {
          return car.id == id;
        })

        setEditingVehicle(vehicle[0]);
      }
    }

    init()
  }, [id]);

  const renderField = (field, handleValue) => {
    if(field.type === 'select') {
      return (
        <SelectInput
          placeholder={field.placeholder}
          name={field.name}
          onChange={handleValue}
          selected={editingVehicle[field.name]}
          options={field.options}
          value={editingVehicle[field.name]}
        />
      )
    }

    return(
      <Input
        name={field.name}
        onChange={handleValue}
        placeholder={field.placeholder}
        type={field.type}
        value={editingVehicle[field.name]}
      />
    )
  }

  const handleValue = (e) => {
    const newValue = {[e.target.name]: e.target.value};

    setEditingVehicle(prevState => {
      return {
        ...prevState,
        ...newValue,
      }
    });
  }

  const handleSubmit = async () => {
    // TODO validate field types;
    await actions.createNewVehicle(editingVehicle, action);
    action === 'CREATE' && setEditingVehicle(emptyVehicle);

    // TODO validate errors;
    setMessage(`Veículo ${action === 'EDIT' ? 'editado' : 'cadastrado'} com sucesso!`);
    clearMessage();
  }

  const removeVehicle = async () => {
    // TODO change for awesome alerts or other;
    const remove = window.confirm('Deseja remover este cadastro?');

    if(remove) {
      await actions.removeVehicle(id);
      setEditingVehicle(emptyVehicle);
      setMessage(`Veículo deletado com sucesso!`);
      clearMessage();
    }
  }

  const clearMessage = () => {
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
              {action === 'EDIT' && (
                <Button type="TRANSPARENT" onClick={removeVehicle}>Remover</Button>
              )}
              <Link to="/">
                <Button type="TRANSPARENT">Cancelar</Button>
              </Link>
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
  getBrands,
  createNewVehicle,
  getVehicles,
  removeVehicle
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

function mapStateToProps(state) {
  const { VehicleReducer } = state;
  
  return {
    searching: VehicleReducer.searching,
    filteredVehicles: VehicleReducer.filteredVehicles,
    brands: VehicleReducer.brands,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Form));

