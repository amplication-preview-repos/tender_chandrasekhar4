import { Module } from "@nestjs/common";
import { BuildingModuleBase } from "./base/building.module.base";
import { BuildingService } from "./building.service";
import { BuildingController } from "./building.controller";
import { BuildingResolver } from "./building.resolver";

@Module({
  imports: [BuildingModuleBase],
  controllers: [BuildingController],
  providers: [BuildingService, BuildingResolver],
  exports: [BuildingService],
})
export class BuildingModule {}
