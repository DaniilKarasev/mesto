import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({formAction}, popup) {
        super(popup);
        this._popupInputs = this._popup.querySelectorAll('.popup__input');
        this._popupForm = this._popup.querySelector('.popup__form');
        this._formAction = formAction;
    };

    close() {
        super.close();

        this._popupForm.reset();
    };

    _getInputValues() {
        this._InputValue = {};
        this._popupInputs.forEach(input => {
                this._InputValue[input.name] = input.value;
            }
        );

        return this._InputValue;
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

    removeEventListeners() {
        super.removeEventListeners();
        
        this._popupForm.removeEventListener('submit', this._popupSubmit);
    };
};