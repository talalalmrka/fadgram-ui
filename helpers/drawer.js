class Drawer {
    constructor(drawer) {
        this.drawer = drawer;
        this.drawer.classList.add('inited');
        //console.log('Drawer created', this.drawer);
        this.id = this.drawer.id;
        this.toggles = document.querySelectorAll(`[data-fg-toggle="drawer"][data-fg-target="#${this.id}"]`);
        this.closeButton = this.drawer.querySelector('.drawer-close');
        this._addEventListeners();
    }

    // Toggle drawer visibility
    toggle() {
        if (this.drawer.classList.contains('show')) {
            this.hide();
        } else {
            this.hideAll();  // Hide other open drawers
            this.show();
        }
    }

    // Show the drawer
    show() {
        this.drawer.classList.add('show');
        document.addEventListener('click', this._handleOutsideClick.bind(this), true);
    }

    // Hide the drawer
    hide() {
        this.drawer.classList.remove('show');
        document.removeEventListener('click', this._handleOutsideClick.bind(this), true);
    }

    // Hide all open drawers
    hideAll() {
        const opendrawers = document.querySelectorAll('.drawer.show');
        if (opendrawers) {
            opendrawers.forEach(drawer => {
                drawer.classList.remove('show');
            });
        }

    }

    _togglesHasEventTarget(event) {
        return Array.from(this.toggles).some(toggle => toggle.contains(event.target));
    }
    // Event listener for clicks outside the drawer
    _handleOutsideClick(event) {
        if (!this.drawer.contains(event.target) && !this._togglesHasEventTarget(event)) {
            this.hide();
        }
    }

    // Add necessary event listeners
    _addEventListeners() {
        if (this.toggles) {
            this.toggles.forEach(toggle => {
                toggle.addEventListener('click', (event) => {
                    event.preventDefault();

                    this.toggle();
                });
            });
        }
        if (this.closeButton) {
            this.closeButton.addEventListener('click', (event) => {
                event.preventDefault();
                //console.log('Close button clicked');
                this.hide();
            });
        }
    }

    static create(drawer) {
        if (!drawer.classList.contains('inited')) {
            new Drawer(drawer);
        }
    }

    static init() {
        document.querySelectorAll('.drawer').forEach(drawer => {
            Drawer.create(drawer);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    Drawer.init();
});