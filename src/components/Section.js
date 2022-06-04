export default class Section {
    constructor({items, renderer}, container) {
        this._renderedItems = items;
        this._container = document.querySelector(container);
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