/* eslint-disable prettier/prettier */
import { Datagrid, List, ReferenceField, TextField } from "react-admin";

const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <ReferenceField source="userId" reference="users" />
        </Datagrid>
    </List>
);

export default PostList;