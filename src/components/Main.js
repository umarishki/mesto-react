import React from 'react';
import editPencil from '../images/profile__edit-pencil.svg';
import addIcon from '../images/profile__add-icon.svg';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setInitialCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getProfileInfo(), api.getInitialCards()])
            .then(([userData, cards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);

                const initialCards = [];
                cards.forEach((cardInfo) => {
                    initialCards.push({
                        name: cardInfo.name,
                        link: cardInfo.link,
                        likesOwners: cardInfo.likes,
                        ID: cardInfo._id,
                        ownerID: cardInfo.owner._id
                    });
                })
                setInitialCards(initialCards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [userName, userDescription, userAvatar]);

    return (
        <main className="main">
            <section className="profile">
                <button className="profile__edit-image" type="button" onClick={props.onEditAvatar}>
                    <img className="profile__image" src={userAvatar} alt="Фото профиля" />
                </button>
                <div className="profile-info">
                    <h1 className="profile-info__title">{userName}</h1>
                    <button className="profile-info__edit-btn" type="button" onClick={props.onEditProfile}>
                        <img className="profile-info__edit-icon" src={editPencil} alt="Иконка: edit" />
                    </button>
                    <p className="profile-info__subtitle">{userDescription}</p>
                </div>
                <button className="profile__add-btn" type="button" onClick={props.onAddPlace}>
                    <img className="profile__add-icon" src={addIcon} alt="Иконка: add" />
                </button>
            </section>

            <section className="cards">
                <ul className="cards-container">
                    {cards.map((card, i) => (
                        <Card onCardClick={props.onCardClick} card={card} key={card.ID} />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;