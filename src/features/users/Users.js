import React from "react";
import {  useSelector } from "react-redux";

// add any needed imports here

function Users() {
  const length = useSelector(state => state.users.length)
  const users = useSelector(state => state.users)
  console.log(users)
  return (
    <div>
      <ul>
        {/* Users! */}
        {users.map(user => <li key={user.username}>{user.username}</li> )}
        Total Users: {length}
      </ul>
    </div>
  );
}

export default Users;
