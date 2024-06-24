import { Module } from "@nestjs/common";
import { FoodItemModuleBase } from "./base/foodItem.module.base";
import { FoodItemService } from "./foodItem.service";
import { FoodItemController } from "./foodItem.controller";
import { FoodItemResolver } from "./foodItem.resolver";

@Module({
  imports: [FoodItemModuleBase],
  controllers: [FoodItemController],
  providers: [FoodItemService, FoodItemResolver],
  exports: [FoodItemService],
})
export class FoodItemModule {}
