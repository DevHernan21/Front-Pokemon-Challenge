import apiAxiosInstance from "../apiConfig/apiAxiosInstance";

export const pokemonGetByName = async (value: string): Promise<any> => {
  try {
    const response = await apiAxiosInstance.get(`/getPokemonByName?name=${value}`);
    return response;
  } catch (error: any) {
    throw new Error("Error al obtener los datos del pokemon");
  }
}