import { SortOrder } from "../../util/SortOrder";

export type PostAppOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  featuredImage?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
