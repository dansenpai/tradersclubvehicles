import React, {useEffect} from 'react';
import {SearchBarWrapper, Input} from './search_bar.styles';
import {Link} from 'react-router-dom';
import Button from '../button/button';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {getVehicles} from '../../services/actions/vehicles';

const SearchBar = props => {
  useEffect(() => {
    async function init() {
      await props.actions.getVehicles();
    }
    
    console.log(props);
    init();
  }, []);

  const handleChange = async (e) => {
    console.log(e.target.value);
    const vehicles = await props.actions.getVehicles(e.target.value);
    console.log(vehicles);
  }

  return(
    <SearchBarWrapper>
      <Input onChange={handleChange} placeholder="Pesquise por um veículo" />
      <Link to="vehicle-register">
        <Button>Cadastrar</Button>
      </Link>
    </SearchBarWrapper>
  )
}

const actionCreators = {getVehicles};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

function mapStateToProps(state) {
  const { VehicleReducer } = state;

  return {
    vehicles: VehicleReducer.vehicles,
    searching: VehicleReducer.searching,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SearchBar));
