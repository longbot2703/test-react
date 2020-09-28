import React from "react";
import {Link} from "react-router-dom";

export default function Item({user, onDelete}) {
  return (
    <tr>
      <td>{user.ID}</td>
      <td>{user.UserName}</td>
      <td>{user.Password}</td>
      <td>
        <Link to={`users/${user.ID}`} className='btn-action'>
          Edit
        </Link>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#' onClick={onDelete} id="btn-delete" className='btn-action'>Delete</a>
      </td>
    </tr>
  );
}