import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../Sidebar/Sidebar";

function Profile({
  clothingItems,
  weatherData,
  handleCardClick,
  handleAddClick,
}) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        weatherData={weatherData}
        handleCardClick={handleCardClick}
        handleAddClick={handleAddClick}
      />
    </section>
  );
}

export default Profile;
