import axios from "axios";

const apiAxiosGetAll = axios.create({
  baseURL: "https://pokemonchallengeapiserver.azurewebsites.net/",
});

export default apiAxiosGetAll;