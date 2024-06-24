import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentId?: SortOrder;
  status?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
