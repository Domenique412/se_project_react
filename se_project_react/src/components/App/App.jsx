import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedWeather, setSelectedWeather] = useState("");
  const [formData, setFormData] = useState({ name: "", imageURL: "" });

  const isFormValid = () => {
    return (
      formData.name.trim().length >= 2 &&
      formData.name.trim().length <= 40 &&
      formData.imageURL.trim().length > 0 &&
      selectedWeather !== ""
    );
  };

  const closeModal = () => {
    setActiveModal("");
    setFormData({
      name: "",
      imageURL: "",
    });
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
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
        onClose={closeModal}
        isDisabled={!isFormValid()}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            minLength={2}
            maxLength={40}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="imageURL" className="modal__label">
          Image{" "}
          <input
            type="URL"
            className="modal__input"
            id="imageURL"
            name="imageURL"
            placeholder="Image URL"
            value={formData.imageURL}
            onChange={handleInputChange}
            required
          />
        </label>

        <legend className="modal__legend">Select the weather type</legend>

        <fieldset className="modal__radio-btns">
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              id="hot"
              type="radio"
              name="weather"
              value="hot"
              checked={selectedWeather === "hot"}
              onChange={() => handleRadioClick("hot")}
              required
              className="modal__radio-input"
            />
            Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="warm"
              type="radio"
              name="weather"
              value="warm"
              checked={selectedWeather === "warm"}
              onChange={() => handleRadioClick("warm")}
              required
              className="modal__radio-input"
            />
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="cold"
              type="radio"
              name="weather"
              value="cold"
              checked={selectedWeather === "cold"}
              onChange={() => handleRadioClick("cold")}
              required
              className="modal__radio-input"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeModal}
      />
      <Footer />
    </div>
  );
}

export default App;
