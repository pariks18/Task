import axios from "axios";

const api = axios.create({
  baseURL: "https://task-1-wvjx.onrender.com/api"
});

export default api;
