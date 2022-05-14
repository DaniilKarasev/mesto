//! Блок импорта:

//* импортируем функцию открытия попапа.
import { openPopup } from './index.js';

//! Блок переменных:

const popUpCardsImg = document.querySelector(".popup_type_cards-img"); //* находим попап просмотра картинки карточки
const popUpCardsImgSrc  = popUpCardsImg.querySelector(".popup__img"); //* находим картинку в попапе просмотра картинки карточки
const popUpCardsImgText  = popUpCardsImg.querySelector(".popup__img-text"); //* находим текст для картинки


//! Класс карточек:
class Card {

    constructor(name, link, template) {
        this._name = name;
        this._link = link;
        this._template = template;
    };

    //* метод выбора и возврата теймплейтов карточки.
    _getCardTemplate() {
        this._cardTemplate = document.querySelector(this._template).content.querySelector(".photo-cards__content-wrapper").cloneNode(true);
        return this._cardTemplate;
    };

    //* метод создания карточек.
    createCard() {
        this._card = this._getCardTemplate();

        this._photo = this._card.querySelector(".photo-cards__img");
        this._title = this._card.querySelector(".photo-cards__text");
        this._deleteBtn = this._card.querySelector(".photo-cards__delete-btn");
        this._likeBtn = this._card.querySelector(".photo-cards__like-btn");

        this._photo.src = this._link;
        this._photo.alt = this._name;
        this._title.textContent = this._name;

        this._setEventListeners();

        return this._card;
    };
    //* метод открытия попапа просмотра картинки карточки.
    _openCardPopup() {
        popUpCardsImgSrc .src = this._link;
        popUpCardsImgSrc .alt = this._name;
        popUpCardsImgText .textContent = this._name;
        openPopup(popUpCardsImg);
    };

    //* метод постановки лайка для карточки.
    _likeCard(e) {
        this._likeBtn.classList.toggle("photo-cards__like-btn_active");
    };

    //* метод удаления карточек.
    _deleteCard() {
        this._card.remove();
        this._card = null;
    };

    //* добавление слушателей удаления\лайка\открытия попапа карточки.
    _setEventListeners() {
        this._deleteBtn.addEventListener("click", () => this._deleteCard());
        this._likeBtn.addEventListener("click", (evt) => this._likeCard(evt));
        this._photo.addEventListener("click", (evt) => this._openCardPopup(evt));
    };
};

//! Блок экспорта:

export { Card }; //* экспортируем класс карточек.