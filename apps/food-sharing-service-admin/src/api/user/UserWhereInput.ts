import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FoodItemListRelationFilter } from "../foodItem/FoodItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  foodItems?: FoodItemListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
