import React from 'react';
import {SearchBarWrapper, Input} from './search_bar.styles';
import {Link} from 'react-router-dom';
import Button from '../button/button';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {
  getVehicles, 
  setFilteredVehicles, 
  setSearchingFalse, 
  setSearchingTrue
} from '../../services/actions/vehicles';

const SearchBar = props => {
  const handleChange = async (e) => {
    const {vehicles, searching, actions} = props;
    const text = e.target.value;

    actions.setSearchingTrue();
    if(!searching) {
      await props.actions.getVehicles(text);
    }
    
    if(text !== '' && text !== null) {
      const filtered = vehicles.filter((item) => {
        return (item.title.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })

      actions.setFilteredVehicles(filtered);
    } else {
        actions.setSearchingFalse();
        actions.setFilteredVehicles([]);
    }

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

const actionCreators = {
  getVehicles,
  setFilteredVehicles,
  setSearchingFalse,
  setSearchingTrue
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

function mapStateToProps(state) {
  const { VehicleReducer } = state;

  return {
    vehicles: VehicleReducer.vehicles,
    searching: VehicleReducer.searching,
    filteredVehicles: VehicleReducer.filteredVehicles
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SearchBar));
