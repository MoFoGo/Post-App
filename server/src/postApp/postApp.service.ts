import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PostAppServiceBase } from "./base/postApp.service.base";

@Injectable()
export class PostAppService extends PostAppServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
