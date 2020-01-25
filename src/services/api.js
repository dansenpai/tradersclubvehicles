import axios from 'axios';

const URL_BASE = 'https://private-anon-20f2391b4c-tradersclubapi.apiary-mock.com/api/';

export default {
  getVehicles: async (q) => {
    try {
      const response = await axios.get(`${URL_BASE}/cars?search=${q}`);

      return response.data.cars;
    } catch (e) {
      console.log(e);
    }
  }
}
