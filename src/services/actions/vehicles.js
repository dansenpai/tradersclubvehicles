import Api from '../api';

export const getVehicles = (q = '') => {
  return async dispatch => {
    try{
      const vehicles = await Api.getVehicles(q);

      dispatch({type: 'SET_VEHICLES', payload: {vehicles}});
      return vehicles;
    }catch(erro) { throw erro }
  }
}

export const setFilteredVehicles = (filteredVehicles) => {
  return async dispatch => {
    try {
      dispatch({type: 'SET_FILTERED_VEHICLES', payload: {filteredVehicles}})
    }catch(erro) {throw erro}
  }
}

export const setSearchingTrue = () => {
  return async dispatch => {
    try{
      dispatch({type: 'SET_SEARCHING', payload: {searching: true}});

      return true;
    }catch(erro) { throw erro }
  }
}

export const setSearchingFalse = () => {
  return async dispatch => {
    try{
      dispatch({type: 'SET_SEARCHING', payload: {searching: false}});

      return true;
    }catch(erro) { throw erro }
  }
}

export const createNewVehicle = (vehicle, action) => {
  return async dispatch => {
    try{

      if(action === 'CREATE') return await Api.createNewVehicle({car: vehicle});

      return await Api.editVehicle({car: vehicle});
    }catch(erro) { throw erro }
  }
}

export const removeVehicle = (id) => {
  return async dispatch => {
    try{
      return await Api.removeVehicle(id);
    }catch(erro) { throw erro }
  }
}

export const getBrands = () => {
  return async dispatch => {
    try{
      const brands = await Api.getBrands();

      dispatch({type: 'GET_BRANDS', payload: {brands}});

      return true;
    }catch(erro) { throw erro }
  }
}