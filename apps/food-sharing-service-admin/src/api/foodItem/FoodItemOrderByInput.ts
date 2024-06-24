import { SortOrder } from "../../util/SortOrder";

export type FoodItemOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
