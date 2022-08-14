export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    };

    addItem(element, method) {
        this._container[method](element);
    };

    renderItems() {
        this._items.forEach(item => {
                this._renderer(item);
            }
        );
    };
};