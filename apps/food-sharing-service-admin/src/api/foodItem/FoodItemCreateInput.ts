import { RequestCreateNestedManyWithoutFoodItemsInput } from "./RequestCreateNestedManyWithoutFoodItemsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FoodItemCreateInput = {
  description?: string | null;
  expiryDate?: Date | null;
  name?: string | null;
  requests?: RequestCreateNestedManyWithoutFoodItemsInput;
  user?: UserWhereUniqueInput | null;
};
