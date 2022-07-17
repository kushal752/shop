import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/apiCalls";

export default function Topbar() {
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    logoutUser(dispatch);
  }

  console.log("Topbar", user);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">BechDe. Admin</span>
        </div>
        <div className="topRight">
          {
              user === null &&
            <Link to="/login">
              <button>Login</button>
            </Link>
          }
          {
          user !== null && 
          <>
            <div>Hello Admin!</div>
            <button onClick={handleLogout}>Logout</button>
          </>
          }
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /> */}
        </div>
      </div>
    </div>
  );
}
