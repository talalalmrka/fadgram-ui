/*export class Dropdown {
    constructor(dropdown) {
        this.dropdown = dropdown;
        dropdown.classList.add('inited');
        this.toggleButton = dropdown.querySelector('.dropdown-toggle');
        this.menu = dropdown.querySelector('.dropdown-menu');
        this._addEventListeners();
    }

    // Toggle dropdown visibility
    toggle() {
        const isShown = this.menu.classList.contains('show');
        this.hideAll();  // Hide other open dropdowns
        if (!isShown) {
            this.show();
        }
    }

    // Show the dropdown
    show() {
        this.menu.classList.add('show');
        this.toggleButton.setAttribute('aria-expanded', 'true');
        document.addEventListener('click', this._handleOutsideClick.bind(this), true);
    }

    // Hide the dropdown
    hide() {
        this.menu.classList.remove('show');
        this.toggleButton.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', this._handleOutsideClick.bind(this), true);
    }

    // Hide all open dropdowns
    hideAll() {
        const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
        if (openDropdowns) {
            openDropdowns.forEach(menu => {
                menu.classList.remove('show');
                const menuToggleButton = menu.closest('.dropdown').querySelector('.dropdown-toggle');
                if (menuToggleButton) {
                    menuToggleButton.setAttribute('aria-expanded', 'false');
                }
            });
        }

    }

    // Event listener for clicks outside the dropdown
    _handleOutsideClick(event) {
        if (!this.dropdown.contains(event.target)) {
            this.hide();
        }
    }

    // Add necessary event listeners
    _addEventListeners() {
        if (this.toggleButton) {
            this.toggleButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.toggle();
            });

            this.toggleButton.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    this.hide();
                }
            });
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
}*/
export class Dropdown {
    constructor(element) {
        this.element = element;
        this.toggle = element.querySelector('.dropdown-toggle');
        this.menu = element.querySelector('.dropdown-menu');
        this.initialize();
    }

    initialize() {
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

// Initialize all dropdowns
/*document.querySelectorAll('.dropdown').forEach(element => {
    new Dropdown(element);
});*/