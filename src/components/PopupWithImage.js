import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        
        this._popupImg = this._popup.querySelector('.popup__img');
        this._popupImgText = this._popup.querySelector('.popup__img-text');
    };

    open(data) {
        this._popupImg.src = data.link;
        this._popupImg.alt = data.name;
        this._popupImgText.textContent = data.name;

        super.open();
    };
};