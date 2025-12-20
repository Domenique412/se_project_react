import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onClose, onAddItem }) => {
  const { values, handleChange, isValid, resetForm } = useFormAndValidation();

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
  }

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      onClose={onClose}
      isOpen={isOpen}
      isDisabled={!isValid}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="add-name"
          name="name"
          placeholder="Name"
          value={values.name || ""}
          minLength={2}
          maxLength={40}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Image{" "}
        <input
          type="URL"
          className="modal__input"
          id="add-image"
          name="imageURL"
          placeholder="Image URL"
          value={values.imageURL || ""}
          onChange={handleChange}
          required
        />
      </label>

      <legend className="modal__legend">Select the weather type</legend>

      <fieldset className="modal__radio-btns">
        <label className="modal__label modal__label_type_radio">
          <input
            id="add-hot"
            type="radio"
            name="weatherType"
            value="hot"
            checked={values.weatherType === "hot"}
            onChange={handleChange}
            required
            className="modal__radio-input"
          />
          Hot
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            id="add-warm"
            type="radio"
            name="weatherType"
            value="warm"
            onChange={handleChange}
            checked={values.weatherType === "warm"}
            required
            className="modal__radio-input"
          />
          Warm
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            id="add-cold"
            type="radio"
            name="weatherType"
            value="cold"
            onChange={handleChange}
            checked={values.weatherType === "cold"}
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
