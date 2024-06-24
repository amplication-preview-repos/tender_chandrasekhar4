import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  transactions?: TransactionListRelationFilter;
  userId?: StringNullableFilter;
};
