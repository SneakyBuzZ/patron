import z from "zod";

export type Community = {
  id: string;

  name: string;
  slug: string;
  description?: string;

  avatar?: string;
  banner?: string;

  creatorId: string;

  membersCount: number;
  createdAt: Date;
  updatedAt: Date;
};

export const createCommunityDTO = z.object({
  name: z.string().min(3).max(120),
  description: z.string().max(500).optional(),
  banner: z.string().url(),
  avatar: z.string().url(),
  metadataCid: z.string().min(10).max(120),
  txHash: z.string().min(10).max(80),
});

export type CreateCommunityDTO = {
  name: string;
  description: string;
  banner: string;
  avatar: string;
  metadataCid: string;
  txHash: string;
};

export type InsertCommunity = {
  name: string;
  slug: string;
  description?: string;
  avatar?: string;
  banner?: string;
  creatorId: string;
  metadataCid: string;
  chainId: number;
  contractAddress: string;
  tokenId: number;
  mintTxHash: string;
};
