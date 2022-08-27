export default class Card {

    constructor({data, openPopupWithDelete, handleCardClick, likeHandleClick, api, userId}, templateSelector) {
        this._api = api;
        this._imgText = data.name;
        this._imgSrc = data.link;
        this._likes = data.likes;
        this._cardId = data._id;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this.templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
        this._likeHandleClick = likeHandleClick;
        this._openPopupWithDelete = openPopupWithDelete;
    };

    _hideDeleteButton() {
        if (this._ownerId !== this._userId) {
            this._deleteBtn.hidden = true;
        }
    }

    _hideLikeButton() {
        if (this._likes.find((Obj) => this._userId === Obj._id)) {
            this._card
                .querySelector(".photo-cards__like-btn")
                .classList.add("photo-cards__like-btn_active");
        }
    }

    _getCardTemplate() {
        const cardTemplate = document
            .querySelector(this.templateSelector)
            .content.querySelector(".photo-cards__content-wrapper")
            .cloneNode(true);
        
        return cardTemplate;
    };

    createCard() {
        this._card = this._getCardTemplate();

        this._photo = this._card.querySelector(".photo-cards__img");
        this._title = this._card.querySelector(".photo-cards__text");
        this._deleteBtn = this._card.querySelector(".photo-cards__delete-btn");
        this._likeBtn = this._card.querySelector(".photo-cards__like-btn");
        this._cardLikeCount = this._card.querySelector(".photo-cards__like-count");

        this._photo.src = this._imgSrc;
        this._photo.alt = this._imgText;
        this._title.textContent = this._imgText;
        this._cardLikeCount.textContent = this._likes.length;

        this._setEventListeners();

        return this._card;
    };

    _imageSetEventListeners() {
        this._photo.addEventListener("click", () => {
            this.handleCardClick();
        });
    }

    _deleteSetEventListeners() {
        this._deleteBtn.addEventListener("click", () => {
            this._openPopupWithDelete();
        });
    }

    handleDeleteImage() {
        this._card.remove();
        this._card = null;
    }

        _likeSetEventListeners() {
        this._likeBtn.addEventListener("click", () => {
            this._likeHandleClick();
        });
    }

    handleLikeCard(likes) {
        this._cardLikeCount.textContent = likes.length;

        if (!this._likeBtn.classList.contains("photo-cards__like-btn_active")) {
            this._likeBtn.classList.add("photo-cards__like-btn_active");
        } else {
            this._likeBtn.classList.remove("photo-cards__like-btn_active");
        }
    }


    _setEventListeners() {
        this._likeSetEventListeners();
        this._imageSetEventListeners();
        this._deleteSetEventListeners();
        this._hideDeleteButton();
        this._hideLikeButton();
    }
};