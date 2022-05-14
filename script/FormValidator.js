//* класс валидации.
class FormValidator {
    constructor(enableValidation, form) {
        this._form = form;
        this._inputSelector = enableValidation.inputSelector;
        this._submitButtonSelector = enableValidation.submitButtonSelector;
        this._inputErrorTextSelector = enableValidation.inputErrorTextSelector;
        this._inactiveButtonClass = enableValidation.inactiveButtonClass;
        this._inputErrorClass = enableValidation.inputErrorClass;
        this._errorClass = enableValidation.errorClass;
        this._formInputsSelector = this._form.querySelectorAll(this._inputSelector);
    };

    //* метод отображения сообщения об ошибке.
    _showInputError(input) {
        const errorClass = this._form.querySelector(`.${input.id}-error`);
        errorClass.textContent = input.validationMessage;
        input.classList.add(this._inputErrorClass);
        errorClass.classList.add(this._errorClass);
    };


    //* метод сокрытия сообщения об ошибке у полей.
    _hideInputError(input) {
        const errorClass = this._form.querySelector(`.${input.id}-error`);
        input.classList.remove(this._inputErrorClass);
        errorClass.classList.remove(this._errorClass);
        errorClass.textContent = '';
    };

    //* метод проверки валидности.
    _checkInputValidity(input) {
        (!input.validity.valid) ? this._showInputError(input): this._hideInputError(input);
    };

    //* метод переключения состояния кнопки отправки данных.
    _toggleButtonState() {
        this._submitButton.disabled = !this._form.checkValidity();
        this._submitButton.classList.toggle(this._inactiveButtonClass, !this._form.checkValidity());
    };

    //* вызов метода сокрытия ошибки и переключения статуса кнопки.
    hideFormErrors() {
        this._formInputsSelector.forEach((input) => {
            this._hideInputError(input);
        });

        this._toggleButtonState();
    };

    //* установка слушателей.
    _setEventListeners() {
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
        this._form.addEventListener('input', (evt) => {
            this._checkInputValidity(evt.target);
            this._toggleButtonState();
        });
    };

    //* метод включения валидации.
    enableValidation() {
        this._setEventListeners();
        this._toggleButtonState();
    };
};

//! Блок экспорта:
export {FormValidator};