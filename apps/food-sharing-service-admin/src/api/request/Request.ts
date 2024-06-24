import { FoodItem } from "../foodItem/FoodItem";

export type Request = {
  createdAt: Date;
  foodItem?: FoodItem | null;
  id: string;
  requestDate: Date | null;
  requester: string | null;
  status: string | null;
  updatedAt: Date;
};
