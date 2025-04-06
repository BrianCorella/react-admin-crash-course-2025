/* eslint-disable prettier/prettier */
import { Datagrid, List, TextField } from "react-admin";

const UserList = () => {
  return (<List>
      <Datagrid>
        <TextField source="id" label="User ID" />
        <TextField source="name" label="User Name" />
        <TextField source="email" label="Email" />
        <TextField source="phone" label="Phone" />
      </Datagrid>
    </List>
  );
}

export default UserList;