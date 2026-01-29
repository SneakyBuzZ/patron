export type Wallet = {
  userId: string;
  address: string;
  chainId: string;
  createdAt: Date;
};

export type InsertWallet = {
  userId: string;
  address: string;
};
