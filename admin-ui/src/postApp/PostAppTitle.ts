import { PostApp as TPostApp } from "../api/postApp/PostApp";

export const POSTAPP_TITLE_FIELD = "name";

export const PostAppTitle = (record: TPostApp): string => {
  return record.name || record.id;
};
