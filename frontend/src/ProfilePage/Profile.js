import React, { useState, useEffect } from "react";
import Table from "./Table";
import CreateForm from "./CreateForm/CreateForm";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import NavbarWrapper from "../components/NavbarWrapper";
import "./Profile.css";

const Profile = () => {
  //get auth context
  const { user } = useAuthContext();
  console.log('profile', user);

  //connecting profile page to backend, getting groups
  useEffect(() => {
    const getGroup = async () => {
      //setting header authorization for bearer token
      const config = {
        headers: { Authorization: `Bearer ${user.data.token}` },
      };
      await axios
        .get("http://localhost:5001/group/user", config)
        .then((response) => {
          console.log(response.data);
          setGroupInfo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (user) {
      getGroup();
    }
  }, [user]);

  const [groupInfo, setGroupInfo] = useState([]);
  const [isOverview, setOverview] = useState(true);
  const [userName, setUsername] = useState("");

  async function createGroup(group) {
    //adding group to backend
    console.log(group);
    const config = {
      headers: { Authorization: `Bearer ${user.data.token}` },
    };
    await axios
      .post("http://localhost:5001/group", group, config)
      .then((response) => {
        console.log(response.data);
        setGroupInfo([...groupInfo, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function joinGroup(group) {
    console.log(group);

    const config = {
      headers: { Authorization: `Bearer ${user.data.token}` },
    };
    console.log(config);
    await axios
      .post(`http://localhost:5001/group/join/${group.name}`, group, config)
      .then((response) => {
        console.log(response.data);
        setGroupInfo([...groupInfo, response.data]);
      })
      .catch((error) => {
        alert(error.response.data.error);
        console.log(error);
      });
  }

  async function removeOneGroup(delgroup) {
    console.log(delgroup);

    const config = {
      headers: { Authorization: `Bearer ${user.data.token}` },
    };

    await axios
      .delete(`http://localhost:5001/group/${delgroup._id}`, config)
      .then((response) => {
        console.log(response);
        const updatedList = groupInfo.filter((group, i) => {
          return response.data._id !== group._id;
        });
        setGroupInfo(updatedList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="page">
      <NavbarWrapper />

      {user && (
        <div className="main-content">
          <ProfileSideBar user={user.data} grouplength={groupInfo.length} />
          <div className="border-left">
            <div className="top-bar">
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
                {/* <h3>Order History</h3> */}
              </div>
            </div>
            <div className="group-container">
              <h2>GroupCarts</h2>
              <div className="list-container">
                <Table groupData={groupInfo} removeGroup={removeOneGroup} />
              </div>
              <div className="find-container">
                <h2>Find Group</h2>
                <CreateForm handleSubmit={createGroup} handleJoin={joinGroup} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
