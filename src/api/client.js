import axios from "axios";

const api = {
  fakeApiClient: axios.create({
    baseURL: process.env.REACT_APP_FAKE_API_BASE_URL,
  })
};

export default api;
