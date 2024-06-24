import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FoodItemWhereInput = {
  description?: StringNullableFilter;
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  requests?: RequestListRelationFilter;
  user?: UserWhereUniqueInput;
};
