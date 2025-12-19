import { useContext } from "react";
import "./SideBar.css";
import sidebarAvatar from "../../images/avatar_logo.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ onEditProfile, onLogout }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        <img
          className="sidebar__user-avatar"
          src={currentUser?.avatar || sidebarAvatar}
          alt={currentUser?.name || "User"}
        />{" "}
        <p className="sidebar__username">{currentUser?.name || "Guest"}</p>
      </div>

      <button
        type="button"
        className="sidebar__edit-btn"
        onClick={onEditProfile}
      >
        Change profile data
      </button>
      <button type="button" className="sidebar__auth-btn" onClick={onLogout}>
        Log out
      </button>
    </aside>
  );
}

export default SideBar;
