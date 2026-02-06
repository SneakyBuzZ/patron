import { api } from "../config/axios-config";
import { UserDTO } from "./dtos/user-dto";

export const getUser = async (): Promise<UserDTO> => {
  const response = await api.get("/user");
  return response.data.payload;
};
