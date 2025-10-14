import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({
  isOpen,
  handleSubmit,
  onClose,
  isDisabled,
  //   handleRadioClick,
}) => {
  const defaultValues = { name: "", imageURL: "", weatherType: "" };
  const { values, handleChange } = useForm(defaultValues);

  function handleSubmit(evt) {
    console.log(values);
  }

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      onClose={onClose}
      isOpen={isOpen}
      isDisabled={isDisabled}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          value={values.name}
          minLength={2}
          maxLength={40}
          onChange={handleChange}
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
          value={values.imageURL}
          onChange={handleChange}
          required
        />
      </label>

      <legend className="modal__legend">Select the weather type</legend>

      <fieldset className="modal__radio-btns">
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            name="weatherType"
            value="hot"
            // checked={selectedWeather === "hot"}
            onChange={handleChange}
            required
            className="modal__radio-input"
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            name="weatherType"
            value="warm"
            // checked={selectedWeather === "warm"}
            onChange={handleChange}
            required
            className="modal__radio-input"
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            name="weatherType"
            value="cold"
            // checked={selectedWeather === "cold"}
            onChange={handleChange}
            required
            className="modal__radio-input"
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
