function ImagePopup(props) {

  return (
    <div className={`popup popup_image ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__image-container popup__click-overley">
        <button
          type="button"
          className="opup__close-button popup__close-button-zoom"
          onClick={props.onClose}
        >
        </button>
        <figure className="popup__image-zoom">

          <img
            src={props.card ? props.card.link : '#'}
            className="popup__img"
            alt={props.card ? props.card.name : ''}
          />
          <figcaption
            className="popup__paragraph">
            {props.card ? props.card.name : ''}
          </figcaption>
        </figure>

      </div>
    </div>
  )
}

export default ImagePopup