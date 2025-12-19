import "./DeleteConfirmModal.css";
import closeModalIcon from "../../images/gray_close_btn.svg";

function DeleteConfirmModal({ isOpen, onClose, onConfirm, itemName }) {
  return (
    <div className={`modal ${isOpen ? "modal__open" : ""}`}>
      <div className="modal__content modal__content_type_confirm delete-confirm-modal">
        <button onClick={onClose} className="modal__close" type="button">
          <img src={closeModalIcon} alt="Close" className="modal__close-icon" />
        </button>
        <h2 className="modal__title">
          Are you sure you want to delete {itemName}?
          <br /> This action is irreversible.
        </h2>
        <div className="modal__actions">
          <button
            type="button"
            className="modal__submit modal__submit_danger"
            onClick={onConfirm}
          >
            Yes, delete item
          </button>
          <button
            type="button"
            className="modal__cancel-action"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
