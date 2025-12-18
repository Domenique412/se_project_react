import { useContext } from "react";
import "./SideBar.css";
import sidebarAvatar from "../../images/avatar_logo.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ onEditProfile }) {
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
        <button
          type="button"
          className="sidebar__edit-btn"
          onClick={onEditProfile}
        >
          Edit profile
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
