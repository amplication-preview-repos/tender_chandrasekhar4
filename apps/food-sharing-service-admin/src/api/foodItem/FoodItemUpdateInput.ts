import { RequestUpdateManyWithoutFoodItemsInput } from "./RequestUpdateManyWithoutFoodItemsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FoodItemUpdateInput = {
  description?: string | null;
  expiryDate?: Date | null;
  name?: string | null;
  requests?: RequestUpdateManyWithoutFoodItemsInput;
  user?: UserWhereUniqueInput | null;
};
