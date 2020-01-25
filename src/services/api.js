import axios from 'axios';

const URL_BASE = 'https://private-anon-20f2391b4c-tradersclubapi.apiary-mock.com/api';

export default {
  getVehicles: async (q) => {
    try {
      const response = await axios.get(`${URL_BASE}/cars?search=${q}`);

      return response.data.cars;
    } catch (e) {
      throw(e);
    }
  },
  getBrands: async () => {
    try {
      const response = await axios.get(`${URL_BASE}/brands`);

      return response.data.brands;
    } catch (e) {
      throw(e);
    }
  },
  createNewVehicle: async (data) => {
    try {
      const response = await axios.post(`${URL_BASE}/cars`, data);

      return response;
    } catch (e) {
      throw e;
    }
  }
}

