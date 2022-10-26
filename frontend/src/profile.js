import React, {useState, useEffect} from 'react';
import Table from './Table';




const groupInfo = [
    {
      name: 'Room 307',
      size: '4',
    },
    {
      name: 'TestGroup',
      size: '1',
    },
    {
      name: 'Best Group',
      size: '2',
    },
    {
      name: 'Family',
      size: '4',
    },
];


function Profile() {
    return ( 
        
       <div className="container">
            <h2>GroupCarts</h2>
            <Table groupData = {groupInfo}/>

       </div>


    ); 
}

export default Profile;