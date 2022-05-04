function Card(props) {
    const handleClick = () => {
        props.onCardClick(props.card);
    }

    return (
        <li className="cards__item">
            <img className="cards__image" src={props.card.link} alt={`Фото: ${props.card.name}`} onClick={handleClick} />
            <button className="cards__delete-icon" type="button"></button>
            <div className="cards__footer">
                <h2 className="cards__title">{props.card.name}</h2>
                <div>
                    <button className="cards__like-icon" type="button"></button>
                    <p className="cards__likes-number">{props.card.likesOwners.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;