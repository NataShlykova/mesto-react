import React from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup(props) {
  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('')

  function handleNameChange(e) {
    setName(e.target.value)
  }
  
  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onAddPlace({
      name: name,
      link: link,
    })
  }

  return (
    <PopupWithForm
      name='card-add'
      title='Новое место'
      buttonText='Создать'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
        onChange={handleNameChange}
      />
      <span className="popup__error-input strigNamePhoto-error"></span>
      <input
        name="link"
        type="url"
        className="popup__input popup__input_string_link"
        id="placeUrl-input"
        placeholder="Ссылка на картинку"
        required
        onChange={handleLinkChange}
      />
      <span className="popup__error-input stringLinkPhoto-error"></span>        
    </PopupWithForm>
  )
}

export default AddPlacePopup