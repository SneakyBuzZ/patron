import CommunityNFTArtifact from "../contract-abi.json";

export const API_URL = import.meta.env.VITE_API_URL;
export const PINATA_GATEWAY_URL = import.meta.env.VITE_PINATA_GATEWAY_URL!;
export const PINATA_JWT = import.meta.env.VITE_PINATA_JWT_SECRET!;

export const DEPLOYED_CONTRACT_ADDRESS = import.meta.env
  .VITE_DEPLOYED_CONTRACT_ADDRESS!;

export const CONTRACT_ABI = CommunityNFTArtifact.abi;
