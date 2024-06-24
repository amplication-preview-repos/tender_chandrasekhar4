import { Transaction } from "../transaction/Transaction";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  status: string | null;
  timestamp: Date | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  userId: string | null;
};
