import React from 'react';

function TableHeader(){
    return(
        <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
        </tr>
      </thead>

    )
}

function  TableBody(props){
  const rows = props.groupData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.size}</td>
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
        <TableBody groupData = {props.groupData}/>
      </table>
    );
}

export default Table;