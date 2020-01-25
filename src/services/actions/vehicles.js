import Api from '../api';

export const getVehicles = (q) => {
  return async dispatch => {
    try{
      const vehicles = await Api.getVehicles(q);

      dispatch({type: 'SET_VEHICLES', payload: {vehicles}});
      return vehicles;
    }catch(erro) { console.log(erro) }
  }
}

export const setFilteredVehicles = (filteredVehicles) => {
  return async dispatch => {
    try {
      dispatch({type: 'SET_FILTERED_VEHICLES', payload: {filteredVehicles}})
    }catch(erro) {console.log(erro)}
  }
}

export const setSearchingTrue = () => {
  return async dispatch => {
    try{
      dispatch({type: 'SET_SEARCHING', payload: {searching: true}});

      return true;
    }catch(erro) { console.log(erro) }
  }
}

export const setSearchingFalse = () => {
  return async dispatch => {
    try{
      dispatch({type: 'SET_SEARCHING', payload: {searching: false}});

      return true;
    }catch(erro) { console.log(erro) }
  }
}