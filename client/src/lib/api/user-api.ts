import { api } from "@/lib/config/axios-config";

export const getAuthenticated = async () => {
  try {
    const response = await api.post("/auth/status");
    console.log("Auth Status Response:", response.status === 200);
    return response.status === 200;
  } catch {
    return false;
  }
};
