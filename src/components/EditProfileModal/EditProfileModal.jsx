import { useEffect, useContext } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, isValid, resetForm, setValues, setIsValid } =
    useFormAndValidation();

  useEffect(() => {
    if (isOpen && currentUser) {
      const initialValues = {
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      };
      setValues(initialValues);
      setIsValid(Boolean(initialValues.name && initialValues.avatar));
    } else if (!isOpen) {
      resetForm();
    }
  }, [currentUser, isOpen, resetForm, setIsValid, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({ name: values.name, avatar: values.avatar });
  }

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      onClose={onClose}
      isOpen={isOpen}
      isDisabled={!isValid}
      onSubmit={handleSubmit}
      contentClassName="edit-modal"
    >
      <label className="modal__label">
        Name *
        <input
          type="text"
          className="modal__input"
          id="edit-name"
          name="name"
          placeholder="Name"
          value={values.name || ""}
          onChange={handleChange}
          minLength={2}
          maxLength={30}
          required
        />
      </label>
      <label className="modal__label">
        Avatar URL *
        <input
          type="url"
          className="modal__input"
          id="edit-avatar"
          name="avatar"
          placeholder="Avatar URL"
          value={values.avatar || ""}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
