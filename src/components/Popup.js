export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseBtn = this._popup.querySelector('.popup__close');
        this._closeEscPopup = this._handleEscClose.bind(this);
    };

    open() {
        document.addEventListener('keydown', this._closeEscPopup);
        this._popup.classList.add('popup_opened');
    };

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeEscPopup);
    };

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        };
    };

    _closeClickPopup(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        };
    };

    setEventListeners() {
        this._popupCloseBtn.addEventListener('click', this.close.bind(this));
        this._popup.addEventListener('mousedown', (evt) => this._closeClickPopup(evt));
    };
};