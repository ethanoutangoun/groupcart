import React, {useState, useEffect} from 'react';
import Table from './Table';
import './Profile.css'






function Profile() {
    const [groupInfo,setGroupInfo] = useState([
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
    ]);


    function removeOneGroup(index){


        const updatedList = groupInfo.filter((group,i) =>{
            return i!=index
        })
        setGroupInfo(updatedList)
    }
    

    return ( 

        <body>

        <div className='header'>
            <h1>GroupCart</h1>


        </div>
        
        <div className="group-container">
                <h2>GroupCarts</h2>
                <Table groupData = {groupInfo} removeGroup = {removeOneGroup}/>
                <h2>Find Group</h2>
        </div>

       </body>


    ); 
}

export default Profile;