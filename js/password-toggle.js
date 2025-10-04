export class PasswordToggle {
    constructor(input) {
        if (input.classList.contains('password-toggle-inited')) {
            return;
        }
        this.container = null;
        this.input = input;
        this.hideIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16"><path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/><path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/></svg>';
        this.showIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/></svg>';
        this._createContainer();
        this._createButton();
        this._addEventListeners();
    }
    _createContainer() {
        if (!this.input.parentNode.classList.contains('form-control-container')) {
            const input = this.input;
            input.classList.add('has-end-icon');
            const container = document.createElement("div");
            container.classList.add("form-control-container");
            input.parentNode.replaceChild(container, input);
            container.appendChild(input);
            this.input = input;
            this.container = container;
        } else {
            this.container = this.input.parentNode;
        }
    }
    _createButton() {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'end-icon btn-password-toggle';
        button.innerHTML = this.showIcon;
        this.button = button;
        this.container.appendChild(button);
        this.input.classList.add('password-toggle-inited');
    }
    _addEventListeners() {
        this.button.addEventListener('click', (e) => this.toggle(e));
    }
    toggle(e) {
        e.preventDefault();
        this.input.type = this.input.type === "password" ? "text" : "password";
        this.button.innerHTML = this.input.type === "password" ? this.showIcon : this.hideIcon;
    }
    static init() {
        document.querySelectorAll('input[type=password]').forEach(input => {
            new PasswordToggle(input);
        });
    }
}