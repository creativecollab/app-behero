import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.5:3003"
});

export default api;
