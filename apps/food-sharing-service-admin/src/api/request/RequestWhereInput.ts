import { FoodItemWhereUniqueInput } from "../foodItem/FoodItemWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RequestWhereInput = {
  foodItem?: FoodItemWhereUniqueInput;
  id?: StringFilter;
  requestDate?: DateTimeNullableFilter;
  requester?: StringNullableFilter;
  status?: StringNullableFilter;
};
