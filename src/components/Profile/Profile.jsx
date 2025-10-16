import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../Sidebar/Sidebar";

function Profile({ clothingItems, weatherData, handleCardClick }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        weatherData={weatherData}
        handleCardClick={handleCardClick}
      />
    </section>
  );
}

export default Profile;
