import { HardhatUserConfig } from "hardhat/config";
import dotenv from "dotenv";
import hardhatIgnitionViemPlugin from "@nomicfoundation/hardhat-ignition-viem";

dotenv.config();

const config: HardhatUserConfig = {
  plugins: [hardhatIgnitionViemPlugin],
  solidity: "0.8.24",
  networks: {
    sepolia: {
      type: "http",
      url: process.env.SEPOLIA_RPC_URL!,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
};

export default config;
