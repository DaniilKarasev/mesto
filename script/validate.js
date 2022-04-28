const showInputError = (formElement, inputElement, errorMessage,enableValidationSelector) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(enableValidationSelector.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(enableValidationSelector.errorClass);
};

const hideInputError = (formElement, inputElement, enableValidationSelector) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(enableValidationSelector.inputErrorClass);
    errorElement.classList.remove(enableValidationSelector.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, enableValidationSelector) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, enableValidationSelector);
    } else {
        hideInputError(formElement, inputElement, enableValidationSelector);
    }
};

const setEventListeners = (formElement, enableValidationSelector) => {
    const inputList = Array.from(formElement.querySelectorAll(enableValidationSelector.inputSelector));
    const buttonElement = formElement.querySelector(enableValidationSelector.submitButtonSelector);
    
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, enableValidationSelector);
            toggleButtonState(inputList, buttonElement, enableValidationSelector, hasInvalidInput (inputList));
        });
    });
};

function hasInvalidInput (inputList){
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function toggleButtonState (inputList, buttonElement, enableValidationSelector){
    if(hasInvalidInput(inputList)){
        buttonElement.classList.add(enableValidationSelector.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(enableValidationSelector.inactiveButtonClass);
        buttonElement.disabled = false;
    };
};

function enableValidation(enableValidationSelector) {
    const formList = Array.from(document.querySelectorAll(enableValidationSelector.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener("submit", function (evt) {
            evt.preventDefault();
        });

        const fieldsetList = Array.from(formElement.querySelectorAll(enableValidationSelector.formFieldSet));
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet, enableValidationSelector);
        });
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactive',
    inputErrorClass: 'popup__input_notvalid',
    errorClass: 'popup__input-error_active',
    formFieldSet: '.popup__set'
});