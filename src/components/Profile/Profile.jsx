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
  onLogout,
}) {
  return (
    <section className="profile">
      <SideBar onEditProfile={onEditProfile} onLogout={onLogout} />
      <ClothesSection
        clothingItems={clothingItems}
        weatherData={weatherData}
        handleCardClick={handleCardClick}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
        onLogout={onLogout}
      />
    </section>
  );
}

export default Profile;
