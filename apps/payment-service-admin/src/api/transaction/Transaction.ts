import { Payment } from "../payment/Payment";

export type Transaction = {
  createdAt: Date;
  id: string;
  payment?: Payment | null;
  status: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
