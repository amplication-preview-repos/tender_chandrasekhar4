/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Request as PrismaRequest,
  FoodItem as PrismaFoodItem,
} from "@prisma/client";

export class RequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RequestCountArgs, "select">): Promise<number> {
    return this.prisma.request.count(args);
  }

  async requests(args: Prisma.RequestFindManyArgs): Promise<PrismaRequest[]> {
    return this.prisma.request.findMany(args);
  }
  async request(
    args: Prisma.RequestFindUniqueArgs
  ): Promise<PrismaRequest | null> {
    return this.prisma.request.findUnique(args);
  }
  async createRequest(args: Prisma.RequestCreateArgs): Promise<PrismaRequest> {
    return this.prisma.request.create(args);
  }
  async updateRequest(args: Prisma.RequestUpdateArgs): Promise<PrismaRequest> {
    return this.prisma.request.update(args);
  }
  async deleteRequest(args: Prisma.RequestDeleteArgs): Promise<PrismaRequest> {
    return this.prisma.request.delete(args);
  }

  async getFoodItem(parentId: string): Promise<PrismaFoodItem | null> {
    return this.prisma.request
      .findUnique({
        where: { id: parentId },
      })
      .foodItem();
  }
}
