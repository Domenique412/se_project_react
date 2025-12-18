import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose, onRegister }) => {
  const defaultValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    avatar: "",
  };
  const { values, handleChange, setValues } = useForm(defaultValues);

  useEffect(() => {
    if (isOpen) {
      setValues(defaultValues);
    }
  }, [isOpen]);

  const isFormValid = () => {
    const nameOk =
      values.name.trim().length >= 2 && values.name.trim().length <= 30;
    const avatarOk = values.avatar.trim().length > 0;
    const emailOk = values.email.trim().length > 0;
    const passwordOk = values.password.trim().length >= 6;
    const confirmOk = values.confirmPassword === values.password;

    return nameOk && avatarOk && emailOk && passwordOk && confirmOk;
  };

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
      isDisabled={!isFormValid()}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          minLength={2}
          maxLength={30}
          required
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar URL
        <input
          type="url"
          className="modal__input"
          id="avatar"
          name="avatar"
          placeholder="Avatar URL"
          value={values.avatar}
          onChange={handleChange}
          required
        />
      </label>
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
