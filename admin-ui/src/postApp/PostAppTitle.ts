import { PostApp as TPostApp } from "../api/postApp/PostApp";

export const POSTAPP_TITLE_FIELD = "title";

export const PostAppTitle = (record: TPostApp): string => {
  return record.title || record.id;
};
