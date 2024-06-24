import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FoodItemServiceBase } from "./base/foodItem.service.base";

@Injectable()
export class FoodItemService extends FoodItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
