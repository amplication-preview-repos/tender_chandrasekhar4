import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type TransactionCreateInput = {
  payment?: PaymentWhereUniqueInput | null;
  status?: string | null;
  timestamp?: Date | null;
};
