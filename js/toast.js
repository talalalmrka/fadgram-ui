export default class Toast {
    constructor(message, options = {}) {
        this.options = Object.assign({}, {
            type: 'info',
            position: 'top-end',
            size: 'default',
            duration: 5000,
            showCloseButton: true,
            showProgress: true,
        }, options);
        this.message = message;
        this.id = crypto.randomUUID();
        this.toastContainer;
        this.toast;
        this.progressTimer;
        this.toastContainerInit();
    }
    cssClasses(classes) {
        const result = [];

        for (const item of classes) {
            if (!item) continue;

            if (typeof item === 'string') {
                result.push(item);
                continue;
            }

            if (
                typeof item === 'object' &&
                typeof item.key === 'string' &&
                item.value === true
            ) {
                result.push(item.key);
            }
        }

        return result.join(' ');
    }

    getContainerClass(className = null) {
        const classes = {
            "top-start": "toast-container-top-start",
            "top-center": "toast-container-top-center",
            "top-end": "toast-container-top-end",
            "center-start": "toast-container-center-start",
            "center": "toast-container-center",
            "center-end": "toast-container-center-end",
            "bottom-start": "toast-container-bottom-start",
            "bottom-center": "toast-container-bottom-center",
            "bottom-end": "toast-container-bottom-end",
        };
        return this.cssClasses([
            "toast-container",
            classes[this.options.position],
            className,
        ]);
    }

    getToastClass(className = null) {
        const TypeClasses = {
            "info": "toast-info",
            "success": "toast-success",
            "warning": "toast-warning",
            "error": "toast-error",
        };
        const SizeClasses = {
            "default": null,
            "xxs": "toast-xxs",
            "xs": "toast-xs",
            "sm": "toast-sm",
            "lg": "toast-lg",
            "xl": "toast-xl",
            "xxl": "toast-xxl",
        };
        return this.cssClasses([
            "toast",
            TypeClasses[this.options.type],
            SizeClasses[this.options.size],
            className
        ]);
    }
    getIcon() {
        const icons = {
            'info': 'bi-info-circle',
            'success': 'bi-check2-circle',
            'warning': 'bi-exclamation-triangle',
            'error': 'bi-x-circle',
        };
        return icons[this.options.type];
    }
    toastContainerInit() {
        this.toastContainer = document.getElementById(`toast-container-${this.options.position}`);
        if (this.toastContainer) {
            return;
        }
        this.toastContainer = document.createElement('div');
        this.toastContainer.id = `toast-container-${this.options.position}`;
        this.toastContainer.className = this.getContainerClass();
        document.body.appendChild(this.toastContainer);
    }
    createToastContainer() {

    }
    show() {
        try {
            this.toast = document.createElement('div');
            this.toast.id = this.id;
            this.toast.className = this.getToastClass();
            this.toast.role = 'alert';
            this.toast.ariaLive = 'assertive';
            this.toast.ariaAtomic = 'true';
            const toastInner = document.createElement('div');
            toastInner.className = 'flex items-center gap-2 p-2.5';
            const toastIcon = document.createElement('i');
            const icon = this.getIcon();
            toastIcon.className = `icon ${icon}`;
            toastInner.appendChild(toastIcon);
            const toastContent = document.createElement('div');
            toastContent.className = 'flex-1';
            toastContent.innerHTML = this.message;
            toastInner.appendChild(toastContent);
            if (this.options.showCloseButton) {
                const closeButton = document.createElement('button');
                closeButton.type = 'button';
                closeButton.ariaLabel = 'close';
                closeButton.className = 'btn-close-toast';
                closeButton.innerHTML = '<i class="icon bi-x-lg"></i>';
                const _t = this;
                closeButton.addEventListener('click', function (evt) {
                    evt.preventDefault();
                    _t.remove();
                });
                toastInner.appendChild(closeButton);
            }
            this.toast.appendChild(toastInner);

            if (this.options.showProgress) {
                let currentProgress = 100;
                const interval = 40;
                const step = 100 / (this.options.duration / interval);
                const progress = document.createElement('div');
                progress.className = 'toast-progress';
                progress.role = 'progressbar';
                const progressBar = document.createElement('div');
                progressBar.className = 'toast-progress-bar';
                progressBar.style.width = '100%';
                progress.appendChild(progressBar);
                progress.appendChild(progressBar);
                this.toast.appendChild(progress);
                this.progressTimer = setInterval(() => {
                    currentProgress -= step;
                    if (currentProgress <= 0) {
                        currentProgress = 0;
                        clearInterval(this.progressTimer);
                        this.progressTimer = false;
                    }
                    progressBar.style.width = `${currentProgress}%`;
                }, interval);
            }
            this.toastContainer.appendChild(this.toast);
            if (this.options.duration > 0) {
                const _ts = this;
                setTimeout(() => {
                    _ts.remove();
                }, this.options.duration);
            }
        } catch (e) {
            console.log(e);
        }
    }
    remove() {
        if (!this.toast) {
            console.log('Toast not found!');
            return;
        }
        if (this.progressTimer) {
            clearInterval(this.progressTimer);
            this.progressTimer = false;
        }
        this.toast.remove();
    }
    static make(message, options) {
        const toaster = new Toast(message, options);
        toaster.show();
        return toaster;
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
