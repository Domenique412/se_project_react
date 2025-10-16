import "./SideBar.css";
import sidebarAvatar from "../../images/avatar_logo.svg";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        <img
          className="sidebar__user-avatar"
          src={sidebarAvatar}
          alt="Terrence Tegegne"
        />{" "}
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </aside>
  );
}

export default SideBar;
