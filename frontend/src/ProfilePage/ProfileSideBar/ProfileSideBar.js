import React from "react";
import "./ProfileSideBar.css";

const ProfileSideBar = ({ user, grouplength }) => {
  let name = user.username;
  // console.log(name);
  console.log('profileside', user)
  let fullName = `${user.user.first} ${user.user.last}`;

  return (
    <div className="page-container">
      <div className="profile-container">
        <div className="image-container">E</div>
        <img
          src={require("../../icons/icons8-macos-maximize-90.png")}
          alt="change-profile-pic"
          className="hover-icon"
        />
      </div>
      <div className="user-info">
        <h1 id="full-name">{fullName}</h1>
        <p id="user-name">{name}</p>
        {/* <table>
                    <tr>
                        <td>Spent</td>
                        <td>Since</td>
                        <td>Active Groups</td>
                    </tr>
                </table> */}
        <div className="user-stats">
          {/* <div className="box left-rounded" id="spent">
            <div className="inner-text">
              <span className="inner-header">Spent</span>
              <span className="inner-value">$50</span>
            </div>
          </div>
          <div className="box" id="since">
            <div className="inner-text">
              <span className="inner-header">Since</span>
              <span className="inner-value">Oct 2022</span>
            </div>
          </div> */}
          <div className="box right-rounded" id="active-groups">
            <div className="inner-text">
              <span className="inner-header">Active Groups</span>
              <span className="inner-value">{grouplength}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSideBar;
