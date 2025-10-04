export class Modal {
    constructor() {
        this.modal = null;
        this.backdrop = null;
        this.initialize();
    }

    initialize() {
        this.createBackdrop();
        this.bindEvents();
    }

    createBackdrop() {
        this.backdrop = document.querySelector('.modal-backdrop') || this.createNewBackdrop();
    }

    createNewBackdrop() {
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';
        backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: #000;
            opacity: 0.5;
            z-index: 40;
            display: none;
        `;
        document.body.appendChild(backdrop);
        return backdrop;
    }

    bindEvents() {
        document.addEventListener('click', this.handleToggle.bind(this));
    }

    handleToggle(event) {
        if (event.target.dataset.fgToggle === 'modal') {
            const modalHash = event.target.dataset.fgTarget;
            if (typeof modalHash === 'string') {
                const id = modalHash.substring(1);
                if (id) {
                    const modal = document.getElementById(id);
                    if (modal) {
                        this.modal = modal;
                        this.toggle();
                    }
                }
            }
        }
    }

    show() {
        this.modal.classList.add('show');
        this.backdrop.classList.add('show');
        this.backdrop.style.display = 'block';
        document.addEventListener('click', this.handleOutsideClick.bind(this), true);
        this.handleDismiss();
        //document.addEventListener('click', this.handleDismiss.bind(this), true);
    }

    hide() {
        this.modal.classList.remove('show');
        this.backdrop.classList.remove('show');
        this.backdrop.style.display = 'none';
        document.removeEventListener('click', this.handleOutsideClick.bind(this), true);
        //document.removeEventListener('click', this.handleDismiss.bind(this), true);
    }

    toggle() {
        if (this.modal.classList.contains('show')) {
            this.hide();
        } else {
            this.show();
        }
    }

    handleDismiss() {
        const closeButtons = this.modal.querySelectorAll("[data-fg-dismiss=modal]");
        if (closeButtons) {
            closeButtons.forEach(button => {
                button.addEventListener('click', () => this.hide());
            });
        }
    }

    handleOutsideClick(event) {
        if (!this.modal.contains(event.target) && !this.modal.classList.contains('static-backdrop')) {
            this.hide();
        }
    }

    static init() {
        if (typeof window !== 'undefined' && !window.Modal) {
            window.Modal = new Modal();
        }
    }
}