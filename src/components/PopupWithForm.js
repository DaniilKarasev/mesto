import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleSubmitForm}) {
        super(popupSelector);
        this.handleSubmitForm = handleSubmitForm;
        this._popupInputs = this._popup.querySelectorAll('.popup__input');
        this._popupForm = this._popup.querySelector('.popup__form');
        this._popupBtn = this._popupForm.querySelector('.popup__save');
        this._popupBtnTextContent = this._popupBtn.textContent;
    };

    close() {
        super.close();
        this._popupForm.reset();
    };

    _getInputValues() {
        this._inputValues = {};
        this._popupInputs.forEach(input => {
                this._inputValues[input.name] = input.value;
            }
        );

        return this._inputValues;
    };


    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.handleSubmitForm(this._getInputValues());
        });
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._popupBtn.textContent = 'Сохранение...'
        } else {
            this._popupBtn.textContent = this._popupBtnTextContent
        }
    }
};