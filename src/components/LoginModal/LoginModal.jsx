import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose, onLogin, onSwitchToRegister }) => {
  const { values, handleChange, isValid, resetForm } = useFormAndValidation();

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
  }
  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      onClose={onClose}
      isOpen={isOpen}
      isDisabled={!isValid}
      onSubmit={handleSubmit}
      contentClassName="login-modal"
      footer={
        <button
          type="button"
          className="modal__switch"
          onClick={onSwitchToRegister}
        >
          or Sign Up
        </button>
      }
    >
      <label className="modal__label">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="login-email"
          name="email"
          placeholder="Email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="login-password"
          name="password"
          placeholder="Password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
