import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose, onLogin, onSwitchToRegister }) => {
  const defaultValues = { email: "", password: "" };
  const { values, handleChange, setValues } = useForm(defaultValues);

  useEffect(() => {
    if (isOpen) {
      setValues(defaultValues);
    }
  }, [isOpen]);

  const isFormValid = () => {
    return values.email.trim().length > 4 && values.password.trim().length >= 6;
  };

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
      isDisabled={!isFormValid()}
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
      <label htmlFor="email" className="modal__label">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
