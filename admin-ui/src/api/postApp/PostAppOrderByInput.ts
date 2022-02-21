import { SortOrder } from "../../util/SortOrder";

export type PostAppOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  featuredImage?: SortOrder;
  id?: SortOrder;
  tags?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
