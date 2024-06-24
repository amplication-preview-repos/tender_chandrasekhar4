import { FoodItemWhereInput } from "./FoodItemWhereInput";
import { FoodItemOrderByInput } from "./FoodItemOrderByInput";

export type FoodItemFindManyArgs = {
  where?: FoodItemWhereInput;
  orderBy?: Array<FoodItemOrderByInput>;
  skip?: number;
  take?: number;
};
