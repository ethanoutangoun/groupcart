import React from "react";
import "./Table.css";
import { NavLink } from "react-router-dom";

function TableHeader() {
  return (
    <thead className="profile-thead">
      <tr>
        <th>Name</th>
        <th>Size</th>
        <th>Password</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  console.log(props);
  if (props.groupData.length > 0) {
    const rows = props.groupData.map((row, index) => {
      return (
        <tr className="profile-tr" key={index}>
          <td>
            <NavLink
              to={{ pathname: "/orders" }}
              state={{ groupid: row._id, name: row.name }}
              className="order-style"
            >
              {row.name}
            </NavLink>
          </td>
          <td>{row.people.length}</td>
          <td>{row.password}</td>
          <td>
            <button
              className="btn-delete"
              onClick={() => props.removeGroup(row)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  }
}
function Table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody groupData={props.groupData} removeGroup={props.removeGroup} />
    </table>
  );
}

export default Table;
