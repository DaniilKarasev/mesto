const showInputError = (formElement, inputElement, errorMessage,enableValidSelector) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(enableValidSelector.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(enableValidSelector.errorClass);
};

const hideInputError = (formElement, inputElement, enableValidSelector) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(enableValidSelector.inputErrorClass);
    errorElement.classList.remove(enableValidSelector.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, enableValidSelector) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, enableValidSelector);
    } else {
        hideInputError(formElement, inputElement, enableValidSelector);
    }
};

const setEventListeners = (formElement, enableValidSelector) => {
    const inputList = Array.from(formElement.querySelectorAll(enableValidSelector.inputSelector));
    const buttonElement = formElement.querySelector(enableValidSelector.submitButtonSelector);
    
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, enableValidSelector);
            toggleButtonState(inputList, buttonElement, enableValidSelector, hasInvalidInput (inputList));
        });
    });
};

function hasInvalidInput (inputList){
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function toggleButtonState (inputList, buttonElement, enableValidSelector){
    if(hasInvalidInput(inputList)){
        buttonElement.classList.add(enableValidSelector.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(enableValidSelector.inactiveButtonClass);
        buttonElement.disabled = false;
    };
};

function enableValidation(enableValidSelector) {
    const formList = Array.from(document.querySelectorAll(enableValidSelector.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener("submit", function (evt) {
            evt.preventDefault();
        });

        const fieldsetList = Array.from(formElement.querySelectorAll(enableValidSelector.formFieldSet));
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet, enableValidSelector);
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