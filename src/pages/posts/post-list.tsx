/* eslint-disable prettier/prettier */
import { Datagrid, List, ReferenceField, TextField, FunctionField, EditButton } from "react-admin";

const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Post Title" />
            <FunctionField label="Excerpt" render={(record) => `${record.body.substring(0, 50)}...`} />
            <ReferenceField source="userId" reference="users" />
            <EditButton />
        </Datagrid>
    </List>
);

export default PostList;