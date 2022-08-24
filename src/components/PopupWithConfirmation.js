import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor({popupSelector}) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');

        this._popupBtn = this._popupForm.querySelector('.popup__save');
        this._popupBtnTextContent = this._popupBtn.textContent;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', evt => {
            evt.preventDefault();
            this._handleSubmitCallback();
        })
    }

    setSubmitAction(action) {
        this._handleSubmitCallback = action;
    }

    renderLoadingWhileDeleting(isLoading) {
        if (isLoading) {
            this._popupBtn.textContent = 'Удаление...'
        } else {
            this._popupBtn.textContent = this._popupBtnTextContent
        }
    }
}