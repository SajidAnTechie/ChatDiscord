import React from "react";
import User from "./User";

const Users = ({ users }) => {
  return (
    <ul id="users">
      {users.map((user, index) => {
        return <User key={index} user={user} />;
      })}
    </ul>
  );
};

export default Users;
