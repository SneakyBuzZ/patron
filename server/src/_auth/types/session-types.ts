export type Session = {
  userId: string;
  token: string;
  userAgent?: string;
  ipAddress?: string;
  expiresAt: Date;
  createdAt: Date;
};

export type InsertSession = {
  userId: string;
  token: string;
  userAgent?: string;
  ipAddress?: string;
};
