import axios from "axios";

const apiAxiosInstance = axios.create({
  baseURL: "https://pokemonchallengeapiserver.azurewebsites.net",
});

export default apiAxiosInstance;