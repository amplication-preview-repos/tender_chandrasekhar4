import { FoodItemWhereInput } from "./FoodItemWhereInput";

export type FoodItemListRelationFilter = {
  every?: FoodItemWhereInput;
  some?: FoodItemWhereInput;
  none?: FoodItemWhereInput;
};
