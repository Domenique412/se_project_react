import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({
  clothingItems,
  weatherData,
  handleCardClick,
  handleAddClick,
  onEditProfile,
  onCardLike,
}) {
  return (
    <section className="profile">
      <SideBar onEditProfile={onEditProfile} />
      <ClothesSection
        clothingItems={clothingItems}
        weatherData={weatherData}
        handleCardClick={handleCardClick}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
      />
    </section>
  );
}

export default Profile;
