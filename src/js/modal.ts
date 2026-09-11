type ModalElement = HTMLElement;

const TOGGLE_SELECTOR = '[data-fg-toggle="modal"]';
const DISMISS_SELECTOR = '[data-fg-dismiss="modal"]';

let initialized = false;

function getTarget(toggle: HTMLElement): ModalElement | null {
    const selector = toggle.dataset.fgTarget;

    if (!selector) {
        return null;
    }

    try {
        return document.querySelector<ModalElement>(selector);
    } catch {
        return null;
    }
}
function show(modal: ModalElement): void {
    if (modal.classList.contains("show")) {
        return;
    }

    modal.style.display = "block";
    modal.removeAttribute("aria-hidden");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("role", "dialog");

    requestAnimationFrame(() => {
        modal.classList.add("show");
    });

    document.body.classList.add("modal-open");

    createBackdrop(modal);

    const focusable = modal.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    focusable?.focus();
}

function showw(modal: ModalElement): void {
    if (modal.classList.contains("show")) {
        return;
    }

    modal.classList.remove("fade");
    modal.style.display = "block";
    modal.removeAttribute("aria-hidden");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("role", "dialog");

    requestAnimationFrame(() => {
        modal.classList.add("show");
    });

    document.body.classList.add("modal-open");

    createBackdrop(modal);

    const focusable = modal.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    focusable?.focus();
}

function hide(modal: ModalElement): void {
    if (!modal.classList.contains("show")) {
        return;
    }

    modal.classList.remove("show");

    const complete = () => {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        modal.removeAttribute("aria-modal");

        removeBackdrop();

        if (!document.querySelector(".modal.show")) {
            document.body.classList.remove("modal-open");
        }
    };

    if (modal.classList.contains("fade")) {
        modal.addEventListener("transitionend", complete, { once: true });
    } else {
        complete();
    }
}

function toggle(modal: ModalElement): void {
    if (modal.classList.contains("show")) {
        hide(modal);
    } else {
        show(modal);
    }
}

function createBackdrop(modal: ModalElement): void {
    removeBackdrop();

    const backdrop = document.createElement("div");

    backdrop.className = "modal-backdrop fade";

    document.body.appendChild(backdrop);

    requestAnimationFrame(() => {
        backdrop.classList.add("show");
    });
  if(!modal.classList.contains('static-backdrop')){
    backdrop.addEventListener("click", () => {
        hide(modal);
    });
  }
    
}
function removeBackdrop(){
      const backdrops = document.querySelectorAll(".modal-backdrop");
  if(backdrops){
    backdrops.forEach((el) => el.remove());
  }
}
function removeBackdropp(): void {
    const backdrop = document.querySelector(".modal-backdrop");

    if (!backdrop) {
        return;
    }

    backdrop.classList.remove("show");

    backdrop.addEventListener(
        "transitionend",
        () => backdrop.remove(),
        { once: true },
    );

    if (!backdrop.classList.contains("fade")) {
        backdrop.remove();
    }
}

function handleClick(event: MouseEvent): void {
    const target = event.target;

    if (!(target instanceof Element)) {
        return;
    }

    const toggle = target.closest<HTMLElement>(TOGGLE_SELECTOR);

    if (toggle) {
        const modal = getTarget(toggle);

        if (modal) {
            event.preventDefault();
            toggleModal(modal);
            return;
        }
    }

    const dismiss = target.closest<HTMLElement>(DISMISS_SELECTOR);

    if (dismiss) {
        const modal = dismiss.closest<ModalElement>(".modal");

        if (modal) {
            event.preventDefault();
            hide(modal);
        }
    }

    if (target.matches(".modal")) {
        const modal = target as ModalElement;

        hide(modal);
    }
}

function toggleModal(modal: ModalElement): void {
    toggle(modal);
}

function handleKeydown(event: KeyboardEvent): void {
    if (event.key !== "Escape") {
        return;
    }

    const modal = document.querySelector<ModalElement>(".modal.show");

    if (modal) {
        hide(modal);
    }
}

function init(): void {
    if (initialized) {
        return;
    }

    initialized = true;

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeydown);
}

export const modal = {
    init,
    show,
    hide,
    toggle,
};

init();

export default modal;