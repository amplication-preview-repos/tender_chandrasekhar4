import { TransactionUpdateManyWithoutPaymentsInput } from "./TransactionUpdateManyWithoutPaymentsInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  currency?: string | null;
  status?: string | null;
  timestamp?: Date | null;
  transactions?: TransactionUpdateManyWithoutPaymentsInput;
  userId?: string | null;
};
