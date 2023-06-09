import React from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {
    const avatarRef = React.useRef('');
    
    function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    }
    
    React.useEffect(() => {
    if (props.isOpen) {
    avatarRef.current.value = '';
    }
    }, [props.isOpen]);

  return (
    <PopupWithForm
      name='avatar-edit'
      title='Обновить аватар'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="userAvatar"
        type="url"
        className="popup__input popup__input_string_work"
        id="userAvatar-input"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
      <span className="popup__error-input userAvatar-input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup