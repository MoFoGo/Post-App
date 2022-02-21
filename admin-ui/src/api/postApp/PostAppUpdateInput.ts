import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostAppUpdateInput = {
  author?: string | null;
  content?: string | null;
  featuredImage?: string | null;
  name?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
