import { FoodItemWhereUniqueInput } from "../foodItem/FoodItemWhereUniqueInput";

export type RequestCreateInput = {
  foodItem?: FoodItemWhereUniqueInput | null;
  requestDate?: Date | null;
  requester?: string | null;
  status?: string | null;
};
