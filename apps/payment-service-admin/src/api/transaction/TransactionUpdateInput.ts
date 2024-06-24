import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type TransactionUpdateInput = {
  payment?: PaymentWhereUniqueInput | null;
  status?: string | null;
  timestamp?: Date | null;
};
