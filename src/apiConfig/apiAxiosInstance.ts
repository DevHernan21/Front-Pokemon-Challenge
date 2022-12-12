import axios from "axios";

const apiAxiosGetAll = axios.create({
  baseURL: "https://pokemonchallengeapiserver.azurewebsites.net/",
  // baseURL: "http://localhost:8080/pokemon",
  // baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export default apiAxiosGetAll;