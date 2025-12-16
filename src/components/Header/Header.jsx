import "./Header.css";
import { NavLink } from "react-router-dom";
import headerLogo from "../../images/wtwr_header_logo.svg";
import headerAvatar from "../../images/avatar_logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({
  handleAddClick,
  weatherData,
  onLoginClick,
  onRegisterClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

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
        <NavLink className="header__nav-link" to="/profile">
          <div className="header__user-container">
            <p className="header__username">Terrence Tegegne</p>
            <img
              className="header__user-avatar"
              src={headerAvatar}
              alt="Terrence Tegegne"
            />
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
