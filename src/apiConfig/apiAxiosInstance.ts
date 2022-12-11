import axios from "axios";

const apiAxiosGetAll = axios.create({
  baseURL: "http://localhost:8080/pokemon/",
});

export default apiAxiosGetAll;