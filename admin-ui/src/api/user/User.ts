import { PostApp } from "../postApp/PostApp";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name?: PostApp | null;
  posts?: Array<PostApp>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
