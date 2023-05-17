function PopupWithForm(props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container popup__click-overley">
                <form className="popup__form popup__form_size54" 
                 name={props.name} 
                 noValidate
                 onSubmit={props.onSubmit}
                 >
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button
                        type="submit"
                        className="popup__submit"
                    >
                        {props.buttonText}
                    </button>
                </form>
                <button
                    type="button"
                    className="popup__close-button"
                    onClick={props.onClose}
                >
                </button>
            </div>
        </div>
    )
}

export default PopupWithForm