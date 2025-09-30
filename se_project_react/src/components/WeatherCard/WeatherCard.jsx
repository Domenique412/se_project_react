import "./WeatherCard.css";
import sunny from "../../images/wc__sunny.svg";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75&deg;F</p>
      <img className="weather-card__image" src={sunny} alt="Sunny Banner" />
    </section>
  );
}

export default WeatherCard;
