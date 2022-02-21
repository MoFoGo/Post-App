import { Module } from "@nestjs/common";
import { PostAppModuleBase } from "./base/postApp.module.base";
import { PostAppService } from "./postApp.service";
import { PostAppController } from "./postApp.controller";
import { PostAppResolver } from "./postApp.resolver";

@Module({
  imports: [PostAppModuleBase],
  controllers: [PostAppController],
  providers: [PostAppService, PostAppResolver],
  exports: [PostAppService],
})
export class PostAppModule {}
