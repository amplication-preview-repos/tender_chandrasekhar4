import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BuildingService } from "./building.service";
import { BuildingControllerBase } from "./base/building.controller.base";

@swagger.ApiTags("buildings")
@common.Controller("buildings")
export class BuildingController extends BuildingControllerBase {
  constructor(protected readonly service: BuildingService) {
    super(service);
  }
}
