import "./ModalWithForm.css";
import closeModalIcon from "../../images/gray_close_btn.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  onClose,
  isDisabled,
  isOpen,
  onSubmit,
  contentClassName,
  footer,
}) {
  return (
    <div className={`modal ${isOpen ? "modal__open" : ""}`}>
      <div className={`modal__content ${contentClassName || ""}`}>
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} className="modal__close">
          <img src={closeModalIcon} alt="Close" className="modal__close-icon" />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__actions">
            <button
              className="modal__submit"
              type="submit"
              disabled={isDisabled}
            >
              {buttonText}
            </button>
            {footer}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
