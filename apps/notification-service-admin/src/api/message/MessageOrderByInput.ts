import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  conversationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sender?: SortOrder;
  text?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
