export class Dropdown {
    constructor(element) {
        this.element = element;
        this.toggle = element.querySelector('.dropdown-toggle');
        this.menu = element.querySelector('.dropdown-menu');
        this.initialize();
    }

    initialize() {
        this.element.classList.add('inited');
        this.toggle.addEventListener('click', (e) => this.toggleMenu(e));
        document.addEventListener('click', (e) => this.closeOnOutsideClick(e));
        document.addEventListener('keydown', (e) => this.closeOnEsc(e));
    }

    toggleMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        this.menu.classList.toggle('show');
    }

    closeOnOutsideClick(e) {
        if (!this.element.contains(e.target)) {
            this.menu.classList.remove('show');
        }
    }

    closeOnEsc(e) {
        if (e.key === 'Escape') {
            this.menu.classList.remove('show');
        }
    }
    static create(dropdown) {
        if (!dropdown.classList.contains('inited')) {
            new Dropdown(dropdown);
        }
    }

    static init() {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            Dropdown.create(dropdown);
        });
    }
}