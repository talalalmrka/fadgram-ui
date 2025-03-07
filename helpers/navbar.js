export class NavBar {
    constructor(navbar) {
        this.navbar = navbar;
        navbar.classList.add('inited');
        this.toggleButton = navbar.querySelector('.navbar-toggle');
        this.collapse = navbar.querySelector('.navbar-collapse');
        this._addEventListeners();
    }
    toggle() {
        if (this.collapse.classList.contains('show')) {
            this.hide();
        } else {
            this.show();
        }
    }
    show() {
        if (this.collapse) {
            this.collapse.classList.add('show');
        }
    }

    hide() {
        if (this.collapse) {
            this.collapse.classList.remove('show');
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

    static create(navbar) {
        if (!navbar.classList.contains('inited')) {
            new NavBar(navbar);
        }
    }

    static init() {
        document.querySelectorAll('.navbar').forEach(navbar => {
            NavBar.create(navbar);
        });
    }
}