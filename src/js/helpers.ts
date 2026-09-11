export function delegateClick(
    selector: string,
    handler: (element: Element, event: MouseEvent) => void,
): () => void {
    const listener = (event: MouseEvent) => {
        const target = event.target;

        if (!(target instanceof Element)) {
            return;
        }

        const element = target.closest(selector);

        if (!element) {
            return;
        }

        handler(element, event);
    };

    document.addEventListener("click", listener);

    return () => {
        document.removeEventListener("click", listener);
    };
}