import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose, onRegister }) => {
  const defaultValues = { email: "", password: "", confirmPassword: "" };
  const { values, handleChange, setValues } = useForm(defaultValues);

  const isFormValid = () => {
    const emailOk = values.email.trim().length > 0;
    const passwordOk = values.password.trim().length >= 6;
    const confirmOk = values.confirmPassword === values.password;
    return emailOk && passwordOk && confirmOk;
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({ email: values.email, password: values.password });
  }

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      onClose={onClose}
      isOpen={isOpen}
      isDisabled={!isFormValid()}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email{" "}
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
        Password{" "}
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
      <label htmlFor="confirmPassword" className="modal__label">
        Confirm password{" "}
        <input
          type="password"
          className="modal__input"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
          value={values.confirmPassword}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
