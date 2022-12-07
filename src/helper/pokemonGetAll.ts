import apiAxiosInstance from "../apiConfig/apiAxiosInstance";

export const pokemonGetAll = async (limit: number, offset: number): Promise<any> => {
  try {
    const response = await apiAxiosInstance.get(`?limit=${limit}&offset=${offset}`);
    return response.data.detailedResults;
  } catch (error: any) {
    throw new Error("Error al obtener los datos del pokemon");
  }
}