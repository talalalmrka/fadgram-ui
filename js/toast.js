export default class Toast {
    constructor(message, options = {}) {
        this.options = Object.assign({}, {
            type: 'info',
            position: 'top-end',
            timeout: 5000,
        }, options);
        this.message = message;
        this.toastContainer = document.getElementById(`toast-container-${this.options.position}`);
        if (!this.toastContainer) {
            this.createToastContainer();
        }
    }
    createToastContainer() {
        this.toastContainer = document.createElement('div');
        this.toastContainer.id = `toast-container-${this.options.position}`;
        this.toastContainer.classList.add('toast-container', this.options.position, this.options.type);
        document.body.appendChild(this.toastContainer);
    }
    show() {
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast-${this.options.type}`);
        toast.role = 'alert';
        toast.ariaLive = 'assertive';
        toast.ariaAtomic = 'true';
        const closeButton = document.createElement('a');
        closeButton.href = '#!';
        closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>';
        closeButton.addEventListener('click', function (evt) {
            evt.preventDefault();
            toast.remove();
        });
        toast.innerHTML = `<div class="grow">${this.message}</div>`;
        toast.appendChild(closeButton);
        this.toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, this.options.timeout);
    }
    static make(message, options) {
        const toast = new Toast(message, options);
        toast.show();
        return toast;
    }
    static success(message, position) {
        Toast.make(message, { type: 'success', position: position });
    }

    static error(message, position) {
        Toast.make(message, { type: 'error', position: position });
    }

    static info(message, position) {
        Toast.make(message, { type: 'info', position: position });
    }

    static warning(message, position) {
        Toast.make(message, { type: 'warning', position: position });
    }
}
