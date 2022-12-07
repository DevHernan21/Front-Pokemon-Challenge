import axios from "axios";

const apiAxiosInstance = axios.create({
  // baseURL: "https://pokeapi.co/api/v2/pokemon/",
  baseURL: "http://localhost:8080/pokemon/",
});

export default apiAxiosInstance;