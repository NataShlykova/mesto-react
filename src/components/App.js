import React from 'react'
import Header from './Header.js'
import '../index.css';
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(null)
  }

  function onCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={onCardClick}
      />
      <Footer />
      <PopupWithForm
        name='profile-edit'
        title='Редактировать профиль'
        buttonText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="userName"
          type="text"
          className="popup__input popup__input_string_name"
          id="userName-input"
          placeholder="Имя"
          minLength="2"
          maxLength="40" pattern="^[a-zA-Zа-яА-я-\s]+$"
          required
        />
        <span className="popup__error-input  inputStringName-error"></span>
        <input
          name="userAbout"
          type="text"
          className="popup__input popup__input_string_work"
          id="userAbout-input"
          placeholder="Профессия"
          minLength="2"
          pattern="^[a-zA-Zа-яА-я-\s]+$"
          maxLength="200"
          required
        />
        <span className="popup__error-input inputStringWork-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name='card-add'
        title='Новое место'
        buttonText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="name"
          type="text"
          className="popup__input popup__input_string_name-photo"
          id="placeName-input"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          pattern="^[a-zA-Zа-яА-я-\s]+$"
          required
        />
        <span className="popup__error-input strigNamePhoto-error"></span>
        <input
          name="link"
          type="url"
          className="popup__input popup__input_string_link"
          id="placeUrl-input"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error-input stringLinkPhoto-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name='avatar-edit'
        title='Обновить аватар'
        buttonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="userAvatar"
          type="url"
          className="popup__input popup__input_string_work"
          id="userAvatar-input"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error-input userAvatar-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name='confirm-delete'
        title='Вы уверены?'
        buttonText='Да'
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;