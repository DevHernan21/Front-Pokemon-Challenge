import axios from "axios";

const apiAxiosGetAll = axios.create({
  baseURL: "https://challenge-poke-api.onrender.com/pokemon",
});

export default apiAxiosGetAll;