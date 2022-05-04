function Card({card, onCardClick}) {
    const handleClick = () => {
        onCardClick(card);
    }

    return (
        <li className="cards__item">
            <img className="cards__image" src={card.link} alt={`Фото: ${card.name}`} onClick={handleClick} />
            <button className="cards__delete-icon" type="button"></button>
            <div className="cards__footer">
                <h2 className="cards__title">{card.name}</h2>
                <div>
                    <button className="cards__like-icon" type="button"></button>
                    <p className="cards__likes-number">{card.likesOwners.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;