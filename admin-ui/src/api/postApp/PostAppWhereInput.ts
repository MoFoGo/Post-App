import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PostAppWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  featuredImage?: StringNullableFilter;
  id?: StringFilter;
  tags?: StringNullableFilter;
  title?: StringNullableFilter;
};
