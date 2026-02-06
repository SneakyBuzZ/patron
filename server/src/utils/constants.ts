import ContractABI from "../contract-abi.json";

export const PORT = process.env.PORT! || 5000;
export const DATABASE_URL = process.env.DATABASE_URL!;

export const COOKIE_SECRET = process.env.COOKIE_SECRET!;
export const JWT_SECRET = process.env.JWT_SECRET!;

export const CLIENT_URL = process.env.CLIENT_URL!;
export const AI_SERVER_URL = process.env.AI_SERVER_URL!;

export const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL!;
export const CONTRACT_ABI = ContractABI.abi;
