import { api } from "../config/axios-config";
import { CommunityCreateDTO } from "./dtos/community-dto";

export const create = async (data: CommunityCreateDTO) => {
  const response = await api.post("/communities", data);
  return response.data.payload;
};

export const getAll = async () => {
  const response = await api.get("/communities");
  return response.data.payload;
};
