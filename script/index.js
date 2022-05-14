//! Блок импорта:
import {Card} from './Card.js'; //* импортируем класс карточек.
import {FormValidator} from './FormValidator.js'; //* импортируем класс валидации.

//! Блок переменных:

//* переменная с селекторами валидации.
const enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactive',
    inputErrorClass: 'popup__input_notvalid',
    errorClass: 'popup__input-error_active',
};

const profileName = document.querySelector('.profile__name'); //* находим имя профиля.
const profileJob = document.querySelector('.profile__job'); //* находим доп.инфу о профиле(работа, ect).
const photoCardsContainer = document.querySelector(".photo-cards"); //* находим секцию карточек.

//! Переменные относящиеся к попапу профиля:
const popupProfileEdit = document.querySelector('.popup_type_profile-edit'); //* находим попап профиля.
const popupProfileEditBtn = document.querySelector(".profile__edit-btn"); //* находим кнопку редактирования профиля.
const popupProfileEditForm = popupProfileEdit.querySelector(".popup__form[name=popUpEditForm]"); //* находим форму в попапе профиля.
const popupProfileEditNameInput = popupProfileEditForm.querySelector(".popup__input_value_name"); //* находим инпут изменения имени.
const popupProfileEditJobInput = popupProfileEditForm.querySelector(".popup__input_value_job"); //* находим инпут изменения доп. инфы о профиле(работа, ect).

//* влючаем валидацию попапа профиля.
const popupProfileEditEnableValidation = new FormValidator(enableValidation, popupProfileEditForm);

//* вызываем селекторы валидации.
popupProfileEditEnableValidation.enableValidation();

//! Переменные относящиеся к попапу профиля:
const popupAddCard = document.querySelector(".popup_type_add-cards"); //* находим попап добавления карточки.
const popupAddCardBtn = document.querySelector(".profile__add-btn"); //* находим кнопку добавления карточки.
const popupAddCardForm = popupAddCard.querySelector(".popup__form[name=popUpCardEditForm]"); //* находим форму с вводом данных карточки.
const popupAddCardNameInput = popupAddCardForm.querySelector(".popup__input_value_add-name"); //* находим инпут имени карточки.
const popupAddCardLinkInput = popupAddCardForm.querySelector(".popup__input_value_link"); //* находим инпут ссылки на картинку для карточки.

//* влючаем валидацию попапа карточек.
const popupAddCardEnableValidation = new FormValidator(enableValidation, popupAddCardForm);

//* вызываем селекторы валидации.
popupAddCardEnableValidation.enableValidation();

//* включаем фукнкционал закрытия попапов по кнопке.
const popupCloseBtn = document.querySelectorAll(".popup__close");

//* указываем заготовленный темплейт карточек.
const templateCards = "#templateCards";

//! Массив с контентом карточек:
const initialCards = [
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


//! Блок функций:

//* функция открытия попапов.
function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener('keyup', closeEscPopup);
    popup.addEventListener('mouseup', closeClickPopup);
};

//* функция закрытия попапов.
function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener('keyup', closeEscPopup);
    popup.removeEventListener('mouseup', closeClickPopup);
};

//* функция закрытия попапов через ESC.
function closeEscPopup(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    };
};

//* функция закрытия попапов через клик.
function closeClickPopup(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
};

//* функция создания карточики.
function createCard(name, link, templateSelector) {
    return new Card(name, link, templateSelector).createCard();
};

//*функция добавления карточек при загрузке.
function addCard(initialCards) {
    initialCards.forEach((element) => {
        photoCardsContainer.append(createCard(element.name, element.link, templateCards));
    });
};

//* функция изменения данных профиля.
function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = popupProfileEditNameInput.value;
    profileJob.textContent = popupProfileEditJobInput.value;
    closePopup(popupProfileEdit);
};

//* функция добавления новой карточки.
function handleAddCardsSubmit (evt) {
    evt.preventDefault();
    photoCardsContainer.prepend(createCard(popupAddCardNameInput.value, popupAddCardLinkInput.value, templateCards));
    closePopup(popupAddCard);
};

//! Блок слушателей:

//* слушатель для открытия попапа редактирования профиля.
popupProfileEditBtn.addEventListener("click", () => {
    openPopup(popupProfileEdit);
    popupProfileEditNameInput.value = profileName.textContent;
    popupProfileEditJobInput.value = profileJob.textContent;
    popupProfileEditEnableValidation.hideFormErrors();
});

//* слушатель для открытия попапа добавления карточки.
popupAddCardBtn.addEventListener("click", () => {
    openPopup(popupAddCard);
    popupAddCardForm.reset();
    popupAddCardEnableValidation.hideFormErrors();
});

//* слушатель кнопки закрытия попапов.
popupCloseBtn.forEach((element) => element.addEventListener("click", () => {
    closePopup(element.closest(".popup"));
}));

//* слушатель отправки данных формы редактирования профиля.
popupProfileEditForm.addEventListener("submit", (evt) => {
    handleProfileFormSubmit (evt);
});

//* слушатель отправки данных формы новой карточки.
popupAddCardForm.addEventListener("submit", (evt) => {
    handleAddCardsSubmit (evt);
});


//* вызываем функцию добавления карточек при загрузке.
addCard(initialCards);


//! Блок экспорта:

export { openPopup }; //* экспортируем фукнцию открытия попапа.