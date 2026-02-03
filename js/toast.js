export class Toast {
    constructor(message, options = {}) {
        this.options = Object.assign({
            type: 'info',
            position: 'top-end',
            size: 'default',
            duration: 5000,
            showCloseButton: true,
            showProgress: true,
            pauseOnHover: true,
        }, options);

        this.message = message;
        this.id = crypto.randomUUID();

        this.toast = null;
        this.toastContainer = null;

        this.timer = null;
        this.progressTimer = null;

        this.startTime = null;
        this.remaining = this.options.duration;

        this.toastContainerInit();
    }

    /* =========================
     * Utilities
     * ========================= */
    cssClasses(classes = []) {
        return classes
            .filter(Boolean)
            .map(c => typeof c === 'string' ? c : (c.value ? c.key : null))
            .filter(Boolean)
            .join(' ');
    }

    /* =========================
     * Classes
     * ========================= */
    getContainerClass(extra = null) {
        const map = {
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
            'toast-container',
            map[this.options.position],
            extra
        ]);
    }

    getToastClass(extra = null) {
        const types = {
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning',
            error: 'toast-error',
        };

        const sizes = {
            default: null,
            xxs: 'toast-xxs',
            xs: 'toast-xs',
            sm: 'toast-sm',
            lg: 'toast-lg',
            xl: 'toast-xl',
            xxl: 'toast-xxl',
        };

        return this.cssClasses([
            'toast',
            types[this.options.type],
            sizes[this.options.size],
            extra
        ]);
    }

    getIcon() {
        return {
            info: 'bi-info-circle',
            success: 'bi-check2-circle',
            warning: 'bi-exclamation-triangle',
            error: 'bi-x-circle',
        }[this.options.type];
    }

    /* =========================
     * Container
     * ========================= */
    toastContainerInit() {
        const id = `toast-container-${this.options.position}`;
        this.toastContainer = document.getElementById(id);

        if (!this.toastContainer) {
            this.toastContainer = document.createElement('div');
            this.toastContainer.id = id;
            this.toastContainer.className = this.getContainerClass();
            document.body.appendChild(this.toastContainer);
        }
    }

    /* =========================
     * Timers
     * ========================= */
    startTimer() {
        if (this.options.duration <= 0) return;

        this.startTime = Date.now();

        this.timer = setTimeout(() => {
            this.remove();
        }, this.remaining);

        if (this.options.showProgress) {
            this.startProgress();
        }
    }

    pauseTimer() {
        if (!this.timer) return;

        clearTimeout(this.timer);
        this.timer = null;

        this.remaining -= Date.now() - this.startTime;

        if (this.progressTimer) {
            clearInterval(this.progressTimer);
            this.progressTimer = null;
        }
    }

    resumeTimer() {
        if (this.remaining <= 0) {
            this.remove();
            return;
        }

        this.startTimer();
    }

    startProgress() {
        const bar = this.toast.querySelector('.toast-progress-bar');
        if (!bar) return;

        const interval = 40;

        this.progressTimer = setInterval(() => {
            const elapsed = Date.now() - this.startTime;
            const percent = Math.max(
                0,
                (this.remaining - elapsed) / this.options.duration * 100
            );

            bar.style.width = `${percent}%`;

            if (percent <= 0) {
                clearInterval(this.progressTimer);
                this.progressTimer = null;
            }
        }, interval);
    }

    /* =========================
     * Render
     * ========================= */
    show() {
        this.toast = document.createElement('div');
        this.toast.id = this.id;
        this.toast.className = this.getToastClass();
        this.toast.role = 'alert';
        this.toast.ariaLive = 'assertive';

        const inner = document.createElement('div');
        inner.className = 'flex items-center gap-2 p-2.5';

        const icon = document.createElement('i');
        icon.className = `icon ${this.getIcon()}`;
        inner.appendChild(icon);

        const content = document.createElement('div');
        content.className = 'flex-1';
        content.innerHTML = this.message;
        inner.appendChild(content);

        if (this.options.showCloseButton) {
            const btn = document.createElement('button');
            btn.className = 'btn-close-toast';
            btn.innerHTML = '<i class="icon bi-x-lg"></i>';
            btn.addEventListener('click', () => this.remove());
            inner.appendChild(btn);
        }

        this.toast.appendChild(inner);

        if (this.options.showProgress) {
            const progress = document.createElement('div');
            progress.className = 'toast-progress';

            const bar = document.createElement('div');
            bar.className = 'toast-progress-bar';
            bar.style.width = '100%';

            progress.appendChild(bar);
            this.toast.appendChild(progress);
        }

        if (this.options.pauseOnHover) {
            this.toast.addEventListener('mouseenter', () => this.pauseTimer());
            this.toast.addEventListener('mouseleave', () => this.resumeTimer());
        }

        this.toastContainer.appendChild(this.toast);
        this.startTimer();
    }

    /* =========================
     * Destroy
     * ========================= */
    remove() {
        if (this.timer) clearTimeout(this.timer);
        if (this.progressTimer) clearInterval(this.progressTimer);

        this.toast?.remove();
        this.toast = null;
    }

    /* =========================
     * Static helpers
     * ========================= */
    static make(message, options) {
        const t = new Toast(message, options);
        t.show();
        return t;
    }

    static success(msg, options = {}) {
        return Toast.make(msg, { ...options, type: 'success' });
    }

    static error(msg, options = {}) {
        return Toast.make(msg, { ...options, type: 'error' });
    }

    static info(msg, options = {}) {
        return Toast.make(msg, { ...options, type: 'info' });
    }

    static warning(msg, options = {}) {
        return Toast.make(msg, { ...options, type: 'warning' });
    }

    static init() {
        if (typeof window !== 'undefined') {
            if (!window.Toast) {
                window.Toast = Toast;
            }
            if (!window.toast) {
                window.toast = (msg, options = {}) => {
                    Toast.make(msg, options);
                }
            }

        }
    }
}