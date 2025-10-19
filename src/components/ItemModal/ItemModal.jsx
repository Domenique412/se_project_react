import "./ItemModal.css";
import closeModalIcon from "../../images/white_close_btn.svg";

function ItemModal({ activeModal, onClose, card, handleCardDelete }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal__open" : ""}`}>
      <div className="modal__preview-content modal__content_type_image">
        <button onClick={onClose} className="modal__close" type="button">
          <img src={closeModalIcon} alt="Close" className="modal__close-icon" />
        </button>
        <img src={card.link} alt={card.name} className="modal__preview-image" />
        <div className="modal__footer">
          <div className="modal__footer-top">
            <h2 className="modal__caption">{card.name}</h2>
            <button
              onClick={handleCardDelete}
              type="submit"
              className="modal__delete-btn"
            >
              Delete Item
            </button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
