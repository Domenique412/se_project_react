import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AddItemModal from "../AddItemModal/AddItemModel";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import { defaultClothingItems } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedWeather, setSelectedWeather] = useState("");
  const [formData, setFormData] = useState({ name: "", imageURL: "" });
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const isFormValid = () => {
    return (
      formData.name.trim().length >= 2 &&
      formData.name.trim().length <= 40 &&
      formData.imageURL.trim().length > 0 &&
      selectedWeather !== ""
    );
  };

  const closeModal = () => {
    setSelectedWeather("");
    setActiveModal("");
    setFormData({
      name: "",
      imageURL: "",
    });
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleRadioClick = (value) => {
    setSelectedWeather(selectedWeather === value ? "" : value);
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Main
            weatherData={weatherData}
            handleCardClick={handleCardClick}
            clothingItems={defaultClothingItems}
          />
        </div>
        <AddItemModal
          activeModal={activeModal}
          onClose={closeModal}
          isDisabled={!isFormValid()}
          isOpen={activeModal === "add-garment"}
        />

        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeModal}
        />
        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
