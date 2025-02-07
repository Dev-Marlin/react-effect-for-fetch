import React from 'react'
import UsersListItem from './UsersListItem'

function UsersList({users}) {
    let index = 0;

  return (
    <ul className="users-list">
        {
            users.map((user) =>
            (
                <UsersListItem key={index++} user={user}></UsersListItem>
            ))
        }
    </ul>
  )
}

export default UsersList