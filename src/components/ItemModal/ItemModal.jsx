import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./ItemModal.css";
import closeModalIcon from "../../images/gray_close_btn.svg";

function ItemModal({
  activeModal,
  onClose,
  card,
  handleCardDelete,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser?._id;
  const itemDeleteButtonClassName = `modal__delete-btn ${isOwn ? "" : "modal__delete-btn_hidden"}`;

  return (
    <div className={`modal ${activeModal === "preview" ? "modal__open" : ""}`}>
      <div className="modal__preview-content modal__content_type_image">
        <button onClick={onClose} className="modal__close" type="button">
          <img src={closeModalIcon} alt="Close" className="modal__close-icon" />
        </button>
        <img
          src={card.imageUrl}
          alt={card.name}
          className="modal__preview-image"
        />
        <div className="modal__footer">
          <div className="modal__footer-top">
            <h2 className="modal__caption">{card.name}</h2>
            {isLoggedIn && (
              <button
                onClick={handleCardDelete}
                type="button"
                className={itemDeleteButtonClassName}
              >
                Delete Item
              </button>
            )}
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
