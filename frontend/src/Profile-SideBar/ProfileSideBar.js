import React from "react";
import "./ProfileSideBar.css"

const ProfileSideBar = () => {
    const fullName = "Ethan James";
    const userName = "Username123"

    return (
        <div class="container">
            <div class="profile-container">
                <div class="image-container">E</div>
                <img 
                    src={require("../icons/icons8-macos-maximize-90.png")} 
                    alt="change-image-icon"
                    class="hover-icon"
                />
            </div>
            <div class="user-info">
                <h1 id="full-name">{ fullName }</h1>
                <p id="user-name">{ userName }</p>
                {/* <table>
                    <tr>
                        <td>Spent</td>
                        <td>Since</td>
                        <td>Active Groups</td>
                    </tr>
                </table> */}
                <div class="user-stats">
                    <div class="box left-rounded" id="spent">
                        <div class="inner-text">
                            <span class="inner-header">Spent</span>
                            <span class="inner-value">$50</span>
                        </div>
                    </div>
                    <div class="box" id="since">
                        <div class="inner-text">
                            <span class="inner-header">Since</span>
                            <span class="inner-value">Oct 2022</span>
                        </div>
                    </div>
                    <div class="box right-rounded" id="active-groups">
                        <div class="inner-text">
                            <span class="inner-header">Active Groups</span>
                            <span class="inner-value">5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSideBar;
