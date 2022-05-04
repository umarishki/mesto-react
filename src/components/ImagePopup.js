import closeIcon from '../images/popup__close.svg';

function ImagePopup(props) {
    return (
        <div className={"popup popup_type_card-preview" + (props.card ? " popup_opened" : "")}>
            <div className="popup__preview-container">
                <img className="popup__img-preview" src={props.card ? props.card.link : "#"} alt="Фото-превью" />
                <button onClick={props.onClose} className="popup__close popup__close_type_card-preview" type="button">
                    <img className="popup__image-close" src={closeIcon} alt="Иконка: close" />
                </button>
                <h2 className="popup__preview-title">{props.card.name}</h2>
            </div>
        </div>
    );
}

export default ImagePopup;