import { PostAppWhereUniqueInput } from "../postApp/PostAppWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  name?: PostAppWhereUniqueInput | null;
  password: string;
  roles: Array<string>;
  username: string;
};
