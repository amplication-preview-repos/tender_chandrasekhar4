import { TransactionCreateNestedManyWithoutPaymentsInput } from "./TransactionCreateNestedManyWithoutPaymentsInput";

export type PaymentCreateInput = {
  amount?: number | null;
  currency?: string | null;
  status?: string | null;
  timestamp?: Date | null;
  transactions?: TransactionCreateNestedManyWithoutPaymentsInput;
  userId?: string | null;
};
