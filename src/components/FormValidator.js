// класс валидации.
export default class FormValidator {
    constructor(validationConfig, form) {
        this._form = form;
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inputErrorTextSelector = validationConfig.inputErrorTextSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
        this._allInputsSelector = this._form.querySelectorAll(this._inputSelector);
    };

    _showInputError(input) {
        const errorClass = this._form.querySelector(`.${input.id}-error`);

        errorClass.textContent = input.validationMessage;
        input.classList.add(this._inputErrorClass);
        errorClass.classList.add(this._errorClass);
    };


    _hideInputError(input) {
        const errorClass = this._form.querySelector(`.${input.id}-error`);
        
        input.classList.remove(this._inputErrorClass);
        errorClass.classList.remove(this._errorClass);
        errorClass.textContent = '';
    };

    _checkInputValidity(input) {
        (!input.validity.valid) ? this._showInputError(input): this._hideInputError(input);
    };

    _toggleButtonState() {
        this._submitButton.disabled = !this._form.checkValidity();
        this._submitButton.classList.toggle(this._inactiveButtonClass, !this._form.checkValidity());
    };

    hideFormErrors() {
        this._allInputsSelector.forEach((input) => {
                this._hideInputError(input);
            }
        );

        this._toggleButtonState();
    };

    _setEventListeners() {
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
        this._form.addEventListener('input', (evt) => {
                this._checkInputValidity(evt.target);
                this._toggleButtonState();
            }
        );
    };

    enableValidation() {
        this._setEventListeners();
        this._toggleButtonState();
    };
};