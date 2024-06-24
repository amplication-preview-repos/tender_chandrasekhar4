import { Request } from "../request/Request";
import { User } from "../user/User";

export type FoodItem = {
  createdAt: Date;
  description: string | null;
  expiryDate: Date | null;
  id: string;
  name: string | null;
  requests?: Array<Request>;
  updatedAt: Date;
  user?: User | null;
};
