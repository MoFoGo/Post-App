import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PostAppCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Author " source="author" />
        <TextInput label="Content " multiline source="content" />
        <TextInput label="Featured Image" source="featuredImage" />
        <TextInput label="Tags" source="tags" />
        <TextInput label="Title" multiline source="title" />
      </SimpleForm>
    </Create>
  );
};
