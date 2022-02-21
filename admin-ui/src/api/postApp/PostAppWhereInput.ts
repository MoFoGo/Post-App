import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostAppWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  featuredImage?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
