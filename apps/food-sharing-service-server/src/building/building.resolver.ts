import * as graphql from "@nestjs/graphql";
import { BuildingResolverBase } from "./base/building.resolver.base";
import { Building } from "./base/Building";
import { BuildingService } from "./building.service";

@graphql.Resolver(() => Building)
export class BuildingResolver extends BuildingResolverBase {
  constructor(protected readonly service: BuildingService) {
    super(service);
  }
}
