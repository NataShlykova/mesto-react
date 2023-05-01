import React from 'react'
import { api } from '../utils/Api'
import Card from './Card.js'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .catch((err) => console.log(err))
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <button type="button"
            className="profile__avatar-edit-button"
            onClick={onEditAvatar}>
            <img
              src={userAvatar}
              alt="Изображение профиля"
              className="profile__avatar-image" />
          </button>

          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title">{userName}</h1>
              <button
                type="button"
                className="profile__edit-button"
                aria-label="Редактировать профиль"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Добавить изображение"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements"> {
        cards.map((card) => <Card key={card._id}
          card={card}
          onCardClick={onCardClick}
        />)
      }
      </section>
    </main>
  )
}

export default Main

