import "./Header.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import headerLogo from "../../images/wtwr_header_logo.svg";
import headerAvatar from "../../images/avatar_logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({
  handleAddClick,
  weatherData,
  onLoginClick,
  onRegisterClick,
  onLogout,
  isLoggedIn,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const getInitials = (name) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase();
  };

  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={headerLogo} alt="WTWR logo" />
      </NavLink>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__controls">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add Clothes
        </button>

        {isLoggedIn ? (
          <>
            <NavLink className="header__nav-link" to="/profile">
              <div className="header__user-container">
                <p className="header__username">{currentUser?.name}</p>
                {currentUser?.avatar ? (
                  <img
                    className="header__user-avatar"
                    src={currentUser.avatar}
                    alt={currentUser.name}
                  />
                ) : (
                  <div className="header__user-avatar header__user-avatar_placeholdeer">
                    {getInitials(currentUser?.name)}
                  </div>
                )}
              </div>
            </NavLink>
            <button
              type="button"
              className="header__auth-btn"
              onClick={onLogout}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="header__auth-btn"
              onClick={onLoginClick}
            >
              Log in
            </button>
            <button
              type="button"
              className="header__auth-btn"
              onClick={onRegisterClick}
            >
              Sign up
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
