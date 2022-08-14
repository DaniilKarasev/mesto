export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },

    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },

    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },

    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },

    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactive',
    inputErrorClass: 'popup__input_notvalid',
    errorClass: 'popup__input-error_active',
};

export const profileNameSelector = '.profile__name';
export const profileJobSelector = '.profile__job';
export const photoCardsContainerSelector = '.photo-cards';
export const popupProfileEditSelector = ".popup_type_profile-edit";
export const popupProfileEditBtn = document.querySelector(".profile__edit-btn");
export const popupProfileEditForm = document.querySelector(".popup__form[name=popUpEditForm]");
export const popupProfileEditNameInput = popupProfileEditForm.querySelector(".popup__input_value_name");
export const popupProfileEditJobInput = popupProfileEditForm.querySelector(".popup__input_value_job");
export const popupAddCardSelector = '.popup_type_add-cards';
export const popupAddCardBtn = document.querySelector(".profile__add-btn");
export const popupAddCardForm = document.querySelector(".popup__form[name=popUpCardEditForm]");
export const popupAddCardNameInput = popupAddCardForm.querySelector(".popup__input_value_add-name");
export const popupAddCardLinkInput = popupAddCardForm.querySelector(".popup__input_value_link");
export const templateCardsSelector = "#templateCards";
export const popUpCardsImgSelector = '.popup_type_cards-img';

