import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, openEditProfilePopup] = React.useState(false);
    const [isAddPlacePopupOpen, openAddPlacePopup] = React.useState(false);
    const [isEditAvatarPopupOpen, openEditAvatarPopup] = React.useState(false);
    const [selectedCard, selectCard] = React.useState('');

    const handleEditAvatarClick = () => {
        openEditAvatarPopup(true);
    }

    const handleEditProfileClick = () => {
        openEditProfilePopup(true);
    }

    const handleAddPlaceClick = () => {
        openAddPlacePopup(true);
    }

    const closeAllPopups = () => {
        openEditAvatarPopup(false);
        openEditProfilePopup(false);
        openAddPlacePopup(false);
        selectCard('');
    }

    const handleCardClick = (card) => {
        selectCard(card);
    }

    return (
        <>
            <Header />
            <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
            <Footer />

            <PopupWithForm isOpened={isEditProfilePopupOpen} onClose={closeAllPopups} name="edit-profile" title="Редактировать профиль">
                <input id="profile-name-input" className="popup__input popup__input_field_name" type="text" name="name"
                    placeholder="Имя" minLength="2" maxLength="40" required />
                <span className="profile-name-input-error popup__error"></span>
                <input id="profile-occupation-input" className="popup__input popup__input_field_occupation" type="text"
                    name="occupation" placeholder="Род занятий" minLength="2" maxLength="200" required />
                <span className="profile-occupation-input-error popup__error"></span>
            </PopupWithForm>
            <PopupWithForm isOpened={isAddPlacePopupOpen} onClose={closeAllPopups} name="add-card" title="Новое место">
                <input id="place-name-input" className="popup__input popup__input_field_place-name" type="text"
                    name="place-name" placeholder="Название" minLength="2" maxLength="30" required />
                <span className="place-name-input-error popup__error"></span>
                <input id="place-link-input" className="popup__input popup__input_field_link" type="url" name="link"
                    placeholder="Ссылка на картинку" required />
                <span className="place-link-input-error popup__error"></span>
            </PopupWithForm>
            <PopupWithForm isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} name="edit-avatar" title="Обновить аватар">
                <input id="avatar-link-input" className="popup__input popup__input_field_link" type="url" name="link"
                    placeholder="Ссылка на аватар" required />
                <span className="avatar-link-input-error popup__error"></span>
            </PopupWithForm>
            <PopupWithForm name="confirm-deletion" title="Вы уверены?" />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </>
    );
}

export default App;