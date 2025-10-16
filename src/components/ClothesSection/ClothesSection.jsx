import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, weatherData, handleCardClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__top">
        <p className="clothes-section__title">Your Items</p>
        <button className="clothes-section__btn">+ Add new</button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
