import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CommunityNFTModule = buildModule("CommunityNFTModule", (m) => {
  const communityNFT = m.contract("CommunityNFT");

  return { communityNFT };
});

export default CommunityNFTModule;
