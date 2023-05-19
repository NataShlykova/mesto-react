import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'


function Card(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const isOwn = props.card.owner._id === currentUser._id
    const isLiked = props.card.likes.some((item) => item._id === currentUser._id)
    const cardDeleteButtonClassName = (
      `element__button-delete ${isOwn ? '' : 'element__button-delete_state_hidden'}`
    )
    const cardLikeButtonClassName  = (
      `element__button ${isLiked ? 'element__button_active' : ''}`
    )
  
    function handleCardClick() {
      props.onCardClick(props.card)
    }
  
    function handleLikeClick() {
      props.onCardLike(props.card)
    }
  
    function handleDeleteClick() {
      props.onCardDelete(props.card)
    }

    return (
        <article className="element">
            <button type="button"
                className={cardDeleteButtonClassName}
                onClick={handleDeleteClick}
                aria-label="Удалить изображение"></button>
            <img
                src={props.card.link}
                className="element__image"
                alt={props.card.name}
                onClick={handleCardClick}
            />
            <div className="element__info">
                <h2 className="element__text">{props.card.name}</h2>
                <div className="element__like-cont">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <span className="element__like-count">{props.card.likes.length}</span>
                </div>
            </div>

        </article>
    )
}

export default Card
