import { FoodItemWhereUniqueInput } from "./FoodItemWhereUniqueInput";
import { FoodItemUpdateInput } from "./FoodItemUpdateInput";

export type UpdateFoodItemArgs = {
  where: FoodItemWhereUniqueInput;
  data: FoodItemUpdateInput;
};
