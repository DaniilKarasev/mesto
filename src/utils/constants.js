export const photoCardsContainerSelector = document.querySelector(".photo-cards");
export const profileNameSelector = document.querySelector(".profile__name");
export const profileJobSelector = document.querySelector(".profile__job");
export const popupProfileEditBtn = document.querySelector(".profile__edit-btn");
export const popupProfileEditForm = document.querySelector(".popup__form[name=popUpEditForm]");
export const popupProfileEditNameInput = popupProfileEditForm.querySelector(".popup__input_value_name");
export const popupProfileEditJobInput = popupProfileEditForm.querySelector(".popup__input_value_job");
export const profileAvatarSelector = document.querySelector(".profile__avatar");
export const popupAvatarEditBtn = document.querySelector('.profile__avatar-edit-btn');
export const popupAvatarEditForm = document.querySelector(".popup__form[name=popUpAvatarEditForm]");
export const popupAddCardBtn = document.querySelector(".profile__add-btn");
export const popupAddCardForm = document.querySelector(".popup__form[name=popUpCardEditForm]");
export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactive',
    inputErrorClass: 'popup__input_notvalid',
    errorClass: 'popup__input-error_active',
};
