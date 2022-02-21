import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PostAppResolverBase } from "./base/postApp.resolver.base";
import { PostApp } from "./base/PostApp";
import { PostAppService } from "./postApp.service";

@graphql.Resolver(() => PostApp)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PostAppResolver extends PostAppResolverBase {
  constructor(
    protected readonly service: PostAppService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
