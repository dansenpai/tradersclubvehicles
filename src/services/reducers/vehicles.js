const INITIAL_STATE = {
  vehicles: [],
  searching: false,
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
    default:
      return state;
  }
};