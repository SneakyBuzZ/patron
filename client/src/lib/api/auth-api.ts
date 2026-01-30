import { api } from "@/lib/config/axios-config";
import { signMessage } from "@wagmi/core";
import { config } from "@/lib/config/wagmi-config";

export const getAuthenticated = async () => {
  try {
    const response = await api.post("/auth/status");
    return response.status === 200;
  } catch {
    return false;
  }
};

export const getNonce = async (address: string) => {
  const response = await api.post("/auth/nonce", { address });
  return response.data.payload.nonce;
};

export const verifySignature = async (address: string, signature: string) => {
  const response = await api.post("/auth/verify", { address, signature });
  return response.status === 200;
};

export const signIn = async (address: string) => {
  const nonce = await getNonce(address);
  const message = `Login nonce: ${nonce}`;
  const signature = await signMessage(config, { message });
  await verifySignature(address, signature);
};
