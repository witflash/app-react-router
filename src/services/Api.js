import axios from 'axios';

class Api {
  constructor(API_URL) {
    this.API_URL = API_URL;
  }

  getData() {
    return axios.get(this.API_URL);
  }
}

export default Api;
