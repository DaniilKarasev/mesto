export default class Card {

    constructor({data}, template, {handleCardClick}) {
        this._imgText = data.name;
        this._imgSrc = data.link;
        this._template = template;
        this.handleCardClick = handleCardClick;
    };

    _getCardTemplate() {
        this._cardTemplate = document.querySelector(this._template).content.querySelector('.photo-cards__content-wrapper').cloneNode(true);
        
        return this._cardTemplate;
    };

    createCard() {
        this._card = this._getCardTemplate();

        this._photo = this._card.querySelector('.photo-cards__img');
        this._title = this._card.querySelector('.photo-cards__text');
        this._deleteBtn = this._card.querySelector('.photo-cards__delete-btn');
        this._likeBtn = this._card.querySelector('.photo-cards__like-btn');

        this._photo.src = this._imgSrc;
        this._photo.alt = this._imgText;
        this._title.textContent = this._imgText;

        this._setEventListeners();

        return this._card;
    };

    _imgPopupOpen() {
        this._photo.addEventListener("click", () => {
                    this.handleCardClick();
                }
            );
    };
    
    _likeCard() {
        this._likeBtn.addEventListener('click', () => {
                this._likeBtn.classList.toggle('photo-cards__like-btn_active');
            }
        );    
    };

    _deleteCard() {
        this._deleteBtn.addEventListener('click', () => {
                this._card.remove();
                this._card = null;
            }
        );
    };

    _setEventListeners() {
        this._imgPopupOpen();
        this._likeCard();
        this._deleteCard();
    };
};