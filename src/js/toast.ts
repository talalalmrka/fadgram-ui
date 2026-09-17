import { cssClasses } from "@gen/helpers";

export const toastTypes = ["info", "success", "warning", "error"] as const;

export type ToastType = (typeof toastTypes)[number];

export const toastPositions = [
  "top-start",
  "top-center",
  "top-end",
  "center-start",
  "center",
  "center-end",
  "bottom-start",
  "bottom-center",
  "bottom-end",
] as const;

export type ToastPosition = (typeof toastPositions)[number];

export const toastSizes = [
  "default",
  "xxs",
  "xs",
  "sm",
  "lg",
  "xl",
  "xxl",
] as const;

export type ToastSize = (typeof toastSizes)[number];

export interface ToastOptions {
  type?: ToastType;
  position?: ToastPosition;
  size?: ToastSize;
  duration?: number;
  showCloseButton?: boolean;
  showProgress?: boolean;
  pauseOnHover?: boolean;
}

export interface ResolvedToastOptions {
  type: ToastType;
  position: ToastPosition;
  size: ToastSize;
  duration: number;
  showCloseButton: boolean;
  showProgress: boolean;
  pauseOnHover: boolean;
}

export class Toast {
  public readonly id: string;
  public readonly message: string;
  public readonly options: ResolvedToastOptions;

  private toast: HTMLDivElement | null = null;
  private toastContainer: HTMLDivElement | null = null;

  private timer: ReturnType<typeof setTimeout> | null = null;
  private progressTimer: ReturnType<typeof setInterval> | null = null;

  private startTime: number | null = null;
  private remaining: number;

  constructor(message: string, options: ToastOptions = {}) {
    this.message = message;

    this.options = {
      type: "info",
      position: "top-end",
      size: "default",
      duration: 5000,
      showCloseButton: true,
      showProgress: true,
      pauseOnHover: true,
      ...options,
    };
    console.log("toast options", options);
    this.id = crypto.randomUUID();
    this.remaining = this.options.duration;

    this.initContainer();
  }

  private getContainerClass(extra?: string | null): string {
    const positions: Record<ToastPosition, string> = {
      "top-start": "toast-container-top-start",
      "top-center": "toast-container-top-center",
      "top-end": "toast-container-top-end",
      "center-start": "toast-container-center-start",
      center: "toast-container-center",
      "center-end": "toast-container-center-end",
      "bottom-start": "toast-container-bottom-start",
      "bottom-center": "toast-container-bottom-center",
      "bottom-end": "toast-container-bottom-end",
    };

    return cssClasses(
      "toast-container",
      positions[this.options.position],
      extra,
    );
  }

  private getToastClass(extra?: string | null): string {
    const types: Record<ToastType, string> = {
      info: "toast-info",
      success: "toast-success",
      warning: "toast-warning",
      error: "toast-error",
    };

    const sizes: Record<ToastSize, string | null> = {
      default: null,
      xxs: "toast-xxs",
      xs: "toast-xs",
      sm: "toast-sm",
      lg: "toast-lg",
      xl: "toast-xl",
      xxl: "toast-xxl",
    };

    return cssClasses(
      "toast",
      types[this.options.type] ?? "toast-info",
      sizes[this.options.size],
      extra,
    );
  }

  private getIcon(): string {
    const icons: Record<ToastType, string> = {
      info: "bi-info-circle",
      success: "bi-check2-circle",
      warning: "bi-exclamation-triangle",
      error: "bi-x-circle",
    };

    return icons[this.options.type] ?? icons.info;
  }

  private initContainer(): void {
    const id = `toast-container-${this.options.position}`;

    const existing = document.getElementById(id);

    if (existing instanceof HTMLDivElement) {
      this.toastContainer = existing;
      return;
    }

    this.toastContainer = document.createElement("div");
    this.toastContainer.id = id;
    this.toastContainer.className = this.getContainerClass();

    document.body.appendChild(this.toastContainer);
  }

  private startTimer(): void {
    if (this.options.duration <= 0) {
      return;
    }

    this.startTime = Date.now();

    this.timer = setTimeout(() => {
      this.remove();
    }, this.remaining);

    if (this.options.showProgress) {
      this.startProgress();
    }
  }

  private pauseTimer(): void {
    if (!this.timer || this.startTime === null) {
      return;
    }

    clearTimeout(this.timer);
    this.timer = null;

    this.remaining -= Date.now() - this.startTime;

    this.stopProgress();
  }

  private resumeTimer(): void {
    if (this.remaining <= 0) {
      this.remove();
      return;
    }

    this.startTimer();
  }

  private startProgress(): void {
    if (!this.toast || this.startTime === null) {
      return;
    }

    const bar = this.toast.querySelector<HTMLDivElement>(".toast-progress-bar");

    if (!bar) {
      return;
    }

    const interval = 40;

    this.progressTimer = setInterval(() => {
      if (this.startTime === null) {
        return;
      }

      const elapsed = Date.now() - this.startTime;

      const percent = Math.max(
        0,
        ((this.remaining - elapsed) / this.options.duration) * 100,
      );

      bar.style.width = `${percent}%`;

      if (percent <= 0) {
        this.stopProgress();
      }
    }, interval);
  }

  private stopProgress(): void {
    if (!this.progressTimer) {
      return;
    }

    clearInterval(this.progressTimer);
    this.progressTimer = null;
  }

  public show(): this {
    if (!this.toastContainer) {
      return this;
    }

    this.toast = document.createElement("div");

    this.toast.id = this.id;
    this.toast.className = this.getToastClass();
    this.toast.setAttribute("role", "alert");
    this.toast.setAttribute("aria-live", "assertive");

    const inner = document.createElement("div");
    inner.className = "flex items-center gap-2 p-2.5";

    const icon = document.createElement("i");
    icon.className = `icon ${this.getIcon()}`;

    inner.appendChild(icon);

    const content = document.createElement("div");
    content.className = "flex-1";
    content.innerHTML = this.message;

    inner.appendChild(content);

    if (this.options.showCloseButton) {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "btn-close-toast";
      button.innerHTML = '<i class="icon bi-x-lg"></i>';

      button.addEventListener("click", () => {
        this.remove();
      });

      inner.appendChild(button);
    }

    this.toast.appendChild(inner);

    if (this.options.showProgress) {
      const progress = document.createElement("div");
      progress.className = "toast-progress";

      const bar = document.createElement("div");
      bar.className = "toast-progress-bar";
      bar.style.width = "100%";

      progress.appendChild(bar);
      this.toast.appendChild(progress);
    }

    if (this.options.pauseOnHover) {
      this.toast.addEventListener("mouseenter", () => {
        this.pauseTimer();
      });

      this.toast.addEventListener("mouseleave", () => {
        this.resumeTimer();
      });
    }

    this.toastContainer.appendChild(this.toast);

    this.startTimer();

    return this;
  }

  public remove(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.stopProgress();

    this.toast?.remove();

    this.toast = null;
  }

  public static make(message: string, options: ToastOptions = {}): Toast {
    const toast = new Toast(message, options);

    toast.show();

    return toast;
  }

  public static success(message: string, options: ToastOptions = {}): Toast {
    return Toast.make(message, {
      ...options,
      type: "success",
    });
  }

  public static error(message: string, options: ToastOptions = {}): Toast {
    return Toast.make(message, {
      ...options,
      type: "error",
    });
  }

  public static info(message: string, options: ToastOptions = {}): Toast {
    return Toast.make(message, {
      ...options,
      type: "info",
    });
  }

  public static warning(message: string, options: ToastOptions = {}): Toast {
    return Toast.make(message, {
      ...options,
      type: "warning",
    });
  }

  public static init(): void {
    if (typeof window === "undefined") {
      return;
    }

    if (!window.Toast) {
      window.Toast = Toast;
    }

    if (!window.toast) {
      window.toast = (message: string, options: ToastOptions = {}): Toast => {
        return Toast.make(message, options);
      };
    }
  }
}

export const toast = Toast;
export default toast;
