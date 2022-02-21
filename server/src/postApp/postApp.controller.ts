import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PostAppService } from "./postApp.service";
import { PostAppControllerBase } from "./base/postApp.controller.base";

@swagger.ApiTags("post-apps")
@common.Controller("post-apps")
export class PostAppController extends PostAppControllerBase {
  constructor(
    protected readonly service: PostAppService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
