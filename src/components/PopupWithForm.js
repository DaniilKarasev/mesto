import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({formAction}, popupSelector) {
        super(popupSelector);
        this._popupInputs = this._popup.querySelectorAll('.popup__input');
        this._popupForm = this._popup.querySelector('.popup__form');
        this._formAction = formAction;
    };

    close() {
        super.close();

        this._popupForm.reset();
    };

    _getInputValues() {
        this._inputValue = {};
        this._popupInputs.forEach(input => {
                this._inputValue[input.name] = input.value;
            }
        );

        return this._inputValue;
    };

    _handleFormSubmit(evt) {
        evt.preventDefault();

        this._formAction(this._getInputValues());

        this.close();
    };

    setEventListeners() {
        super.setEventListeners();

        this._popupSubmit = this._handleFormSubmit.bind(this);
        this._popupForm.addEventListener('submit', this._popupSubmit);
    };
};