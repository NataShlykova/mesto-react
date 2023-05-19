import React from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup(props) {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const currentUser = React.useContext(CurrentUserContext)
  const isOpen = props.isOpen;

  React.useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onUpdateUser({
      name: name,
      about: description,
    })
  }

  return (
    <PopupWithForm
      name='profile-edit'
      title='Редактировать профиль'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
        value={name || ''}
        onChange={handleNameChange}
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
        value={description || ''}
        onChange={handleDescriptionChange}
      />
      <span className="popup__error-input inputStringWork-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup