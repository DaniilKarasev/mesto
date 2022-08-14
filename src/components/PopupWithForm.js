import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({handleSubmit}, popupSelector) {
        super(popupSelector);
        this._popupInputs = this._popup.querySelectorAll('.popup__input');
        this._popupForm = this._popup.querySelector('.popup__form');
        this._handleSubmit = handleSubmit;
        this._handlePopupSubmit = this._handleFormSubmit.bind(this);
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

    _handleFormSubmit(evt) {
        evt.preventDefault();

        this._handleSubmit(this._getInputValues());
        this.close();
    };

    setEventListeners() {
        super.setEventListeners();

        this._popupForm.addEventListener('submit', this._handlePopupSubmit);
    };
};