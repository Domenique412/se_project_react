import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose, onRegister, onSwitchToLogin }) => {
  const { values, handleChange, isValid, resetForm } = useFormAndValidation();

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({
      email: values.email,
      password: values.password,
      name: values.name,
      avatar: values.avatar,
    });
  }

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      onClose={onClose}
      isOpen={isOpen}
      isDisabled={!isValid}
      onSubmit={handleSubmit}
      contentClassName="register-modal"
      footer={
        <button
          type="button"
          className="modal__switch"
          onClick={onSwitchToLogin}
        >
          or Log In
        </button>
      }
    >
      <label className="modal__label">
        Name*
        <input
          type="text"
          className="modal__input"
          id="register-name"
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
        Avatar URL*
        <input
          type="url"
          className="modal__input"
          id="register-avatar"
          name="avatar"
          placeholder="Avatar URL"
          value={values.avatar || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Email*{" "}
        <input
          type="email"
          className="modal__input"
          id="register-email"
          name="email"
          placeholder="Email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Password*{" "}
        <input
          type="password"
          className="modal__input"
          id="register-password"
          name="password"
          placeholder="Password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Confirm password*{" "}
        <input
          type="password"
          className="modal__input"
          id="register-confirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
          value={values.confirmPassword || ""}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
