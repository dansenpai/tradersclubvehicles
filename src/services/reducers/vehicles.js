const emptyVehicle = {
  title: '',
  model: '',
  brand: '',
  year: '',
  color: '',
  km: '',
  price: '',
}

const INITIAL_STATE = {
  vehicles: [],
  searching: false,
  filteredVehicles: [],
  brands: [],
  newVehicle: emptyVehicle,
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
    case 'GET_BRANDS':
      return {
        ...state,
        brands: action.payload.brands,
      }
    default:
      return state;
  }
};