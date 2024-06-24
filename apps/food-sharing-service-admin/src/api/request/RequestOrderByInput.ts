import { SortOrder } from "../../util/SortOrder";

export type RequestOrderByInput = {
  createdAt?: SortOrder;
  foodItemId?: SortOrder;
  id?: SortOrder;
  requestDate?: SortOrder;
  requester?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
