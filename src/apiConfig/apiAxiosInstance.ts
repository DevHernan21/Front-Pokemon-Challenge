import axios from "axios";

const apiAxiosGetAll = axios.create({
  baseURL: "https://pokemonchallengeapiserver.azurewebsites.net/pokemon/",
});

export default apiAxiosGetAll;