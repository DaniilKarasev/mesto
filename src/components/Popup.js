export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseBtn = this._popup.querySelector('.popup__close');
    };

    open() {
        this.setEventListeners();

        this._popup.classList.add('popup_opened');
    };

    close() {
        this._popup.classList.remove('popup_opened');
        
        this.removeEventListeners();
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
        this._closeEscPopup = this._handleEscClose.bind(this);
        this._popupCloseBtn.addEventListener('click', this.close.bind(this));
        this._popup.addEventListener('mousedown', (evt) => this._closeClickPopup(evt));
        document.addEventListener('keydown', this._closeEscPopup);
    };

    removeEventListeners() {
        this._popupCloseBtn.removeEventListener('click', this.close.bind(this));
        this._popup.removeEventListener('mousedown', (evt) => this._closeClickPopup(evt));
        document.removeEventListener('keydown', this._closeEscPopup);
    };
};