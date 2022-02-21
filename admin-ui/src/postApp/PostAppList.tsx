import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PostAppList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Post Apps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Author " source="author" />
        <TextField label="Content " source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Featured Image" source="featuredImage" />
        <TextField label="ID" source="id" />
        <TextField label="Tags" source="tags" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
