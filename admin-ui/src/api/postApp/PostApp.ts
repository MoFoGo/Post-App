import { User } from "../user/User";

export type PostApp = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  featuredImage: string | null;
  id: string;
  name: string | null;
  tags?: Array<User>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
