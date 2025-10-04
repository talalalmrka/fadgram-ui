export class Offcanvas {
    constructor(offcanvas) {
        this.offcanvas = offcanvas;
        this.offcanvas.classList.add('inited');
        //console.log('offcanvas created', this.offcanvas);
        this.id = this.offcanvas.id;
        this.toggles = document.querySelectorAll(`[data-fg-toggle="offcanvas"][data-fg-target="#${this.id}"]`);
        this.closeButton = this.offcanvas.querySelector('.offcanvas-close');
        this._addEventListeners();
    }

    // Toggle offcanvas visibility
    toggle() {
        if (this.offcanvas.classList.contains('show')) {
            this.hide();
        } else {
            this.hideAll();  // Hide other open offcanvass
            this.show();
        }
    }

    // Show the offcanvas
    show() {
        this.offcanvas.classList.add('show');
        document.addEventListener('click', this._handleOutsideClick.bind(this), true);
    }

    // Hide the offcanvas
    hide() {
        this.offcanvas.classList.remove('show');
        document.removeEventListener('click', this._handleOutsideClick.bind(this), true);
    }

    // Hide all open offcanvass
    hideAll() {
        const openoffcanvass = document.querySelectorAll('.offcanvas.show');
        if (openoffcanvass) {
            openoffcanvass.forEach(offcanvas => {
                offcanvas.classList.remove('show');
            });
        }

    }

    _togglesHasEventTarget(event) {
        return Array.from(this.toggles).some(toggle => toggle.contains(event.target));
    }
    // Event listener for clicks outside the offcanvas
    _handleOutsideClick(event) {
        if (!this.offcanvas.contains(event.target) && !this._togglesHasEventTarget(event)) {
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

    static create(offcanvas) {
        if (!offcanvas.classList.contains('inited')) {
            new Offcanvas(offcanvas);
        }
    }

    static init() {
        document.querySelectorAll('.offcanvas').forEach(offcanvas => {
            Offcanvas.create(offcanvas);
        });
    }
}
