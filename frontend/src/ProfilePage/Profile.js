import React, { useState } from 'react';
import Table from './Table';
import CreateForm from './CreateForm/CreateForm';
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar"
import './Profile.css'

function Profile() {
    const [groupInfo, setGroupInfo] = useState([
        {
            name: 'Room 307',
            size: '4',
            password: "1234",
        },
        {
            name: 'TestGroup',
            size: '1',
            password: "5678",
        },
        {
            name: 'Best Group',
            size: '2',
            password: "9",
        },
        {
            name: 'Family',
            size: '4',
            password: "10",
        },
    ]);
    const [isOverview, setOverview] = useState(true);

    function updateList(group) {
        setGroupInfo([...groupInfo, group]);
    }


    function removeOneGroup(index) {
        const updatedList = groupInfo.filter((group, i) => {
            return i !== index
        })
        setGroupInfo(updatedList)
    }

    return (
        <div class="page">
            <div className='header'>
                <h1>GroupCart</h1>
            </div>

            <div class="main-content">
                <ProfileSideBar />
                <div class="border-left">
                    <div className='top-bar'>
                        <div 
                            className={"bar-button " + (isOverview ? "active" : "inactive")}
                            onClick={() => setOverview(true)}
                        >
                            <h3>Overview</h3>
                        </div>
                        <div 
                            className={"bar-button " + (isOverview ? "inactive" : "active")} 
                            onClick={() => setOverview(false)}
                        >
                            <h3>Order History</h3>
                        </div>
                    </div>
                    <div className='group-container'>
                        <h2>GroupCarts</h2>
                        <div className="list-container">
                            <Table groupData={groupInfo} removeGroup={removeOneGroup} />
                        </div>
                        <div className="find-container">
                            <h2>Find Group</h2>
                            <CreateForm handleSubmit={updateList} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;