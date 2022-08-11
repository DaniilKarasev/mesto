export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    };

    addItem(element, method) {
        this._container[method](element);
    };

    renderItems() {
        this._renderedItems.forEach(item => {
                this._renderer(item);
            }
        );
    };
};