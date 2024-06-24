import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FoodItemService } from "./foodItem.service";
import { FoodItemControllerBase } from "./base/foodItem.controller.base";

@swagger.ApiTags("foodItems")
@common.Controller("foodItems")
export class FoodItemController extends FoodItemControllerBase {
  constructor(protected readonly service: FoodItemService) {
    super(service);
  }
}
