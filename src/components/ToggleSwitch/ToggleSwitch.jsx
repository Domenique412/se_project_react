import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle__switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle__switch-checkbox"
      />
      <span className="toggle__switch-circle"></span>
      <span
        style={{ color: `${currentTemperatureUnit === "F" ? "white" : ""}` }}
        className="toggle__switch-text toggle__switch-text_F"
      >
        F
      </span>
      <span
        style={{ color: `${currentTemperatureUnit === "C" ? "white" : ""}` }}
        className="toggle__switch-text toggle__switch-text_C"
      >
        C
      </span>
    </label>
  );
}

export default ToggleSwitch;
