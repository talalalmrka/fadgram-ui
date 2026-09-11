const TOGGLE_SELECTOR = '[data-fg-toggle="dropdown"], .dropdown-toggle';
const DROPDOWN_SELECTOR = ".dropdown";
const MENU_SELECTOR = ".dropdown-menu";

function getDropdown(element: Element): HTMLElement | null {
    return element.closest<HTMLElement>(DROPDOWN_SELECTOR);
}

function getMenu(dropdown: HTMLElement): HTMLElement | null {
    return dropdown.querySelector<HTMLElement>(MENU_SELECTOR);
}

function getToggle(dropdown: HTMLElement): HTMLElement | null {
    return dropdown.querySelector<HTMLElement>(TOGGLE_SELECTOR);
}

function isOpen(dropdown: HTMLElement): boolean {
    return dropdown.classList.contains("show");
}

function open(dropdown: HTMLElement): void {
    const menu = getMenu(dropdown);

    if (!menu) {
        return;
    }

    dropdown.classList.add("show");
    menu.classList.add("show");

    getToggle(dropdown)?.setAttribute("aria-expanded", "true");
}

function close(dropdown: HTMLElement): void {
    const menu = getMenu(dropdown);

    if (!menu) {
        return;
    }

    dropdown.classList.remove("show");
    menu.classList.remove("show");

    getToggle(dropdown)?.setAttribute("aria-expanded", "false");
}

function toggle(dropdown: HTMLElement): void {
    if (isOpen(dropdown)) {
        close(dropdown);
        return;
    }

    closeAll(dropdown);
    open(dropdown);
}

function closeAll(except?: HTMLElement): void {
    document
        .querySelectorAll<HTMLElement>(DROPDOWN_SELECTOR)
        .forEach((dropdown) => {
            if (dropdown !== except) {
                close(dropdown);
            }
        });
}

function handleClick(event: MouseEvent): void {
    const target = event.target;

    if (!(target instanceof Element)) {
        return;
    }

    const toggleElement = target.closest(TOGGLE_SELECTOR);

    if (toggleElement) {
      console.log("toggle clicked", toggleElement);
        const dropdown = getDropdown(toggleElement);

        if (!dropdown) {
            return;
        }

        event.preventDefault();
        toggle(dropdown);

        return;
    }

    if (!target.closest(DROPDOWN_SELECTOR)) {
        closeAll();
    }
}

function handleKeydown(event: KeyboardEvent): void {
    if (event.key !== "Escape") {
        return;
    }

    const target = event.target;

    if (!(target instanceof Element)) {
        return;
    }

    const dropdown = getDropdown(target);

    if (!dropdown) {
        closeAll();
        return;
    }

    close(dropdown);
    getToggle(dropdown)?.focus();
}

function init(): void {
  console.log("init dropdown");
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeydown);
}

init();

export const dropdown = {
    open,
    close,
    toggle,
    closeAll,
};