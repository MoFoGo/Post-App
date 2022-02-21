import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PostAppEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Author " source="author" />
        <TextInput label="Content " multiline source="content" />
        <TextInput label="Featured Image" source="featuredImage" />
        <TextInput label="Tags" source="tags" />
        <TextInput label="Title" multiline source="title" />
      </SimpleForm>
    </Edit>
  );
};
