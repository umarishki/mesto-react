import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ buttonTitle, onAddPlace, isOpen, onClose }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function hundleSetName(e) {
        setName(e.target.value);
    }

    function hundleSetLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: name,
            link: link,
        });
        clearPopup();
    }

    function clearPopup() {
        setName('');
        setLink('');
    }

    return (
        <PopupWithForm
            name="add-card"
            title="Новое место"
            buttonTitle={buttonTitle}
            onSubmit={handleSubmit}
            isOpened={isOpen}
            onClose={onClose}
        >
            <input id="place-name-input" className="popup__input popup__input_field_place-name"
                value={name || ""} onChange={hundleSetName} type="text" name="place-name"
                placeholder="Название" minLength="2" maxLength="30" required />
            <span className="place-name-input-error popup__error"></span>
            
            <input id="place-link-input" className="popup__input popup__input_field_link"
                value={link || ""} onChange={hundleSetLink} type="url" name="link"
                placeholder="Ссылка на картинку" required />
            <span className="place-link-input-error popup__error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;