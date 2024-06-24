import { StringFilter } from "../../util/StringFilter";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  id?: StringFilter;
  payment?: PaymentWhereUniqueInput;
  status?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
