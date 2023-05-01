import React from 'react'

function Card(props) {
    function handleCardClick() {
        props.onCardClick(props.card)
    }

    return (
        <article className="element">
            <button type="button"
                className="element__button-delete"
                aria-label="Удалить изображение"></button>
            <img
                src={props.card.link}
                img className="element__image"
                alt={props.card.name}
                onClick={handleCardClick}
            />
            <div className="element__info">
                <h2 className="element__text">{props.card.name}</h2>
                <div className="element__like-cont">
                    <button type="button" className="element__button"></button>
                    <span className="element__like-cont">{props.card.likes.length}</span>
                </div>
            </div>

        </article>
    )
}

export default Card
