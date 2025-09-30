import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function Main() {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">Today is 78 &deg; F</p>
        <ul className="cards__list">
          {defaultClothingItems.map((item) => {
            return <ItemCard key={item._id} item={item} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
