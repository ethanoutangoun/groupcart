import React from 'react';
import './Table.css'

function TableHeader(){
    return(
        <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th>Password</th>
        </tr>
      </thead>

    )
}

function TableBody(props){
  const rows = props.groupData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.size}</td>
        <td>{row.password}</td>
        <td>
          <button class="btn-delete" onClick = {()=> props.removeGroup(index)}>Delete ×</button>
        </td>
      </tr>
    );
  });
  return (
      <tbody>
         {rows}
      </tbody>
   );

}
function Table(props) { 
    return (
      <table>
        <TableHeader/>
        <TableBody groupData = {props.groupData} removeGroup = {props.removeGroup}/>
      </table>
    );
}

export default Table;