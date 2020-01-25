const INITIAL_STATE = {
  vehicles: [],
  searching: false,
  filteredVehicles: [],
  brands: [],
  newVehicle: {
    title: '',
    model: '',
    brand: '',
    year: '',
    color: '',
    km: '',
    price: '',
  }
};

export const VehicleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_VEHICLES':
      return {
        ...state,
        vehicles: action.payload.vehicles
      };
    case 'SET_SEARCHING':
      return {
        ...state,
        searching: action.payload.searching
      }
    case 'SET_FILTERED_VEHICLES':
      return {
        ...state,
        filteredVehicles: action.payload.filteredVehicles
      }
    case 'SET_NEW_VEHICLE':
      return {
        ...state,
        newVehicle: { 
          ...state.newVehicle,
          [action.payload.name]: action.payload.value,
        }
      }
    case 'CLEAR_NEW_VEHICLE':
      return {
        ...state,
        newVehicle: INITIAL_STATE.newVehicle
      }
    case 'GET_BRANDS':
      return {
        ...state,
        brands: action.payload.brands,
      }
    default:
      return state;
  }
};