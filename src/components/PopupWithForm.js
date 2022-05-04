import closeIcon from '../images/popup__close.svg';

function PopupWithForm(props) {
    let styleOpenedPopup = `popup popup_type_${props.name}`;
    return (
        <div className={props.isOpened ? (styleOpenedPopup + ' popup_opened') : styleOpenedPopup}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={props.onClose}>
                    <img className="popup__image-close" src={closeIcon} alt="Иконка: close" />
                </button>
                <form className={`popup__form popup__form_type_${props.name}`} name={props.name} noValidate>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button className="popup__button" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;