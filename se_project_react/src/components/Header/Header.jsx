import "./Header.css";
import headerLogo from "../../images/wtwr_header_logo.svg";
import headerAvatar from "../../images/avatar_logo.svg";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} />
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img
          className="header__user-avatar"
          src={headerAvatar}
          alt="Terrence Tegegne"
        />
      </div>
    </header>
  );
}

export default Header;
