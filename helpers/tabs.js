export class Tabs {
    constructor(element) {
        this.currentId = null;
        this.element = element;
        this.buttons = this.element.querySelectorAll('[role=tab]');
        this.tabs = this.element.querySelectorAll('[role=tabpanel]');
        this._initFirstTab();
        this._addListeners();
        this.element.classList.add('inited');
    }
    _initFirstTab() {
        const firstTabButton = this.buttons[0];
        if (firstTabButton) {
            const id = firstTabButton.getAttribute('aria-controls');
            if (id) {
                this.currentId = id;
                this._toggle();
            }
        }
    }
    _toggle() {
        this.buttons.forEach(button => {
            if (button.getAttribute('aria-controls') === this.currentId) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        this.tabs.forEach(tab => {
            if (tab.id == this.currentId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
    _addListeners() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => this._onButtonClick(e));
        });
    }
    _onButtonClick(e) {
        e.preventDefault();
        const tabId = e.target.getAttribute('aria-controls');
        if (typeof tabId !== 'undefined') {
            this.currentId = tabId;
            this._toggle();
        }
    }
    static init() {
        document.querySelectorAll('[role=tablist]').forEach(tabs => {
            if (!tabs.classList.contains('inited')) {
                new Tabs(tabs);
            }
        });
    }
}