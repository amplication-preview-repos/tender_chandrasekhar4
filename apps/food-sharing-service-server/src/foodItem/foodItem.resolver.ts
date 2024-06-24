import * as graphql from "@nestjs/graphql";
import { FoodItemResolverBase } from "./base/foodItem.resolver.base";
import { FoodItem } from "./base/FoodItem";
import { FoodItemService } from "./foodItem.service";

@graphql.Resolver(() => FoodItem)
export class FoodItemResolver extends FoodItemResolverBase {
  constructor(protected readonly service: FoodItemService) {
    super(service);
  }
}
