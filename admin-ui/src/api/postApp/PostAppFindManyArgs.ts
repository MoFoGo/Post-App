import { PostAppWhereInput } from "./PostAppWhereInput";
import { PostAppOrderByInput } from "./PostAppOrderByInput";

export type PostAppFindManyArgs = {
  where?: PostAppWhereInput;
  orderBy?: PostAppOrderByInput;
  skip?: number;
  take?: number;
};
