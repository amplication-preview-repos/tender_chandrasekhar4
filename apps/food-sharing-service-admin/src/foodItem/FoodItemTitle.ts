import { FoodItem as TFoodItem } from "../api/foodItem/FoodItem";

export const FOODITEM_TITLE_FIELD = "name";

export const FoodItemTitle = (record: TFoodItem): string => {
  return record.name?.toString() || String(record.id);
};
