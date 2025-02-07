import React from 'react'
import './User.css'
function UsersListItem(prop) {
  return (
    <li className="user" style={{background: prop.user.favouriteColour}}>
        <img
        src={prop.user.profileImage}
        alt={prop.user.firstName+" "+prop.user.lastName}/>

        <h3>{prop.user.firstName} {prop.user.lastName}</h3>

        <p>Email: {prop.user.email}</p>
    </li>
  )
}

export default UsersListItem